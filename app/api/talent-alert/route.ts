import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { sendTalentAlertEmail } from "@/lib/talent-alert-mailer";

type Body = {
  query?: string;
  neededDate?: string;
  neededDates?: string[];
  employmentType?: string;
  casualNeedsDates?: boolean;
  jobs?: Array<{ role?: string; description?: string; dates?: string[] }>;
};

function weekdayTokens(isoDate: string) {
  const d = new Date(`${isoDate}T00:00:00`);
  const short = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"][d.getUTCDay()];
  const full = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ][d.getUTCDay()];
  return [short, full];
}

function hasDateAvailability(availability: unknown, neededDate: string) {
  if (!availability) return false;
  const raw = JSON.stringify(availability).toLowerCase();
  if (raw.includes(neededDate.toLowerCase())) return true;
  return weekdayTokens(neededDate).some((token) => raw.includes(token));
}

function matchesQuery(profileTitle: string, skills: string[], query: string) {
  if (!query) return true;
  const q = query.toLowerCase();
  if (profileTitle.toLowerCase().includes(q)) return true;
  return skills.some((s) => s.toLowerCase().includes(q));
}

function matchesRole(profileTitle: string, skills: string[], role: string) {
  const r = role.toLowerCase();
  if (profileTitle.toLowerCase().includes(r)) return true;
  return skills.some((s) => s.toLowerCase().includes(r));
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;
    const query = (body.query ?? "").trim();
    const employmentType = (body.employmentType ?? "casual").trim().toLowerCase();
    const casualNeedsDates = body.casualNeedsDates ?? true;
    const neededDate = (body.neededDate ?? "").trim();
    const neededDates = (body.neededDates ?? []).map((d) => d.trim()).filter(Boolean);
    const dates = neededDates.length > 0 ? neededDates : [neededDate];
    const jobs = (body.jobs ?? [])
      .map((j) => ({
        role: (j.role ?? "").trim(),
        description: (j.description ?? "").trim(),
        dates: (j.dates ?? []).map((d) => d.trim()).filter(Boolean),
      }))
      .filter((j) => j.role && j.dates.length > 0);

    const hasLegacyDates = dates.length > 0 && dates[0];
    if (employmentType === "casual" && casualNeedsDates && !hasLegacyDates && jobs.length === 0) {
      return NextResponse.json({ error: "No dates provided" }, { status: 400 });
    }

    const invalidLegacyDate = hasLegacyDates && dates.some((d) => Number.isNaN(Date.parse(`${d}T00:00:00`)));
    const invalidJobDate = jobs.some((j) =>
      j.dates.some((d) => Number.isNaN(Date.parse(`${d}T00:00:00`))),
    );
    if (invalidLegacyDate || invalidJobDate) {
      return NextResponse.json({ error: "Invalid neededDate(s)" }, { status: 400 });
    }

    const profiles = await prisma.professionalProfile.findMany({
      include: {
        worker: {
          include: {
            user: true,
          },
        },
      },
    });

    const uniqueByEmail = new Map<string, { profileTitle: string; dates: string[] }>();

    if (jobs.length > 0) {
      for (const job of jobs) {
        const jobMatches = profiles.filter((p) => {
          const email = p.worker.user.email;
          if (!email) return false;
          if (!matchesRole(p.title, p.skills, `${job.role} ${job.description}`.trim())) return false;
          if (query && !matchesQuery(p.title, p.skills, query)) return false;
          return job.dates.some((d) => hasDateAvailability(p.availability, d));
        });
        for (const m of jobMatches) {
          const prev = uniqueByEmail.get(m.worker.user.email);
          const mergedDates = Array.from(new Set([...(prev?.dates ?? []), ...job.dates])).sort();
          uniqueByEmail.set(m.worker.user.email, {
            profileTitle: m.title,
            dates: mergedDates,
          });
        }
      }
    } else {
      const matches = profiles.filter((p) => {
        const email = p.worker.user.email;
        if (!email) return false;
        if (!matchesQuery(p.title, p.skills, query)) return false;
        if (dates.some(Boolean)) {
          return dates.some((d) => hasDateAvailability(p.availability, d));
        }
        return true;
      });
      for (const m of matches) {
        uniqueByEmail.set(m.worker.user.email, { profileTitle: m.title, dates });
      }
    }

    let sentCount = 0;
    for (const [email, payload] of Array.from(uniqueByEmail.entries())) {
      const sent = await sendTalentAlertEmail({
        to: email,
        profileTitle: payload.profileTitle,
        employerNeed: query,
        neededDate: payload.dates.length > 0 ? payload.dates.join(", ") : "Flexible",
      });
      if (sent.sent) sentCount += 1;
    }

    return NextResponse.json({
      matchedCount: uniqueByEmail.size,
      emailedCount: sentCount,
    });
  } catch (error) {
    console.error("[talent-alert] failed", error);
    return NextResponse.json({ error: "Failed to create talent alert" }, { status: 500 });
  }
}

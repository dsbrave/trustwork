import { Briefcase, MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { LogoText } from "@/components/brand/LogoText";
import { Button } from "@/components/ui/button";
import { filterMockJobs } from "@/lib/mock-jobs";
import { Link } from "@/navigation";

type Props = {
  searchParams: Record<string, string | string[] | undefined>;
};

export default async function JobsPage({ searchParams }: Props) {
  const t = await getTranslations("Jobs");
  const tPage = await getTranslations("Landing");
  const q = typeof searchParams.q === "string" ? searchParams.q : undefined;
  const rawCat = searchParams.category;
  const category =
    typeof rawCat === "string" ? rawCat : Array.isArray(rawCat) ? rawCat[0] : undefined;
  const rawMode = searchParams.mode;
  const mode = typeof rawMode === "string" ? rawMode : Array.isArray(rawMode) ? rawMode[0] : undefined;
  const jobs = filterMockJobs({ q, category });

  const cats = [
    { slug: "all", label: t("allCategories") },
    { slug: "hospitality", label: tPage("catHospitality") },
    { slug: "construction", label: tPage("catConstruction") },
    { slug: "cleaning", label: tPage("catCleaning") },
    { slug: "agedcare", label: tPage("catAgedcare") },
    { slug: "it", label: tPage("catIt") },
    { slug: "retail", label: tPage("catRetail") },
    { slug: "warehouse", label: tPage("catWarehouse") },
    { slug: "disability", label: tPage("catDisability") },
    { slug: "childcare", label: tPage("catChildcare") },
    { slug: "security", label: tPage("catSecurity") },
  ];

  const buildHref = (c: string) => {
    const p = new URLSearchParams();
    if (q) p.set("q", q);
    if (c !== "all") p.set("category", c);
    const s = p.toString();
    return s ? `/jobs?${s}` : "/jobs";
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <header className="border-b border-black/[0.08] bg-white shadow-nav">
        <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-4 lg:px-6">
          <LogoText href="/" />
          <Button variant="primary" size="sm" asChild>
            <Link href="/auth/signup?role=employer">{tPage("navPostJob")}</Link>
          </Button>
        </div>
      </header>

      <div className="mx-auto grid max-w-content gap-8 px-4 py-8 lg:grid-cols-[240px_1fr] lg:px-6 lg:py-10">
        <aside className="h-fit rounded-lg border border-black/[0.08] bg-white p-4 shadow-card lg:sticky lg:top-24">
          <p className="text-[13px] font-semibold text-[#001e00]">{t("filterCategory")}</p>
          <ul className="mt-3 space-y-1">
            {cats.map(({ slug, label }) => {
              const active = slug === "all" ? !category : category === slug;
              return (
                <li key={slug}>
                  <Link
                    href={buildHref(slug)}
                    className={`block rounded-md px-2 py-1.5 text-[14px] ${
                      active
                        ? "bg-au-mist font-semibold text-au-gum"
                        : "text-[#5e6d64] hover:bg-black/[0.04]"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="mt-6 text-[12px] leading-relaxed text-[#5e6d64]">{t("sidebarNote")}</p>
        </aside>

        <div>
          {mode === "talent" && (
            <div className="mb-6 rounded-lg border border-au-ocean/20 bg-blue-50 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
              <div>
                <p className="font-semibold text-[#001e00]">{t("hireBannerTitle")}</p>
                <p className="mt-1 text-[14px] text-[#5e6d64]">{t("hireBannerDesc")}</p>
              </div>
              <Button variant="default" size="sm" className="mt-3 sm:mt-0" asChild>
                <Link href="/auth/signup?role=employer">{t("hireBannerCta")}</Link>
              </Button>
            </div>
          )}
          <h1 className="text-[28px] font-semibold text-[#001e00]">{t("title")}</h1>
          <p className="mt-1 text-[15px] text-[#5e6d64]">{t("subtitle")}</p>

          {q && (
            <p className="mt-4 text-[14px] text-au-ocean">
              Results for &ldquo;{q}&rdquo; ·{" "}
              <Link href="/jobs" className="font-semibold underline">
                {t("clearSearch")}
              </Link>
            </p>
          )}

          <ul className="mt-8 space-y-4">
            {jobs.length === 0 ? (
              <li className="rounded-lg border border-dashed border-black/[0.12] bg-white p-10 text-center text-[#5e6d64]">
                {t("empty")}
              </li>
            ) : (
              jobs.map((job) => (
                <li
                  key={job.id}
                  className="rounded-lg border border-black/[0.08] bg-white p-6 shadow-card transition hover:shadow-lift"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="text-[17px] font-semibold text-[#001e00]">{job.title}</h2>
                      <p className="mt-1 flex items-center gap-2 text-[14px] text-[#5e6d64]">
                        <Briefcase className="h-4 w-4 shrink-0" aria-hidden />
                        {job.company}
                      </p>
                      <p className="mt-1 flex items-center gap-2 text-[14px] text-[#5e6d64]">
                        <MapPin className="h-4 w-4 shrink-0" aria-hidden />
                        {job.location}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {job.visaTags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded bg-[#f0f4f2] px-2 py-0.5 text-[11px] font-medium text-[#001e00]/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex shrink-0 flex-col items-start gap-3 sm:items-end">
                      <p className="text-[20px] font-semibold text-[#001e00]">
                        ${job.hourly}
                        {t("hourly")}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {job.sponsorshipAvailable && (
                          <span className="rounded border border-au-ocean/30 bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-au-ocean">
                            {t("sponsorYes")}
                          </span>
                        )}
                        {job.cardEnabled && (
                          <span className="rounded border border-au-gum/30 bg-au-mist px-2 py-0.5 text-[11px] font-semibold text-au-gum">
                            {t("cardYes")}
                          </span>
                        )}
                      </div>
                      <p className="text-[12px] text-[#5e6d64]">
                        {t("posted")}: {job.postedLabel}
                      </p>
                      <Button variant="primary" size="sm" asChild>
                        <Link href="/auth/signup?role=worker">{t("ctaApply")}</Link>
                      </Button>
                      <p className="max-w-[200px] text-right text-[11px] text-[#5e6d64]">{t("ctaVerify")}</p>
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

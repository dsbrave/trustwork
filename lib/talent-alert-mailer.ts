import nodemailer from "nodemailer";

type TalentAlertMail = {
  to: string;
  profileTitle: string;
  employerNeed: string;
  neededDate: string;
};

function buildTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null;

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function sendTalentAlertEmail(input: TalentAlertMail) {
  const transport = buildTransport();
  if (!transport) {
    console.info("[talent-alert] SMTP not configured; skipping email", {
      to: input.to,
      neededDate: input.neededDate,
      employerNeed: input.employerNeed,
    });
    return { sent: false };
  }

  await transport.sendMail({
    from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
    to: input.to,
    subject: `New opportunity for ${input.neededDate}`,
    text:
      `A new employer request matches your profile (${input.profileTitle}).\n\n` +
      `Needed date: ${input.neededDate}\n` +
      `Requested role/skill: ${input.employerNeed || "General"}\n\n` +
      `Log in to TrustWork to respond quickly.`,
    html: `<p>A new employer request matches your profile (<b>${input.profileTitle}</b>).</p>
<p><b>Needed date:</b> ${input.neededDate}<br/>
<b>Requested role/skill:</b> ${input.employerNeed || "General"}</p>
<p>Log in to TrustWork to respond quickly.</p>`,
  });

  return { sent: true };
}

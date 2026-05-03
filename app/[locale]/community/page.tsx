import { MessageCircle, Users } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { SimpleHeader } from "@/components/layout/SimpleHeader";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";

const GROUPS = [
  { name: "gFindingName", desc: "gFindingDesc" },
  { name: "gVisaName", desc: "gVisaDesc" },
  { name: "gHospName", desc: "gHospDesc" },
  { name: "gBuildName", desc: "gBuildDesc" },
  { name: "gRegionalName", desc: "gRegionalDesc" },
  { name: "gWellbeingName", desc: "gWellbeingDesc" },
] as const;

const THREADS = [
  { tag: "tOneTag", preview: "tOnePreview" },
  { tag: "tTwoTag", preview: "tTwoPreview" },
  { tag: "tThreeTag", preview: "tThreePreview" },
] as const;

export default async function CommunityPage() {
  const t = await getTranslations("Community");

  return (
    <>
      <SimpleHeader />
      <main className="border-t border-black/[0.06] bg-[#fafafa]">
        <section className="border-b border-black/[0.06] bg-white">
          <div className="mx-auto max-w-content px-4 py-14 lg:px-6 lg:py-16">
            <div className="flex flex-wrap items-start gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-au-mist text-au-gum">
                <Users className="h-6 w-6" strokeWidth={1.5} aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <h1 className="text-[34px] font-semibold leading-tight tracking-tight text-[#001e00] lg:text-[40px]">
                  {t("title")}
                </h1>
                <p className="mt-4 max-w-[640px] text-[17px] leading-relaxed text-[#5e6d64]">{t("subtitle")}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button variant="nav" size="sm" className="h-11 px-5" asChild>
                    <Link href="/auth/signup">{t("ctaJoin")}</Link>
                  </Button>
                  <Button variant="outline" size="sm" className="h-11 border-au-gum px-5 text-au-gum hover:bg-au-mist" asChild>
                    <a href="https://au.seek.com/community" target="_blank" rel="noopener noreferrer">
                      {t("ctaReference")}
                    </a>
                  </Button>
                </div>
                <p className="mt-4 text-[13px] text-[#5e6d64]">{t("referenceNote")}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-content px-4 lg:px-6">
            <h2 className="text-[20px] font-semibold text-[#001e00]">{t("groupsTitle")}</h2>
            <p className="mt-2 max-w-2xl text-[15px] text-[#5e6d64]">{t("groupsIntro")}</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {GROUPS.map((g) => (
                <li key={g.name}>
                  <div className="flex h-full flex-col rounded-lg border border-black/[0.08] bg-white p-5 shadow-sm">
                    <h3 className="text-[16px] font-semibold text-[#001e00]">{t(g.name)}</h3>
                    <p className="mt-2 flex-1 text-[14px] leading-relaxed text-[#5e6d64]">{t(g.desc)}</p>
                    <span className="mt-4 text-[13px] font-medium text-au-gumbright">{t("comingSoon")}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-black/[0.06] bg-white py-12 lg:py-16">
          <div className="mx-auto max-w-content px-4 lg:px-6">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-au-gum" aria-hidden />
              <h2 className="text-[20px] font-semibold text-[#001e00]">{t("threadsTitle")}</h2>
            </div>
            <p className="mt-2 text-[15px] text-[#5e6d64]">{t("threadsIntro")}</p>
            <ul className="mt-8 space-y-4">
              {THREADS.map((row, i) => (
                <li
                  key={row.tag}
                  className="rounded-lg border border-black/[0.08] bg-[#fafafa] px-5 py-4 text-[15px] text-[#001e00]/90"
                >
                  <span className="text-[12px] font-semibold uppercase tracking-wide text-au-ocean">{t(row.tag)}</span>
                  <p className="mt-2 leading-snug">{t(row.preview)}</p>
                  <span className="mt-3 inline-block text-[13px] text-[#8a9590]">
                    {t("mockPlaceholder", { n: i + 1 })}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

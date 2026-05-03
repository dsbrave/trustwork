"use client";

import { Briefcase, CreditCard, MapPin, ShieldCheck, Users, Wallet } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";

type Mode = "worker" | "employer";

type PanelDef = {
  icon: typeof CreditCard;
  titleKey: "highlightsW1Title" | "highlightsW2Title" | "highlightsW3Title" | "highlightsE1Title" | "highlightsE2Title" | "highlightsE3Title";
  descKey: "highlightsW1Desc" | "highlightsW2Desc" | "highlightsW3Desc" | "highlightsE1Desc" | "highlightsE2Desc" | "highlightsE3Desc";
  ctaKey: "highlightsW1Cta" | "highlightsW2Cta" | "highlightsW3Cta" | "highlightsE1Cta" | "highlightsE2Cta" | "highlightsE3Cta";
  href: string;
  cardClass: string;
  proCorner?: "green" | "amber";
};

const WORKER_PANELS: PanelDef[] = [
  {
    icon: CreditCard,
    titleKey: "highlightsW1Title",
    descKey: "highlightsW1Desc",
    ctaKey: "highlightsW1Cta",
    href: "/auth/signup?role=worker",
    cardClass: "from-emerald-50/90 via-white to-teal-50/80",
    proCorner: "green",
  },
  {
    icon: MapPin,
    titleKey: "highlightsW2Title",
    descKey: "highlightsW2Desc",
    ctaKey: "highlightsW2Cta",
    href: "/jobs",
    cardClass: "from-slate-50 via-white to-cyan-50/70",
  },
  {
    icon: Wallet,
    titleKey: "highlightsW3Title",
    descKey: "highlightsW3Desc",
    ctaKey: "highlightsW3Cta",
    href: "/auth/signup?role=worker",
    cardClass: "from-amber-50/40 via-white to-slate-50",
    proCorner: "amber",
  },
];

const EMPLOYER_PANELS: PanelDef[] = [
  {
    icon: ShieldCheck,
    titleKey: "highlightsE1Title",
    descKey: "highlightsE1Desc",
    ctaKey: "highlightsE1Cta",
    href: "/auth/signup?role=employer",
    cardClass: "from-teal-50/80 via-white to-slate-50",
  },
  {
    icon: Users,
    titleKey: "highlightsE2Title",
    descKey: "highlightsE2Desc",
    ctaKey: "highlightsE2Cta",
    href: "/auth/signup?role=employer",
    cardClass: "from-sky-50/60 via-white to-slate-50",
  },
  {
    icon: Briefcase,
    titleKey: "highlightsE3Title",
    descKey: "highlightsE3Desc",
    ctaKey: "highlightsE3Cta",
    href: "/auth/signup?role=employer",
    cardClass: "from-emerald-50/50 via-white to-slate-50",
    proCorner: "amber",
  },
];

export function HighlightsSection() {
  const t = useTranslations("Landing");
  const [mode, setMode] = useState<Mode>("worker");
  const panels = mode === "worker" ? WORKER_PANELS : EMPLOYER_PANELS;

  return (
    <section className="border-b border-slate-200/80 bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-content px-4 lg:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between lg:items-center">
          <div className="max-w-xl">
            <h2 className="font-[family-name:var(--font-outfit)] text-[22px] font-semibold tracking-tight text-[#1c2620] sm:text-[24px] lg:text-[26px]">
              {t("highlightsTitle")}
            </h2>
            <p className="mt-2 max-w-xl text-[14px] leading-snug text-slate-600 sm:text-[15px]">{t("highlightsSubtitle")}</p>
          </div>

          <div
            className="flex w-full shrink-0 rounded-full border border-slate-200/90 bg-slate-50/90 p-1 shadow-sm sm:w-auto"
            role="tablist"
            aria-label={t("highlightsTitle")}
          >
            <button
              type="button"
              role="tab"
              aria-selected={mode === "worker"}
              onClick={() => setMode("worker")}
              className={cn(
                "min-h-[44px] flex-1 rounded-full px-4 py-2.5 text-[13px] font-semibold transition sm:flex-none sm:px-5 sm:text-sm",
                mode === "worker"
                  ? "bg-white text-[#1c2620] shadow-sm ring-1 ring-slate-200"
                  : "text-slate-600 hover:text-[#1c2620]",
              )}
            >
              {t("highlightsTabWorker")}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === "employer"}
              onClick={() => setMode("employer")}
              className={cn(
                "min-h-[44px] flex-1 rounded-full px-4 py-2.5 text-[13px] font-semibold transition sm:flex-none sm:px-5 sm:text-sm",
                mode === "employer"
                  ? "bg-white text-[#1c2620] shadow-sm ring-1 ring-slate-200"
                  : "text-slate-600 hover:text-[#1c2620]",
              )}
            >
              {t("highlightsTabEmployer")}
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-14 lg:gap-10">
          {panels.map((panel, i) => {
            const Icon = panel.icon;
            return (
              <article key={`${mode}-${i}`} className="flex flex-col">
                <div
                  className={cn(
                    "relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br shadow-sm",
                    panel.cardClass,
                  )}
                >
                  {panel.proCorner === "green" ? (
                    <span className="absolute right-3 top-3 rounded-full bg-[#157f3c] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
                      {t("highlightsCardBadge")}
                    </span>
                  ) : null}
                  {panel.proCorner === "amber" ? (
                    <span className="absolute right-3 top-3 rounded-md border border-amber-200/80 bg-amber-50/95 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-900">
                      {t("highlightsProBadge")}
                    </span>
                  ) : null}
                  <div className="flex h-full items-center justify-center p-8">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/90 text-teal-800 shadow-sm ring-1 ring-slate-200/80 sm:h-[72px] sm:w-[72px]">
                      <Icon className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={1.5} aria-hidden />
                    </span>
                  </div>
                </div>

                <h3 className="mt-5 font-[family-name:var(--font-outfit)] text-[18px] font-semibold leading-snug text-[#1c2620] sm:text-[19px]">
                  {t(panel.titleKey)}
                </h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-slate-600">{t(panel.descKey)}</p>
                <Button
                  variant="outline"
                  className="mt-6 w-full min-h-[44px] border-[#157f3c] bg-[#157f3c] text-white hover:bg-[#136e34] hover:text-white sm:w-auto sm:self-start"
                  size="sm"
                  asChild
                >
                  <Link href={panel.href}>{t(panel.ctaKey)}</Link>
                </Button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

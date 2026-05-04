"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import { useMessages, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { PROFESSION_MEGA_MENU } from "@/lib/mega-menu-professions";
import { hireSignupHref, PROFESSION_MEGA_MENU_HIRE } from "@/lib/mega-menu-hire";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";

export function LandingMobileMenu() {
  const t = useTranslations("Landing");
  const tMm = useTranslations("MegaMenu");
  const tHire = useTranslations("MegaMenuHire");
  const messages = useMessages();
  const mm = messages.MegaMenu as Record<string, string>;
  const mmHire = messages.MegaMenuHire as Record<string, string>;

  const [open, setOpen] = useState(false);
  const [findOpen, setFindOpen] = useState(false);
  const [hireOpen, setHireOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  const linkQuiet =
    "block rounded-lg px-3 py-2.5 text-[14px] leading-snug text-[#334155] transition hover:bg-slate-100 active:bg-slate-200/80";

  const linkAccent =
    "block rounded-lg px-3 py-2.5 text-[14px] font-semibold text-au-gumbright transition hover:bg-emerald-50 active:bg-emerald-100/80";

  return (
    <>
      <button
        type="button"
        className={cn(
          "inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm transition active:scale-[0.98]",
          "hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00843D]",
        )}
        aria-expanded={open}
        aria-controls="landing-mobile-nav-panel"
        aria-label={t("navMenu")}
        onClick={() => setOpen(true)}
      >
        <Menu className="h-[22px] w-[22px]" strokeWidth={2} aria-hidden />
      </button>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[199] bg-black/45 lg:hidden"
            aria-label={t("mobileMenuClose")}
            onClick={close}
          />
          <nav
            id="landing-mobile-nav-panel"
            className="fixed top-0 right-0 z-[200] flex h-[100dvh] max-h-[100dvh] w-[min(100%,22rem)] flex-col bg-white shadow-[-10px_0_32px_rgba(15,23,42,0.14)] lg:hidden"
            aria-label={t("navMenu")}
          >
            <div className="flex shrink-0 items-center justify-between border-b border-slate-200 px-4 py-3">
              <span className="font-[family-name:var(--font-outfit)] text-[18px] font-semibold text-[#1c2620]">
                {t("navMenu")}
              </span>
              <button
                type="button"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 active:bg-slate-200/80"
                aria-label={t("mobileMenuClose")}
                onClick={close}
              >
                <X className="h-6 w-6" aria-hidden />
              </button>
            </div>

            {/* Same priorities as desktop: sign in + sign up */}
            <div className="shrink-0 border-b border-slate-100 px-4 py-3">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="h-11 flex-1 rounded-xl text-[13px]" asChild>
                  <Link href="/auth/login" onClick={close}>
                    {t("navLogin")}
                  </Link>
                </Button>
                <Button variant="nav" size="sm" className="h-11 flex-1 rounded-xl px-3 text-[13px]" asChild>
                  <Link href="/auth/signup" onClick={close}>
                    {t("navSignup")}
                  </Link>
                </Button>
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-2 pb-6 pt-1 [-webkit-overflow-scrolling:touch]">
              {/* Find work — same catalogue as desktop mega menu */}
              <div className="border-b border-slate-100 py-1">
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg px-2 py-3 text-left"
                  onClick={() => {
                    setFindOpen((v) => !v);
                    setHireOpen(false);
                  }}
                  aria-expanded={findOpen}
                >
                  <span className="text-[15px] font-semibold text-[#1c2620]">{t("navFindWork")}</span>
                  <ChevronDown
                    className={cn("h-5 w-5 shrink-0 text-slate-500 transition-transform", findOpen && "rotate-180")}
                    aria-hidden
                  />
                </button>
                {findOpen ? (
                  <div className="pb-3">
                    <Link href="/jobs" className={cn(linkAccent, "mb-2 font-semibold")} onClick={close}>
                      {tMm("exploreAll")}
                      <span className="ml-1" aria-hidden>
                        →
                      </span>
                    </Link>
                    <Link href="/auth/signup?role=employer" className={cn(linkAccent, "mb-4")} onClick={close}>
                      {tMm("postShift")}
                      <span className="ml-1" aria-hidden>
                        →
                      </span>
                    </Link>
                    {PROFESSION_MEGA_MENU.flatMap((col) => col.groups).map((group) => (
                      <div key={group.titleKey} className="mb-4 last:mb-0">
                        <p className="mb-1.5 px-3 text-[11px] font-bold uppercase tracking-[0.06em] text-slate-500">
                          {mm[group.titleKey] ?? group.titleKey}
                        </p>
                        <ul className="space-y-0.5">
                          {group.links.map((link) => (
                            <li key={`${group.titleKey}-${link.labelKey}`}>
                              <Link
                                href={`/jobs?q=${encodeURIComponent(link.q)}`}
                                className={linkQuiet}
                                onClick={close}
                              >
                                {mm[link.labelKey] ?? link.labelKey}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              {/* Post job — hire paths like desktop */}
              <div className="border-b border-slate-100 py-1">
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg px-2 py-3 text-left"
                  onClick={() => {
                    setHireOpen((v) => !v);
                    setFindOpen(false);
                  }}
                  aria-expanded={hireOpen}
                >
                  <span className="text-[15px] font-semibold text-[#1c2620]">{t("navPostJob")}</span>
                  <ChevronDown
                    className={cn("h-5 w-5 shrink-0 text-slate-500 transition-transform", hireOpen && "rotate-180")}
                    aria-hidden
                  />
                </button>
                {hireOpen ? (
                  <div className="pb-3">
                    <div className="mb-3 space-y-1 border-b border-slate-100 pb-3">
                      <Link href="/jobs" className={linkAccent} onClick={close}>
                        {tHire("hireBrowseTalent")}
                        <span className="ml-1" aria-hidden>
                          →
                        </span>
                      </Link>
                      <Link href="/auth/signup?role=employer" className={linkAccent} onClick={close}>
                        {tHire("hirePostOpening")}
                        <span className="ml-1" aria-hidden>
                          →
                        </span>
                      </Link>
                      <Link href="/community" className={linkAccent} onClick={close}>
                        {tHire("hireCommunityCta")}
                        <span className="ml-1" aria-hidden>
                          →
                        </span>
                      </Link>
                    </div>
                    {PROFESSION_MEGA_MENU_HIRE.flatMap((col) => col.groups).map((group) => (
                      <div key={`hire-${group.titleKey}`} className="mb-4 last:mb-0">
                        <p className="mb-1.5 px-3 text-[11px] font-bold uppercase tracking-[0.06em] text-slate-500">
                          {mmHire[group.titleKey] ?? mm[group.titleKey] ?? group.titleKey}
                        </p>
                        <ul className="space-y-0.5">
                          {group.links.map((link) => (
                            <li key={`hire-${group.titleKey}-${link.labelKey}`}>
                              <Link
                                href={hireSignupHref(link.q)}
                                className={linkQuiet}
                                onClick={close}
                              >
                                {mmHire[link.labelKey] ?? link.labelKey}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              <Link href="#loop" className={cn(linkQuiet, "mt-1 font-semibold text-[#0f766e]")} onClick={close}>
                {t("navWhy")}
              </Link>
              <Link href="/community" className={cn(linkQuiet, "font-semibold text-[#0f766e]")} onClick={close}>
                {t("navCommunity")}
              </Link>
            </div>
          </nav>
        </>
      ) : null}
    </>
  );
}

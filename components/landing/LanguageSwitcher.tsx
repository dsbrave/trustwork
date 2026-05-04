"use client";

import { Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState, useTransition } from "react";
import { locales, type Locale } from "@/i18n";
import { usePathname, useRouter } from "@/navigation";
import { cn } from "@/lib/utils";

/** Short display code for the header trigger (keeps the control narrow on small screens). */
const LOCALE_CODE: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
  es: "ES",
  zh: "ZH",
  hi: "HI",
  ar: "AR",
};

/** `lg+`: select in the top bar (e.g. next to Log in / Sign up). */
export function LanguageSwitcherDesktop() {
  const tNames = useTranslations("LocaleNames");
  const current = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [pending, startTransition] = useTransition();

  return (
    <label className="lang-switcher-desktop text-sm font-medium text-slate-600">
      <span className="hidden xl:inline">Language</span>
      <select
        aria-label="Language"
        disabled={pending}
        value={current}
        onChange={(e) => {
          const next = e.target.value as Locale;
          startTransition(() => {
            router.replace(pathname, { locale: next });
          });
        }}
        className="w-[6.75rem] max-w-[7.25rem] shrink-0 rounded-md border border-slate-200 bg-white py-1 pl-1.5 pr-7 text-[11px] font-medium leading-tight text-[#334155] shadow-sm outline-none transition hover:border-slate-300 focus:border-teal-600/40 focus:ring-2 focus:ring-teal-600/15 sm:min-w-0 sm:px-3 sm:py-2 sm:pr-10 sm:text-[14px] sm:text-[#1c2620] xl:w-auto xl:max-w-none"
      >
        {locales.map((l) => (
          <option key={l} value={l}>
            {tNames(l)}
          </option>
        ))}
      </select>
    </label>
  );
}

/** `<lg`: compact trigger + bottom sheet; place next to the hamburger on mobile. */
export function LanguageSwitcherMobile() {
  const tNames = useTranslations("LocaleNames");
  const t = useTranslations("Landing");
  const current = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [pending, startTransition] = useTransition();
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    if (!sheetOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSheetOpen(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [sheetOpen]);

  const go = (next: Locale) => {
    startTransition(() => {
      router.replace(pathname, { locale: next });
      setSheetOpen(false);
    });
  };

  return (
    <div className="lang-switcher-mobile">
      <button
        type="button"
        disabled={pending}
        onClick={() => setSheetOpen(true)}
        className="inline-flex min-h-[40px] min-w-[40px] shrink-0 items-center justify-center gap-0.5 rounded-xl border border-slate-200 bg-white px-1.5 text-[12px] font-semibold text-[#334155] shadow-sm transition hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98] disabled:opacity-60 min-[400px]:gap-1 min-[400px]:px-2"
        aria-expanded={sheetOpen}
        aria-haspopup="dialog"
        aria-label={t("languageTitle")}
      >
        <Globe className="h-4 w-4 shrink-0 text-slate-600" strokeWidth={2} aria-hidden />
        <span className="tabular-nums">{LOCALE_CODE[current]}</span>
      </button>

      {sheetOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[240] bg-black/40 backdrop-blur-[1px]"
            aria-label={t("mobileMenuClose")}
            onClick={() => setSheetOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="language-sheet-title"
            className="fixed inset-x-0 bottom-0 z-[250] max-h-[min(70vh,28rem)] rounded-t-2xl border border-slate-200/80 bg-white shadow-[0_-8px_40px_rgba(15,23,42,0.12)]"
          >
            <div className="flex max-h-[min(70vh,28rem)] flex-col pt-2">
              <div className="mx-auto mb-2 h-1 w-10 shrink-0 rounded-full bg-slate-200" aria-hidden />
              <h2
                id="language-sheet-title"
                className="shrink-0 px-4 pb-2 text-center font-[family-name:var(--font-outfit)] text-[17px] font-semibold text-[#1c2620]"
              >
                {t("languageTitle")}
              </h2>
              <ul className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-3 pb-[max(1rem,env(safe-area-inset-bottom))] [-webkit-overflow-scrolling:touch]">
                {locales.map((l) => (
                  <li key={l} className="py-0.5">
                    <button
                      type="button"
                      disabled={pending}
                      onClick={() => go(l)}
                      className={cn(
                        "flex w-full min-h-[48px] items-center rounded-xl px-4 text-left text-[15px] font-medium transition active:scale-[0.99]",
                        l === current
                          ? "bg-emerald-50 text-[#0a4a30] ring-1 ring-[#00843D]/20"
                          : "text-slate-800 hover:bg-slate-50 active:bg-slate-100",
                      )}
                    >
                      <span className="w-9 shrink-0 tabular-nums text-[12px] font-semibold text-slate-400">
                        {LOCALE_CODE[l]}
                      </span>
                      <span className="min-w-0">{tNames(l)}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

/** Default export: desktop + mobile pieces (stacked for pages that use one import). */
export function LanguageSwitcher() {
  return (
    <>
      <LanguageSwitcherDesktop />
      <LanguageSwitcherMobile />
    </>
  );
}

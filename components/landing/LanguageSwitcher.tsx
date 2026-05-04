"use client";

import { Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState, useTransition } from "react";
import { locales, type Locale } from "@/i18n";
import { usePathname, useRouter } from "@/navigation";

/** Short display code for the header trigger (keeps the control narrow on small screens). */
const LOCALE_CODE: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
  es: "ES",
  zh: "ZH",
  hi: "HI",
  ar: "AR",
};

function useLocaleSwitcher() {
  const current = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [selected, setSelected] = useState<Locale>(current);

  useEffect(() => {
    setSelected(current);
  }, [current]);

  const switchLocale = (next: Locale) => {
    if (next === selected) return;
    setSelected(next);
    startTransition(() => {
      router.replace(pathname, { locale: next });
      router.refresh();
    });
  };

  return { selected, pending, switchLocale };
}

/** `lg+`: select in the top bar (e.g. next to Log in / Sign up). */
export function LanguageSwitcherDesktop() {
  const tNames = useTranslations("LocaleNames");
  const { selected, pending, switchLocale } = useLocaleSwitcher();

  return (
    <label className="lang-switcher-desktop text-sm font-medium text-slate-600">
      <span className="hidden xl:inline">Language</span>
      <select
        aria-label="Language"
        disabled={pending}
        value={selected}
        onChange={(e) => {
          const next = e.target.value as Locale;
          switchLocale(next);
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
  const { selected, pending, switchLocale } = useLocaleSwitcher();

  return (
    <label className="lang-switcher-mobile inline-flex h-8 items-center gap-0.5 whitespace-nowrap rounded-lg border border-slate-200 bg-white px-1.5 text-[#334155] shadow-sm">
      <span className="inline-flex items-center justify-center">
        <Globe className="h-4 w-4 shrink-0 text-slate-600" strokeWidth={2} aria-hidden />
      </span>
      <select
        aria-label="Language"
        disabled={pending}
        value={selected}
        onChange={(e) => switchLocale(e.target.value as Locale)}
        className="h-6 w-[1.9rem] cursor-pointer appearance-none bg-transparent text-[11px] font-semibold leading-none outline-none"
      >
        {locales.map((l) => (
          <option key={l} value={l}>
            {LOCALE_CODE[l]}
          </option>
        ))}
      </select>
    </label>
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

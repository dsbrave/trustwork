"use client";

import { Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { defaultLocale, locales, type Locale } from "@/i18n";

/** Short display code for the header trigger (keeps the control narrow on small screens). */
const LOCALE_CODE: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
  es: "ES",
  zh: "ZH",
  hi: "HI",
  ar: "AR",
};

function stripLocalePrefix(pathname: string): string {
  const parts = pathname.split("/");
  const maybeLocale = parts[1];
  if (locales.includes(maybeLocale as Locale)) {
    parts.splice(1, 1);
  }
  const normalized = parts.join("/");
  return normalized === "" ? "/" : normalized;
}

function buildLocalizedHref(next: Locale, pathname: string): string {
  const cleanPath = stripLocalePrefix(pathname);
  if (next === defaultLocale) return cleanPath;
  return cleanPath === "/" ? `/${next}` : `/${next}${cleanPath}`;
}

function switchLocale(next: Locale) {
  if (typeof window === "undefined") return;
  const target = buildLocalizedHref(next, window.location.pathname);
  const href = `${target}${window.location.search}${window.location.hash}`;
  window.location.assign(href);
}

/** `lg+`: select in the top bar (e.g. next to Log in / Sign up). */
export function LanguageSwitcherDesktop() {
  const tNames = useTranslations("LocaleNames");
  const current = useLocale() as Locale;

  return (
    <label className="lang-switcher-desktop text-sm font-medium text-slate-600">
      <span className="hidden xl:inline">Language</span>
      <select
        aria-label="Language"
        value={current}
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
  const t = useTranslations("LocaleNames");
  const current = useLocale() as Locale;

  return (
    <label className="lang-switcher-mobile relative inline-flex h-8 min-w-[3.25rem] items-center justify-center whitespace-nowrap rounded-lg border border-slate-200 bg-white px-2 text-[#334155] shadow-sm">
      <span className="pointer-events-none inline-flex items-center justify-center gap-1">
        <Globe className="h-4 w-4 shrink-0 text-slate-600" strokeWidth={2} aria-hidden />
        <span className="text-[11px] font-semibold leading-none">{LOCALE_CODE[current]}</span>
      </span>
      <select
        aria-label="Language"
        value={current}
        onChange={(e) => switchLocale(e.target.value as Locale)}
        className="absolute inset-0 z-10 h-full w-full cursor-pointer appearance-none rounded-lg bg-transparent opacity-0"
      >
        {locales.map((l) => (
          <option key={l} value={l} title={t(l)}>
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

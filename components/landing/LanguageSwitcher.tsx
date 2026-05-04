"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { locales, type Locale } from "@/i18n";
import { usePathname, useRouter } from "@/navigation";

export function LanguageSwitcher() {
  const t = useTranslations("LocaleNames");
  const current = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [pending, startTransition] = useTransition();

  return (
    <label className="flex items-center gap-1.5 text-sm font-medium text-slate-600 sm:gap-2">
      <span className="hidden sm:inline">Language</span>
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
        className="w-[6.75rem] max-w-[7.25rem] shrink-0 rounded-md border border-slate-200 bg-white py-1 pl-1.5 pr-7 text-[11px] font-medium leading-tight text-[#334155] shadow-sm outline-none transition hover:border-slate-300 focus:border-teal-600/40 focus:ring-2 focus:ring-teal-600/15 sm:w-auto sm:max-w-none sm:min-w-0 sm:px-3 sm:py-2 sm:pr-10 sm:text-[14px] sm:text-[#1c2620]"
      >
        {locales.map((l) => (
          <option key={l} value={l}>
            {t(l)}
          </option>
        ))}
      </select>
    </label>
  );
}

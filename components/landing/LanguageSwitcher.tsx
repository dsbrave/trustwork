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
    <label className="flex items-center gap-2 text-sm font-medium text-slate-600">
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
        className="rounded-md border border-black/[0.12] bg-white px-3 py-2 text-[14px] text-[#001e00] shadow-sm outline-none transition hover:border-au-ocean focus:border-au-gumbright focus:ring-2 focus:ring-au-gum/20"
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

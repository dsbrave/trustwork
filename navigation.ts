import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { defaultLocale, locales } from "./i18n";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales: [...locales],
    localePrefix: "as-needed",
    defaultLocale,
  });

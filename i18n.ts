import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "pt", "es", "zh", "hi", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  const messages = (await import(`./messages/${locale}.json`)).default;
  return { locale, messages };
});

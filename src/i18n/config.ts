import type { Locale } from "../utils/site";

export const locales = ["en", "ru"] as const;
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
};

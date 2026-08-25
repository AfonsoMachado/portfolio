export const locales = ["pt-br", "en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt-br";

export const localeLabels: Record<Locale, string> = {
  "pt-br": "PT",
  en: "EN",
  es: "ES",
};

export function isSupportedLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

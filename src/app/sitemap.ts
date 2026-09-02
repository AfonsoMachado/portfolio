import type { MetadataRoute } from "next";

import { getLocalizedUrl } from "@/shared/config/site";
import { locales } from "@/shared/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, getLocalizedUrl(locale)]),
  );

  return locales.map((locale) => ({
    url: getLocalizedUrl(locale),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "pt-br" ? 1 : 0.8,
    alternates: { languages },
  }));
}

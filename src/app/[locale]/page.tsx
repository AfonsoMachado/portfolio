import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getPortfolioContent } from "@/core/application/use-cases/get-portfolio-content";
import { PortfolioPage } from "@/presentation/components/portfolio-page";
import { getLocalizedUrl } from "@/shared/config/site";
import { isSupportedLocale, locales, type Locale } from "@/shared/i18n/config";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const content = await getPortfolioContent(locale);
  const localeMetadata = {
    "pt-br": "pt_BR",
    en: "en_US",
    es: "es_ES",
  } satisfies Record<Locale, string>;

  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "pt-BR": "/pt-br",
        en: "/en",
        es: "/es",
        "x-default": "/pt-br",
      },
    },
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      locale: localeMetadata[locale],
      url: getLocalizedUrl(locale),
    },
    twitter: {
      title: content.meta.title,
      description: content.meta.description,
    },
  };
}

export default async function LocalizedHomePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const content = await getPortfolioContent(locale as Locale);

  return <PortfolioPage content={content} locale={locale as Locale} />;
}

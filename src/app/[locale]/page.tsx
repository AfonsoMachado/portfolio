import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getPortfolioContent } from "@/core/application/use-cases/get-portfolio-content";
import { PortfolioPage } from "@/presentation/components/portfolio-page";
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

  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      languages: {
        "pt-BR": "/pt-br",
        en: "/en",
        es: "/es",
      },
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

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { isSupportedLocale, type Locale } from "@/shared/i18n/config";

const copy = {
  "pt-br": {
    action: "Voltar ao início",
    description: "A página que você procura não existe ou foi movida.",
    eyebrow: "Erro 404",
    title: "Página não encontrada.",
  },
  en: {
    action: "Back to home",
    description: "The page you are looking for does not exist or has moved.",
    eyebrow: "Error 404",
    title: "Page not found.",
  },
  es: {
    action: "Volver al inicio",
    description: "La página que buscas no existe o fue movida.",
    eyebrow: "Error 404",
    title: "Página no encontrada.",
  },
} satisfies Record<Locale, Record<string, string>>;

function getLocaleFromPathname(pathname: string): Locale {
  const locale = pathname.split("/")[1];

  return isSupportedLocale(locale) ? locale : "pt-br";
}

export function LocalizedNotFound() {
  const locale = getLocaleFromPathname(usePathname());
  const content = copy[locale];

  return (
    <main className="mx-auto grid min-h-dvh w-full max-w-7xl place-items-center px-5 py-10 sm:px-8 lg:px-10">
      <section className="w-full max-w-2xl rounded-[36px] border border-line bg-surface p-8 shadow-(--shadow) sm:p-12">
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-accent">
          {content.eyebrow}
        </p>
        <h1 className="mt-5 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
          {content.title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-8 text-muted">
          {content.description}
        </p>
        <Link
          href={`/${locale}`}
          className="mt-8 inline-flex rounded-full bg-action px-6 py-3 text-sm font-medium text-on-action transition hover:bg-action-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          {content.action}
        </Link>
      </section>
    </main>
  );
}

import Link from "next/link";

import type { PortfolioContent } from "@/core/domain/entities/portfolio";
import { LanguageSwitcher } from "@/presentation/components/language-switcher";
import { ThemeSwitcher } from "@/presentation/components/theme-switcher";
import type { Locale } from "@/shared/i18n/config";

type PortfolioPageProps = {
  content: PortfolioContent;
  locale: Locale;
};

export function PortfolioPage({ content, locale }: PortfolioPageProps) {
  return (
    <main id="home" className="relative overflow-hidden">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 pb-10 pt-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between border-b border-line px-1 pb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted sm:px-2">
          <p className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-status shadow-(--status-shadow)" />
            <span className="hidden sm:inline">{content.contact.availability}</span>
          </p>
          <div className="flex items-center gap-3">
            <ThemeSwitcher labels={content.theme} />
            <LanguageSwitcher
              currentLocale={locale}
              label={content.languageSwitcherLabel}
              showLabel={false}
            />
          </div>
        </div>

        <header className="sticky top-4 z-20 mt-4 rounded-[28px] border border-line bg-surface/90 px-5 py-4 shadow-(--header-shadow) backdrop-blur-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-accent">
                  {content.brand.role}
                </p>
                <h1 className="text-lg font-semibold text-foreground">
                  {content.brand.name}
                </h1>
              </div>
            </div>

            <nav className="flex flex-wrap gap-2 text-sm text-muted lg:flex-nowrap">
              {content.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 transition hover:bg-accent-soft hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>

          </div>
        </header>

        <section className="grid flex-1 gap-6 py-8 lg:grid-cols-[1.35fr_0.9fr] lg:py-12">
          <div className="rounded-[36px] border border-line bg-surface px-6 py-8 shadow-(--shadow) sm:px-8 sm:py-10">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                {content.hero.title}
              </h2>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                {content.hero.description}
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-action px-6 py-3 text-sm font-medium text-on-action transition hover:bg-action-hover"
              >
                {content.hero.primaryCta}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-medium text-foreground transition hover:bg-accent-soft"
              >
                {content.hero.secondaryCta}
              </a>
            </div>
          </div>

          <aside className="grid gap-6">
            <div className="relative overflow-hidden rounded-[36px] border border-line bg-identity-surface p-8 text-identity-foreground shadow-(--shadow)">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-identity-glow-warm/30 blur-2xl" />
              <div className="absolute -bottom-12 left-12 h-40 w-40 rounded-full bg-identity-glow-cool/40 blur-3xl" />
              <div className="relative">
                <div className="inline-flex rounded-full border border-white/15 px-4 py-2 font-mono text-xs uppercase tracking-[0.3em] text-identity-accent">
                  AM
                </div>
                <p className="mt-8 text-sm uppercase tracking-[0.28em] text-identity-accent">
                  {content.brand.location}
                </p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight">
                  {content.brand.name}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-identity-muted">
                  {content.footer}
                </p>
              </div>
            </div>

            <div className="rounded-[36px] border border-line bg-surface-strong p-8 shadow-(--shadow)">
              <p className="text-xs uppercase tracking-[0.3em] text-accent">
                GitHub
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-foreground">
                {content.projects.moreLabel}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">
                {content.projects.description}
              </p>
              <Link
                href="https://github.com/AfonsoMachado"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full border border-line px-5 py-3 text-sm font-medium transition hover:bg-accent-soft"
              >
                github.com/AfonsoMachado
              </Link>
            </div>
          </aside>
        </section>

        <section
          id={content.about.id}
          className="grid gap-6 py-8 lg:grid-cols-[1.05fr_1fr]"
        >
          <div className="rounded-4xl border border-line bg-surface px-6 py-8 shadow-(--shadow) sm:px-8">
            <p className="text-xs uppercase tracking-[0.32em] text-accent">
              {content.about.eyebrow}
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              {content.about.title}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-muted">
              {content.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {content.about.highlights.map((highlight) => (
              <article
                key={highlight.title}
                className="rounded-[28px] border border-line bg-surface-strong p-6 shadow-(--shadow)"
              >
                <h3 className="text-xl font-semibold text-foreground">
                  {highlight.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {highlight.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id={content.stack.id} className="py-8">
          <div className="rounded-4xl border border-line bg-surface px-6 py-8 shadow-(--shadow) sm:px-8">
            <p className="text-xs uppercase tracking-[0.32em] text-accent">
              {content.stack.eyebrow}
            </p>
            <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                {content.stack.title}
              </h2>
              <p className="max-w-xl text-sm leading-7 text-muted">
                {content.stack.description}
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {content.stack.groups.map((group) => (
                <article
                  key={group.title}
                  className="rounded-[28px] border border-line bg-surface-strong p-6"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id={content.projects.id} className="py-8">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.32em] text-accent">
              {content.projects.eyebrow}
            </p>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                  {content.projects.title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
                  {content.projects.description}
                </p>
              </div>
              <Link
                href="https://github.com/AfonsoMachado"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-line bg-surface-strong px-5 py-3 text-sm font-medium transition hover:bg-accent-soft"
              >
                {content.projects.moreLabel}
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {content.projects.items.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col rounded-[30px] border border-line bg-surface px-6 py-6 shadow-(--shadow)"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                    {content.projects.repositoryLabel}
                  </p>
                  <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                    GitHub
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-muted">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex w-fit rounded-full border border-line px-4 py-2 text-sm font-medium transition hover:bg-accent-soft"
                >
                  {content.projects.openLabel}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id={content.contact.id} className="py-8">
          <div className="rounded-[36px] border border-line bg-contact-surface px-6 py-8 text-contact-foreground shadow-(--shadow) sm:px-8 sm:py-10">
            <p className="text-xs uppercase tracking-[0.32em] text-contact-accent">
              {content.contact.eyebrow}
            </p>
            <div className="mt-4 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
                  {content.contact.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-contact-muted">
                  {content.contact.description}
                </p>
                <p className="mt-5 font-mono text-sm uppercase tracking-[0.24em] text-contact-accent">
                  {content.contact.availability}
                </p>
              </div>

              <div className="grid gap-4">
                {content.contact.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-contact-accent/40 hover:bg-white/8"
                  >
                    <p className="text-lg font-semibold">{link.label}</p>
                    <p className="mt-2 text-sm leading-7 text-contact-muted">
                      {link.caption}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

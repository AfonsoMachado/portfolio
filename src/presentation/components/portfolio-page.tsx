import Image from "next/image";
import Link from "next/link";

import type { GitHubProfile } from "@/core/domain/entities/github-profile";
import type { GitHubRepository } from "@/core/domain/entities/github-repository";
import {
  ContactPlatform,
  type PortfolioContent,
} from "@/core/domain/entities/portfolio";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/presentation/components/icons/interface-icons";
import { PortfolioHeader } from "@/presentation/components/portfolio-header";
import { ProjectCard } from "@/presentation/components/project-card";
import { Reveal } from "@/presentation/components/reveal";
import { githubProfileUrl } from "@/shared/config/github";
import type { Locale } from "@/shared/i18n/config";

const contactIcons = {
  [ContactPlatform.GitHub]: GitHubIcon,
  [ContactPlatform.Instagram]: InstagramIcon,
  [ContactPlatform.LinkedIn]: LinkedInIcon,
} satisfies Record<ContactPlatform, typeof GitHubIcon>;

type PortfolioPageProps = {
  content: PortfolioContent;
  githubProfile: GitHubProfile | null;
  githubRepositories: GitHubRepository[];
  locale: Locale;
};

export function PortfolioPage({
  content,
  githubProfile,
  githubRepositories,
  locale,
}: PortfolioPageProps) {
  const repositoriesByName = new Map(
    githubRepositories.map((repository) => [repository.name, repository]),
  );

  return (
    <main id="home" className="relative">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 pb-10 pt-5 sm:px-8 lg:px-10">
        <PortfolioHeader content={content} locale={locale} />

        <Reveal>
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
                  {githubProfile ? (
                    <Link
                      href={githubProfile.profileUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`GitHub de ${githubProfile.login}`}
                      className="inline-flex rounded-full transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-identity-accent"
                    >
                      <Image
                        src={githubProfile.avatarUrl}
                        alt={`Foto de perfil de ${githubProfile.login} no GitHub`}
                        width={96}
                        height={96}
                        priority
                        sizes="96px"
                        className="h-24 w-24 rounded-full border-2 border-identity-accent object-cover"
                      />
                    </Link>
                  ) : (
                    <div className="inline-flex rounded-full border border-white/15 px-4 py-2 font-mono text-xs uppercase tracking-[0.3em] text-identity-accent">
                      AM
                    </div>
                  )}
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
                  href={githubProfile?.profileUrl ?? githubProfileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex rounded-full border border-line px-5 py-3 text-sm font-medium transition hover:bg-accent-soft"
                >
                  github.com/AfonsoMachado
                </Link>
              </div>
            </aside>
          </section>
        </Reveal>

        <Reveal>
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
        </Reveal>

        <Reveal>
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
        </Reveal>

        <Reveal>
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
                <ProjectCard
                  key={project.id}
                  labels={content.projects}
                  project={project}
                  repository={repositoriesByName.get(project.id)}
                />
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
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
                  {content.contact.links.map((link) => {
                    const Icon = contactIcons[link.platform];

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-contact-accent/40 hover:bg-white/8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-contact-accent"
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="h-6 w-6 text-contact-accent" />
                          <p className="text-lg font-semibold">{link.label}</p>
                        </div>
                        <p className="mt-2 text-sm leading-7 text-contact-muted">
                          {link.caption}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}

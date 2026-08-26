import Link from "next/link";

import type { GitHubRepository } from "@/core/domain/entities/github-repository";
import type { Project } from "@/core/domain/entities/portfolio";

type ProjectCardProps = {
  labels: {
    openDemoAriaLabel: string;
    openDemoLabel: string;
    openLabel: string;
    openRepositoryAriaLabel: string;
    repositoryLabel: string;
  };
  project: Project;
  repository: GitHubRepository | undefined;
};

export function ProjectCard({ labels, project, repository }: ProjectCardProps) {
  const technologies = repository
    ? [repository.primaryLanguage, ...repository.topics].filter(
        (technology): technology is string => Boolean(technology),
      )
    : [];

  return (
    <article className="flex h-full flex-col rounded-[30px] border border-line bg-surface px-6 py-6 shadow-(--shadow)">
      <div className="flex items-center justify-between gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          {labels.repositoryLabel}
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
      {technologies.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-foreground"
            >
              {technology}
            </span>
          ))}
        </div>
      ) : null}
      {repository ? (
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={repository.profileUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${labels.openRepositoryAriaLabel} ${project.title}`}
            className="inline-flex w-fit rounded-full border border-line px-4 py-2 text-sm font-medium transition hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            {labels.openLabel}
          </Link>
          {repository.demoUrl ? (
            <Link
              href={repository.demoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${labels.openDemoAriaLabel} ${project.title}`}
              className="inline-flex w-fit rounded-full bg-action px-4 py-2 text-sm font-medium text-on-action transition hover:bg-action-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {labels.openDemoLabel}
            </Link>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

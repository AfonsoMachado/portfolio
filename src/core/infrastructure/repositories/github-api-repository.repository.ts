import type { GitHubRepository } from "@/core/domain/entities/github-repository";
import type { GitHubRepositoryRepository } from "@/core/domain/repositories/github-repository.repository";
import {
  featuredGitHubRepositoryNames,
  githubUsername,
} from "@/shared/config/github";

type GitHubApiRepository = {
  description?: string | null;
  fork?: boolean;
  homepage?: string | null;
  html_url?: string;
  language?: string | null;
  name?: string;
  topics?: string[];
};

const repositoriesUrl = new URL(
  `https://api.github.com/users/${githubUsername}/repos`,
);

repositoriesUrl.search = new URLSearchParams({
  direction: "desc",
  per_page: "100",
  sort: "pushed",
  type: "owner",
}).toString();

const repositoriesApiUrl = repositoriesUrl.toString();
const requestTimeoutInMilliseconds = 5_000;

function toDemoUrl(homepage: string | null | undefined): string | null {
  if (!homepage) {
    return null;
  }

  try {
    const url = new URL(homepage);

    return url.protocol === "https:" || url.protocol === "http:"
      ? url.toString()
      : null;
  } catch {
    return null;
  }
}

function toGitHubRepository(
  repository: GitHubApiRepository,
): GitHubRepository | null {
  if (!repository.name || !repository.html_url || repository.fork) {
    return null;
  }

  return {
    demoUrl: toDemoUrl(repository.homepage),
    description: repository.description ?? null,
    name: repository.name,
    primaryLanguage: repository.language ?? null,
    profileUrl: repository.html_url,
    topics: repository.topics ?? [],
  };
}

export class GitHubApiRepositoryRepository implements GitHubRepositoryRepository {
  async getFeatured(): Promise<GitHubRepository[]> {
    try {
      const response = await fetch(repositoriesApiUrl, {
        signal: AbortSignal.timeout(requestTimeoutInMilliseconds),
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "afonso-machado-portfolio",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        next: { revalidate: 86_400 },
      });

      if (!response.ok) {
        return [];
      }

      const repositories = await response.json();

      if (!Array.isArray(repositories)) {
        return [];
      }

      const featuredRepositories = new Map(
        repositories
          .map((repository) =>
            toGitHubRepository(repository as GitHubApiRepository),
          )
          .filter(
            (repository): repository is GitHubRepository => repository !== null,
          )
          .map((repository) => [repository.name, repository]),
      );

      return featuredGitHubRepositoryNames.flatMap((name) => {
        const repository = featuredRepositories.get(name);

        return repository ? [repository] : [];
      });
    } catch {
      return [];
    }
  }
}

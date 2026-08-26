import type { GitHubRepository } from "@/core/domain/entities/github-repository";
import type { GitHubRepositoryRepository } from "@/core/domain/repositories/github-repository.repository";

export async function getFeaturedGitHubRepositories(
  repository: GitHubRepositoryRepository,
): Promise<GitHubRepository[]> {
  return repository.getFeatured();
}

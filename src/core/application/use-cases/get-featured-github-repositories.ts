import type { GitHubRepository } from "@/core/domain/entities/github-repository";
import { GitHubApiRepositoryRepository } from "@/core/infrastructure/repositories/github-api-repository.repository";

const repository = new GitHubApiRepositoryRepository();

export async function getFeaturedGitHubRepositories(): Promise<
  GitHubRepository[]
> {
  return repository.getFeatured();
}

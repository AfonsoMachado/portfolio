import type { GitHubRepository } from "@/core/domain/entities/github-repository";

export interface GitHubRepositoryRepository {
  getFeatured(): Promise<GitHubRepository[]>;
}

import type { GitHubProfile } from "@/core/domain/entities/github-profile";
import { GitHubApiProfileRepository } from "@/core/infrastructure/repositories/github-api-profile.repository";

const repository = new GitHubApiProfileRepository();

export async function getGitHubProfile(): Promise<GitHubProfile | null> {
  return repository.get();
}

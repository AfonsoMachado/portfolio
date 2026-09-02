import type { GitHubProfile } from "@/core/domain/entities/github-profile";
import type { GitHubProfileRepository } from "@/core/domain/repositories/github-profile.repository";

export async function getGitHubProfile(
  repository: GitHubProfileRepository,
): Promise<GitHubProfile | null> {
  return repository.get();
}

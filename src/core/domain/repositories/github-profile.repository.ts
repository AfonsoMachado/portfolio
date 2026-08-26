import type { GitHubProfile } from "@/core/domain/entities/github-profile";

export interface GitHubProfileRepository {
  get(): Promise<GitHubProfile | null>;
}

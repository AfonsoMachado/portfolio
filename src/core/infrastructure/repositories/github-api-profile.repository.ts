import type { GitHubProfile } from "@/core/domain/entities/github-profile";
import type { GitHubProfileRepository } from "@/core/domain/repositories/github-profile.repository";
import { githubUsername } from "@/shared/config/github";

type GitHubApiProfile = {
  avatar_url?: unknown;
  html_url?: unknown;
  login?: unknown;
};

const profileUrl = `https://api.github.com/users/${githubUsername}`;

function toGitHubProfile(profile: GitHubApiProfile): GitHubProfile | null {
  if (
    typeof profile.avatar_url !== "string" ||
    typeof profile.html_url !== "string" ||
    typeof profile.login !== "string"
  ) {
    return null;
  }

  return {
    avatarUrl: profile.avatar_url,
    login: profile.login,
    profileUrl: profile.html_url,
  };
}

export class GitHubApiProfileRepository implements GitHubProfileRepository {
  async get(): Promise<GitHubProfile | null> {
    try {
      const response = await fetch(profileUrl, {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "afonso-machado-portfolio",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        next: { revalidate: 86_400 },
      });

      if (!response.ok) {
        return null;
      }

      return toGitHubProfile((await response.json()) as GitHubApiProfile);
    } catch {
      return null;
    }
  }
}

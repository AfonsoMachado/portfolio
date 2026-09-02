import { describe, expect, it, vi } from "vitest";

import { getGitHubProfile } from "@/core/application/use-cases/get-github-profile";
import type { GitHubProfileRepository } from "@/core/domain/repositories/github-profile.repository";

describe("getGitHubProfile", () => {
  it("delegates profile retrieval to the repository contract", async () => {
    const profile = {
      avatarUrl: "https://avatars.githubusercontent.com/u/1?v=4",
      login: "AfonsoMachado",
      profileUrl: "https://github.com/AfonsoMachado",
    };
    const repository: GitHubProfileRepository = {
      get: vi.fn().mockResolvedValue(profile),
    };

    await expect(getGitHubProfile(repository)).resolves.toEqual(profile);
    expect(repository.get).toHaveBeenCalledOnce();
  });
});

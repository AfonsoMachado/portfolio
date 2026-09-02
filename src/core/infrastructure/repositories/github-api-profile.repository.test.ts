import { afterEach, describe, expect, it, vi } from "vitest";

import { GitHubApiProfileRepository } from "@/core/infrastructure/repositories/github-api-profile.repository";

describe("GitHubApiProfileRepository", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("maps the public GitHub profile response", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue({
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/AfonsoMachado",
        login: "AfonsoMachado",
      }),
    });
    vi.stubGlobal("fetch", fetchMock);

    const profile = await new GitHubApiProfileRepository().get();

    expect(profile).toEqual({
      avatarUrl: "https://avatars.githubusercontent.com/u/1?v=4",
      profileUrl: "https://github.com/AfonsoMachado",
      login: "AfonsoMachado",
    });
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.github.com/users/AfonsoMachado",
      expect.objectContaining({
        next: { revalidate: 86_400 },
      }),
    );
  });

  it("returns null when the GitHub API is unavailable", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));

    await expect(new GitHubApiProfileRepository().get()).resolves.toBeNull();
  });
});

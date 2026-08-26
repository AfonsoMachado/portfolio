import { afterEach, describe, expect, it, vi } from "vitest";

import { GitHubApiRepositoryRepository } from "@/core/infrastructure/repositories/github-api-repository.repository";

describe("GitHubApiRepositoryRepository", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("maps only configured, non-fork public repositories", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue([
        {
          description: "A calculator",
          fork: false,
          html_url: "https://github.com/AfonsoMachado/calculator-react",
          language: "JavaScript",
          name: "calculator-react",
          topics: ["react", "calculator"],
        },
        {
          fork: true,
          html_url: "https://github.com/AfonsoMachado/nubank-clone",
          name: "nubank-clone",
        },
        {
          fork: false,
          html_url: "https://github.com/AfonsoMachado/another-repository",
          name: "another-repository",
        },
      ]),
    });
    vi.stubGlobal("fetch", fetchMock);

    const repositories =
      await new GitHubApiRepositoryRepository().getFeatured();

    expect(repositories).toEqual([
      {
        description: "A calculator",
        name: "calculator-react",
        primaryLanguage: "JavaScript",
        profileUrl: "https://github.com/AfonsoMachado/calculator-react",
        topics: ["react", "calculator"],
      },
    ]);
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.github.com/users/AfonsoMachado/repos?direction=desc&per_page=100&sort=pushed&type=owner",
      expect.objectContaining({
        next: { revalidate: 86_400 },
      }),
    );
  });

  it("returns an empty list when the GitHub API is unavailable", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));

    await expect(
      new GitHubApiRepositoryRepository().getFeatured(),
    ).resolves.toEqual([]);
  });
});

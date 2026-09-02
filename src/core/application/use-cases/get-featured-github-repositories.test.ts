import { describe, expect, it, vi } from "vitest";

import { getFeaturedGitHubRepositories } from "@/core/application/use-cases/get-featured-github-repositories";
import { ProjectId } from "@/core/domain/entities/portfolio";
import type { GitHubRepositoryRepository } from "@/core/domain/repositories/github-repository.repository";

describe("getFeaturedGitHubRepositories", () => {
  it("delegates featured repository retrieval to the repository contract", async () => {
    const repositories = [
      {
        demoUrl: null,
        description: "A calculator",
        name: ProjectId.CalculatorReact,
        primaryLanguage: "JavaScript",
        profileUrl: "https://github.com/AfonsoMachado/calculator-react",
        topics: ["react"],
      },
    ];
    const repository: GitHubRepositoryRepository = {
      getFeatured: vi.fn().mockResolvedValue(repositories),
    };

    await expect(getFeaturedGitHubRepositories(repository)).resolves.toEqual(
      repositories,
    );
    expect(repository.getFeatured).toHaveBeenCalledOnce();
  });
});

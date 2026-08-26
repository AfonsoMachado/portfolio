import { describe, expect, it, vi } from "vitest";

import { getPortfolioContent } from "@/core/application/use-cases/get-portfolio-content";
import type { PortfolioContent } from "@/core/domain/entities/portfolio";
import type { PortfolioContentRepository } from "@/core/domain/repositories/portfolio-content.repository";
import { locales } from "@/shared/i18n/config";

describe("getPortfolioContent", () => {
  it("delegates content retrieval to the repository contract", async () => {
    const repository: PortfolioContentRepository = {
      getByLocale: vi.fn(async (locale) => ({ locale }) as PortfolioContent),
    };
    const content = await Promise.all(
      locales.map((locale) => getPortfolioContent(repository, locale)),
    );

    expect(content.map((item) => item.locale)).toEqual(locales);
    expect(repository.getByLocale).toHaveBeenCalledTimes(locales.length);
  });
});

import { describe, expect, it } from "vitest";

import { getPortfolioContent } from "@/core/application/use-cases/get-portfolio-content";
import { locales } from "@/shared/i18n/config";

describe("getPortfolioContent", () => {
  it("returns content matching every supported locale", async () => {
    const content = await Promise.all(
      locales.map((locale) => getPortfolioContent(locale)),
    );

    expect(content.map((item) => item.locale)).toEqual(locales);
    expect(content.every((item) => item.navigation.length > 0)).toBe(true);
    expect(content.every((item) => item.projects.items.length > 0)).toBe(true);
  });
});

import { describe, expect, it } from "vitest";

import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { siteUrl } from "@/shared/config/site";

describe("SEO metadata routes", () => {
  it("lists each localized portfolio page in the sitemap", () => {
    const entries = sitemap();

    expect(entries).toHaveLength(3);
    expect(entries.map((entry) => entry.url)).toEqual([
      new URL("/pt-br", siteUrl).toString(),
      new URL("/en", siteUrl).toString(),
      new URL("/es", siteUrl).toString(),
    ]);
  });

  it("allows crawlers and references the generated sitemap", () => {
    expect(robots()).toEqual({
      rules: {
        userAgent: "*",
        allow: "/",
      },
      sitemap: new URL("/sitemap.xml", siteUrl).toString(),
    });
  });
});

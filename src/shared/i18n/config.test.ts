import { describe, expect, it } from "vitest";

import {
  defaultLocale,
  isSupportedLocale,
  locales,
} from "@/shared/i18n/config";

describe("i18n configuration", () => {
  it("uses Brazilian Portuguese as the default locale", () => {
    expect(defaultLocale).toBe("pt-br");
  });

  it("accepts every configured locale and rejects unsupported values", () => {
    for (const locale of locales) {
      expect(isSupportedLocale(locale)).toBe(true);
    }

    expect(isSupportedLocale("fr")).toBe(false);
    expect(isSupportedLocale("")).toBe(false);
  });
});

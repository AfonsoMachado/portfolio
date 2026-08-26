import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import type { PortfolioContent } from "@/core/domain/entities/portfolio";
import { PortfolioHeader } from "@/presentation/components/portfolio-header";

const content = {
  brand: {
    name: "Afonso Machado",
    role: "Full-stack developer",
  },
  contact: { availability: "Available for opportunities" },
  languageSwitcherLabel: "Languages",
  menuLabel: "Menu",
  navigation: [{ href: "#home", label: "Home" }],
  theme: {
    darkLabel: "Dark",
    label: "Theme",
    lightLabel: "Light",
    systemLabel: "System",
  },
} as PortfolioContent;

afterEach(() => {
  cleanup();
  Object.defineProperty(window, "scrollY", { configurable: true, value: 0 });
});

describe("PortfolioHeader", () => {
  it("uses a compact layout after the visitor starts scrolling", () => {
    render(<PortfolioHeader content={content} locale="en" />);

    Object.defineProperty(window, "scrollY", { configurable: true, value: 32 });
    fireEvent.scroll(window);

    expect(
      screen.getByText("Afonso Machado").closest("header")?.className,
    ).toContain("-translate-y-16");
  });
});

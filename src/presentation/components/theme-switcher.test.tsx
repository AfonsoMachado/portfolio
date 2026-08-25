import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { ThemeSwitcher } from "@/presentation/components/theme-switcher";

const labels = {
  label: "Theme",
  systemLabel: "System",
  lightLabel: "Light",
  darkLabel: "Dark",
};

afterEach(() => {
  cleanup();
  window.localStorage.clear();
  document.documentElement.classList.remove("theme-light", "theme-dark");
});

describe("ThemeSwitcher", () => {
  it("persists and applies the selected theme", () => {
    render(<ThemeSwitcher labels={labels} />);

    const darkButton = screen.getByRole("button", { name: "Dark" });
    fireEvent.click(darkButton);

    expect(darkButton.getAttribute("aria-pressed")).toBe("true");
    expect(window.localStorage.getItem("afonso-portfolio-theme")).toBe("dark");
    expect(document.documentElement.classList.contains("theme-dark")).toBe(
      true,
    );
  });

  it("removes explicit classes when returning to the system theme", () => {
    window.localStorage.setItem("afonso-portfolio-theme", "dark");
    render(<ThemeSwitcher labels={labels} />);

    fireEvent.click(screen.getByRole("button", { name: "System" }));

    expect(window.localStorage.getItem("afonso-portfolio-theme")).toBe(
      "system",
    );
    expect(document.documentElement.classList.contains("theme-dark")).toBe(
      false,
    );
  });
});

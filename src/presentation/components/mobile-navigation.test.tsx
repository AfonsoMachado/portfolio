import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { MobileNavigation } from "@/presentation/components/mobile-navigation";

const items = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
] as const;

afterEach(cleanup);

describe("MobileNavigation", () => {
  it("opens the menu and closes it after a navigation item is selected", () => {
    render(<MobileNavigation items={[...items]} label="Menu" />);

    const button = screen.getByRole("button", { name: "Menu" });
    const navigation = screen.getByRole("navigation", {
      name: "Menu",
      hidden: true,
    });

    expect(button.getAttribute("aria-expanded")).toBe("false");
    fireEvent.click(button);

    expect(button.getAttribute("aria-expanded")).toBe("true");
    expect(navigation.className).toContain("visible");

    fireEvent.click(screen.getByRole("link", { name: "Projects" }));

    expect(button.getAttribute("aria-expanded")).toBe("false");
    expect(navigation.className).toContain("invisible");
  });

  it("closes the menu and restores button focus when Escape is pressed", () => {
    render(<MobileNavigation items={[...items]} label="Menu" />);

    const button = screen.getByRole("button", { name: "Menu" });
    fireEvent.click(button);
    fireEvent.keyDown(document, { key: "Escape" });

    expect(button.getAttribute("aria-expanded")).toBe("false");
    expect(document.activeElement).toBe(button);
  });
});

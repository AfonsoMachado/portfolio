import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { TrackedContactLink } from "@/presentation/components/tracked-contact-link";

const { track } = vi.hoisted(() => ({ track: vi.fn() }));

vi.mock("@vercel/analytics", () => ({ track }));

describe("TrackedContactLink", () => {
  beforeEach(() => {
    track.mockReset();
  });

  it("tracks clicks on the LinkedIn contact link", () => {
    render(
      <TrackedContactLink
        locale="pt-br"
        link={{
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/afonsomachado/",
          caption: "Professional contact",
        }}
      />,
    );

    fireEvent.click(screen.getByRole("link", { name: /LinkedIn/ }));

    expect(track).toHaveBeenCalledWith("linkedin_contact_click", {
      locale: "pt-br",
    });
  });

  it("does not track other contact links as LinkedIn clicks", () => {
    render(
      <TrackedContactLink
        locale="en"
        link={{
          label: "GitHub",
          href: "https://github.com/AfonsoMachado",
          caption: "Code",
        }}
      />,
    );

    fireEvent.click(screen.getByRole("link", { name: /GitHub/ }));

    expect(track).not.toHaveBeenCalled();
  });
});

"use client";

import { useState } from "react";

import type { NavItem } from "@/core/domain/entities/portfolio";
import {
  CloseIcon,
  MenuIcon,
} from "@/presentation/components/icons/interface-icons";

type MobileNavigationProps = {
  items: NavItem[];
  label: string;
};

export function MobileNavigation({ items, label }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        aria-label={label}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
        className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface-strong text-foreground transition cursor-pointer hover:bg-accent-soft"
      >
        {isOpen ? (
          <CloseIcon className="h-5 w-5" />
        ) : (
          <MenuIcon className="h-5 w-5" />
        )}
      </button>

      <nav
        id="mobile-navigation"
        aria-label={label}
        className={`absolute right-0 top-full z-30 mt-3 w-56 rounded-3xl border border-line bg-surface-strong p-2 shadow-(--header-shadow) transition-all duration-200 ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="block rounded-2xl px-4 py-3 text-sm text-muted transition hover:bg-accent-soft hover:text-foreground"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

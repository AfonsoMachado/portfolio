"use client";

import { useEffect, useState } from "react";

import type { PortfolioContent } from "@/core/domain/entities/portfolio";
import { LanguageSwitcher } from "@/presentation/components/language-switcher";
import { MobileNavigation } from "@/presentation/components/mobile-navigation";
import { ThemeSwitcher } from "@/presentation/components/theme-switcher";
import type { Locale } from "@/shared/i18n/config";

export type PortfolioHeaderContent = {
  brand: Pick<PortfolioContent["brand"], "name" | "role">;
  contact: Pick<PortfolioContent["contact"], "availability">;
  languageSwitcherLabel: PortfolioContent["languageSwitcherLabel"];
  menuLabel: PortfolioContent["menuLabel"];
  navigation: PortfolioContent["navigation"];
  theme: PortfolioContent["theme"];
};

type PortfolioHeaderProps = {
  content: PortfolioHeaderContent;
  locale: Locale;
};

export function PortfolioHeader({ content, locale }: PortfolioHeaderProps) {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    function updateHeaderDensity() {
      setIsCompact(window.scrollY > 24);
    }

    window.addEventListener("scroll", updateHeaderDensity, { passive: true });

    return () => window.removeEventListener("scroll", updateHeaderDensity);
  }, []);

  return (
    <div className="sticky top-0 z-30">
      <div
        className={`origin-top pb-3 transition-all duration-300 ease-out ${
          isCompact
            ? "pointer-events-none scale-y-0 opacity-0"
            : "scale-y-100 opacity-100"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-1 font-mono text-xs uppercase tracking-[0.2em] text-muted sm:px-2">
          <p className="flex items-center gap-2 pb-3">
            <span className="h-2 w-2 rounded-full bg-status shadow-(--status-shadow)" />
            <span className="hidden sm:inline">
              {content.contact.availability}
            </span>
          </p>
          <div className="flex items-center gap-3 pb-3">
            <ThemeSwitcher labels={content.theme} />
            <LanguageSwitcher
              currentLocale={locale}
              label={content.languageSwitcherLabel}
              showLabel={false}
            />
          </div>
        </div>
      </div>

      <header
        className={`border border-line shadow-(--header-shadow) transition-all duration-300 ease-out ${
          isCompact
            ? "mb-0 mt-4 -translate-y-16 scale-y-95 rounded-2xl bg-header-surface px-5 py-4"
            : "mb-0 rounded-[28px] bg-surface/90 px-5 py-4"
        }`}
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex w-full items-center justify-between gap-4 lg:w-auto">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">
                {content.brand.role}
              </p>
              <h1 className="text-lg font-semibold text-foreground">
                {content.brand.name}
              </h1>
            </div>
            <div className="lg:hidden">
              <MobileNavigation
                items={content.navigation}
                label={content.menuLabel}
              />
            </div>
          </div>

          <nav className="hidden gap-2 text-sm text-muted lg:flex lg:flex-nowrap">
            {content.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 transition hover:bg-accent-soft hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
}

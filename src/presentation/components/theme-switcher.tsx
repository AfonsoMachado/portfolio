"use client";

import { useEffect, useState } from "react";

type Theme = "system" | "light" | "dark";

type ThemeSwitcherProps = {
  labels: {
    label: string;
    systemLabel: string;
    lightLabel: string;
    darkLabel: string;
  };
};

const storageKey = "afonso-portfolio-theme";

function getStoredTheme(): Theme {
  if (typeof window === "undefined") {
    return "system";
  }

  const savedTheme = window.localStorage.getItem(storageKey);

  return savedTheme === "light" || savedTheme === "dark" || savedTheme === "system"
    ? savedTheme
    : "system";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;

  root.classList.remove("theme-light", "theme-dark");

  if (theme !== "system") {
    root.classList.add(`theme-${theme}`);
  }
}

export function ThemeSwitcher({ labels }: ThemeSwitcherProps) {
  const [theme, setTheme] = useState<Theme>(getStoredTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function selectTheme(nextTheme: Theme) {
    setTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
  }

  const options: { value: Theme; label: string }[] = [
    { value: "system", label: labels.systemLabel },
    { value: "light", label: labels.lightLabel },
    { value: "dark", label: labels.darkLabel },
  ];

  return (
    <div className="flex items-center gap-2" aria-label={labels.label}>
      <span className="hidden text-xs uppercase tracking-[0.28em] text-muted xl:inline">
        {labels.label}
      </span>
      <div className="flex rounded-full border border-line bg-surface-strong p-1">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => selectTheme(option.value)}
            aria-pressed={theme === option.value}
            className={`rounded-full px-3 py-2 text-xs font-medium transition ${
              theme === option.value
                ? "bg-foreground text-background"
                : "text-muted hover:text-foreground"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

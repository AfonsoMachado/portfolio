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

function ThemeIcon({ theme }: { theme: Theme }) {
  if (theme === "light") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    );
  }

  if (theme === "dark") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5 6.7 6.7 0 0 0 20.5 14.2Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
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
    <div
      role="group"
      aria-label={labels.label}
      className="flex rounded-full border border-line bg-surface-strong p-1"
    >
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => selectTheme(option.value)}
            aria-pressed={theme === option.value}
            aria-label={option.label}
            title={option.label}
            className={`grid h-8 w-8 place-items-center rounded-full transition ${
              theme === option.value
                ? "bg-action text-on-action"
                : "text-muted hover:text-foreground"
            }`}
          >
            <span className="h-4 w-4">
              <ThemeIcon theme={option.value} />
            </span>
          </button>
        ))}
    </div>
  );
}

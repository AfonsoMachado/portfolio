"use client";

import { useEffect, useState } from "react";

import {
  MoonIcon,
  SunIcon,
  SystemIcon,
} from "@/presentation/components/icons/interface-icons";

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

  return savedTheme === "light" ||
    savedTheme === "dark" ||
    savedTheme === "system"
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
    return <SunIcon />;
  }

  if (theme === "dark") {
    return <MoonIcon />;
  }

  return <SystemIcon />;
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
          className={`grid h-8 w-8 place-items-center rounded-full cursor-pointer transition ${theme === option.value
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

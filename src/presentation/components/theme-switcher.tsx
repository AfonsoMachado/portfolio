"use client";

import { useSyncExternalStore } from "react";

import {
  MoonIcon,
  SunIcon,
  SystemIcon,
} from "@/presentation/components/icons/interface-icons";
import { themeStorageKey } from "@/shared/config/theme";

type Theme = "system" | "light" | "dark";

type ThemeSwitcherProps = {
  labels: {
    label: string;
    systemLabel: string;
    lightLabel: string;
    darkLabel: string;
  };
};

function getStoredTheme(): Theme {
  if (typeof window === "undefined") {
    return "system";
  }

  const savedTheme = window.localStorage.getItem(themeStorageKey);

  return savedTheme === "light" ||
    savedTheme === "dark" ||
    savedTheme === "system"
    ? savedTheme
    : "system";
}

const listeners = new Set<() => void>();

function subscribeToTheme(listener: () => void) {
  listeners.add(listener);

  return () => listeners.delete(listener);
}

function storeTheme(theme: Theme) {
  window.localStorage.setItem(themeStorageKey, theme);
  listeners.forEach((listener) => listener());
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
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getStoredTheme,
    () => "system",
  );

  function selectTheme(nextTheme: Theme) {
    storeTheme(nextTheme);
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
          className={`grid h-8 w-8 place-items-center rounded-full cursor-pointer transition ${
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

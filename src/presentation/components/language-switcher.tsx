import Link from "next/link";

import { localeLabels, locales, type Locale } from "@/shared/i18n/config";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  label: string;
  showLabel?: boolean;
};

export function LanguageSwitcher({
  currentLocale,
  label,
  showLabel = true,
}: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-3">
      {showLabel ? (
        <span className="hidden text-xs uppercase tracking-[0.28em] text-muted lg:inline">
          {label}
        </span>
      ) : null}
      <div className="flex rounded-full border border-line bg-surface-strong p-1 shadow-(--control-shadow)">
        {locales.map((locale) => {
          const isActive = locale === currentLocale;

          return (
            <Link
              key={locale}
              href={`/${locale}`}
              className={`rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[0.2em] transition ${
                isActive
                  ? "bg-action text-on-action"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {localeLabels[locale]}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

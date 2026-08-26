"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";

import type { ContactLink as ContactLinkData } from "@/core/domain/entities/portfolio";
import type { Locale } from "@/shared/i18n/config";

type TrackedContactLinkProps = {
  link: ContactLinkData;
  locale: Locale;
};

export function TrackedContactLink({ link, locale }: TrackedContactLinkProps) {
  const isLinkedInLink = link.href.startsWith("https://www.linkedin.com/");

  function handleClick() {
    if (isLinkedInLink) {
      track("linkedin_contact_click", { locale });
    }
  }

  return (
    <Link
      href={link.href}
      target="_blank"
      rel="noreferrer"
      onClick={handleClick}
      className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-contact-accent/40 hover:bg-white/8"
    >
      <p className="text-lg font-semibold">{link.label}</p>
      <p className="mt-2 text-sm leading-7 text-contact-muted">
        {link.caption}
      </p>
    </Link>
  );
}

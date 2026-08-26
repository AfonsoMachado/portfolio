const fallbackSiteUrl = "https://afonso-machado-dev.vercel.app";

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl,
);

export function getLocalizedUrl(locale: string) {
  return new URL(`/${locale}`, siteUrl).toString();
}

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { siteUrl } from "@/shared/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: "Afonso Machado | Portfolio",
  title: "Afonso Machado | Portfolio",
  description: "Portfolio multilíngue de Afonso Machado.",
  authors: [{ name: "Afonso Machado" }],
  creator: "Afonso Machado",
  publisher: "Afonso Machado",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    locale: "pt_BR",
    siteName: "Afonso Machado | Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className="h-full scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

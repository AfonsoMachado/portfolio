import { ImageResponse } from "next/og";

import { isSupportedLocale, type Locale } from "@/shared/i18n/config";

export const alt = "Afonso Machado | Portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const copy = {
  "pt-br": {
    location: "Feira de Santana, Bahia",
    role: "Desenvolvedor full-stack",
  },
  en: {
    location: "Feira de Santana, Bahia, Brazil",
    role: "Full-stack developer",
  },
  es: {
    location: "Feira de Santana, Bahia, Brasil",
    role: "Desarrollador full-stack",
  },
} satisfies Record<Locale, Record<string, string>>;

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = copy[isSupportedLocale(locale) ? locale : "pt-br"];

  return new ImageResponse(
    <div
      style={{
        background: "#101f1d",
        color: "#f8f1e7",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "72px",
        width: "100%",
      }}
    >
      <div
        style={{
          color: "#8fd5cd",
          display: "flex",
          fontSize: 28,
          letterSpacing: 8,
          textTransform: "uppercase",
        }}
      >
        Portfolio
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 86,
            fontWeight: 700,
            letterSpacing: -4,
          }}
        >
          Afonso Machado
        </div>
        <div
          style={{
            color: "#8fd5cd",
            display: "flex",
            fontSize: 44,
            marginTop: 18,
          }}
        >
          {content.role}
        </div>
      </div>
      <div
        style={{
          borderTop: "2px solid #2e5954",
          color: "#cfdbd7",
          display: "flex",
          fontSize: 24,
          justifyContent: "space-between",
          paddingTop: 28,
        }}
      >
        <span>{content.location}</span>
        <span>Next.js · React · TypeScript</span>
      </div>
    </div>,
    size,
  );
}

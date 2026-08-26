import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Afonso Machado | Portfolio",
    short_name: "Afonso Machado",
    description: "Portfolio de Afonso Machado, desenvolvedor web full-stack.",
    start_url: "/pt-br",
    display: "standalone",
    background_color: "#101f1d",
    theme_color: "#0f766e",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

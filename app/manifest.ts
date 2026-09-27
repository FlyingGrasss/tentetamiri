import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tente Tamiri İstanbul",
    short_name: "Tente Tamiri",
    description:
      "İstanbul genelinde tente tamiri, pergola, otomatik tente, branda ve çadır servisleri.",
    lang: "tr-TR",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#ff0000",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}

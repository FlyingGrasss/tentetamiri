import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tentelisa Tente | Pergola Sistemleri",
    short_name: "Tentelisa",
    description:
      "Esenler ve İstanbul genelinde tente tamiri, pergola sistemleri, otomatik tente ve branda servisleri.",
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

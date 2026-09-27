import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.tentetamiri.com.tr",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: ["https://www.tentetamiri.com.tr/admin/image/653-tente-tamiri10.jpg"],
    },
  ];
}

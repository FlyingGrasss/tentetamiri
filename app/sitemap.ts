import type { MetadataRoute } from "next";
import { seoServices, servicePath } from "@/lib/seo-content";

const siteUrl = "https://tentelisa.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [`${siteUrl}/admin/image/653-tente-tamiri10.jpg`],
    },
    {
      url: `${siteUrl}/hizmetler`,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${siteUrl}/admin/image/653-tente-tamiri10.jpg`],
    },
  ];

  return [
    ...pages,
    ...seoServices.map((service) => ({
      url: `${siteUrl}${servicePath(service)}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [service.image],
    })),
  ];
}

import type { MetadataRoute } from "next";
import { seoServices, servicePath } from "@/lib/seo-content";
import { blogPosts } from "@/lib/blog-content";

const siteUrl = "https://tentelisa.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/hizmetler`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      changeFrequency: "weekly",
      priority: 0.85,
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
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      lastModified: new Date(post.date),
    })),
  ];
}

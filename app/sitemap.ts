import type { MetadataRoute } from "next";
import { siteConfig, solutionPages } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/privacy", "/terms", "/support", "/solutions"];

  const now = new Date();

  return [
    ...staticPages.map((path) => ({
      url: `${siteConfig.siteUrl}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...solutionPages.map((page) => ({
      url: `${siteConfig.siteUrl}/solutions/${page.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}

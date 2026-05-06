// Auto-generated sitemap from page routes.
// Add new pages here as you build them.

import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Core pages — adjust based on tier
  const pages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
  ];

  // Starter+ pages
  if (siteConfig.tier !== "kickstart") {
    pages.push(
      { url: `${baseUrl}/services`, lastModified: new Date(), priority: 0.8 },
      { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.7 },
      { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.8 },
    );
  }

  // Professional pages
  if (siteConfig.tier === "professional") {
    pages.push(
      { url: `${baseUrl}/portfolio`, lastModified: new Date(), priority: 0.7 },
    );
  }

  // Privacy (always last, low priority)
  pages.push(
    { url: `${baseUrl}/privacy`, lastModified: new Date(), priority: 0.3 },
  );

  return pages;
}

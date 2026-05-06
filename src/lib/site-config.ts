// Site configuration — single source of truth for all brand data.

export const siteConfig = {
  name: "Gather",
  nameShort: "Gather",
  domain: "gatherstudio.app",
  url: "https://gatherstudio.app",

  // SEO & Schema
  schemaType: "Organization" as string,
  brandDescriptor: "Simple, focused tools for small business operations.",
  ownerName: "Matt Headley",

  // Navigation
  navItems: [],
} as const;

export type SiteConfig = typeof siteConfig;

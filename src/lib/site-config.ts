// Site configuration — single source of truth for all brand data.

export const siteConfig = {
  name: "GatherStudio Hub",
  nameShort: "Gather",
  domain: "gatherstudio.app",
  url: "https://gatherstudio.app",

  // Contact
  phone: { display: "(256) 317-0000", href: "+12563170000" },
  email: "hello@gatherstudio.app",
  hours: "Mon–Fri 8am–5pm",
  address: {
    street: "",
    city: "Anniston",
    state: "Alabama",
    stateAbbr: "AL",
    zip: "36201",
  },
  serviceArea: "Nationwide",

  // Online presence
  gbpUrl: "#",
  calendlyUrl: "#",
  social: {
    facebook: "",
    instagram: "",
    google: "#",
  },

  // SEO & Schema
  schemaType: "Organization" as string,
  brandDescriptor: "The unified platform for event and community organizers across 15 verticals.",
  ownerName: "Matt Headley",
  footerDisclaimer: "Gather Suite · All Rights Reserved",

  // Integrations
  formspreeId: "xxxxxxxx",

  // Navigation
  navItems: [
    { label: "Products", href: "/products" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
  ],

  // Tier
  tier: "professional" as const,
} as const;

export type SiteConfig = typeof siteConfig;

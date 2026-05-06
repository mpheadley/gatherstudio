// Site configuration — single source of truth for all client data.
// Every component imports from here instead of hardcoded values.

export const siteConfig = {
  name: "GatherStudio Hub",
  nameShort: "Gather",
  domain: "gatherstudio.app",
  url: "https://gatherstudio.app",
  tier: "professional" as "kickstart" | "starter" | "professional",

  // Contact
  phone: { display: "(256) 317-0000", href: "+12563170000" },
  email: "hello@gatherstudio.app",
  hours: "Mon–Fri 8am–5pm",
  address: {
    street: "", // Fill in after scaffolding
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

  // Navigation — edit labels/hrefs per tier and project needs
  navItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

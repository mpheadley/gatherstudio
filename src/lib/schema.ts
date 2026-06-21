// JSON-LD schema generators — LocalBusiness, FAQPage, BreadcrumbList, Service.
// All pull from site-config.ts for consistent structured data.

import { siteConfig } from "./site-config";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": siteConfig.schemaType,
    name: siteConfig.name,
    description: siteConfig.brandDescriptor,
    url: siteConfig.url,
    telephone: siteConfig.phone.href,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.stateAbbr,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    areaServed: siteConfig.serviceArea,
    openingHours: siteConfig.hours,
    sameAs: [siteConfig.gbpUrl, ...Object.values(siteConfig.social)].filter(
      (url) => url && url !== "#"
    ),
    creator: {
      "@type": "Organization",
      name: "Headley",
      url: "https://headleyweb.com",
    },
  };
}

export function faqPageSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${siteConfig.url}${service.url}`,
    provider: {
      "@type": siteConfig.schemaType,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: siteConfig.serviceArea,
  };
}

export function speakableSchema(pageName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageName,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["[data-speakable='true']", "h1"],
    },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.ownerName,
    jobTitle: `${siteConfig.schemaType === "LocalBusiness" ? "Owner" : siteConfig.schemaType.replace(/([A-Z])/g, " $1").trim()}`,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/about`,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.stateAbbr,
      addressCountry: "US",
    },
    sameAs: [siteConfig.gbpUrl].filter((url) => url && url !== "#"),
  };
}

export function contactPointSchema() {
  return {
    "@context": "https://schema.org",
    "@type": siteConfig.schemaType,
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone.href,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.stateAbbr,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone.href,
      email: siteConfig.email,
      contactType: "customer service",
      availableLanguage: "English",
    },
  };
}

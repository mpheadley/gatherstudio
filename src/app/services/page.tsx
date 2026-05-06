// Services page — grid of services with descriptions + AEO answer blocks.
// Fill in from WEBSITE_COPY.md. Add BreadcrumbList + FAQ + Speakable schema.

import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, speakableSchema, faqPageSchema } from "@/lib/schema";
import JsonLd from "@/app/components/seo/JsonLd";
import { AnswerBlockSection } from "@/app/components/seo/AnswerBlock";
import { PageHero, ServicesGrid, CTABanner } from "@/app/components/sections";

// Replace with real Q&As from WEBSITE_COPY.md — target "People Also Ask" queries
const serviceFaqs = [
  {
    question: `How much does SaaS platform service cost in Anniston?`,
    answer: "Replace with a direct, specific answer about pricing. 100-200 words. Include price ranges if possible.",
  },
  {
    question: `What should I look for when hiring a SaaS platform?`,
    answer: "Replace with authority-building answer. What credentials, experience, or approach matters most? 100-200 words.",
  },
  {
    question: `Do I need a SaaS platform if I already have referrals?`,
    answer: "Replace with objection-handling answer. Address the common assumption and redirect. 100-200 words.",
  },
];

export const metadata: Metadata = generatePageMetadata({
  title: "Services",
  description: `Professional SaaS platform services in Anniston, AL. ${siteConfig.brandDescriptor}`,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ])}
      />
      <JsonLd data={speakableSchema(`Services | ${siteConfig.name}`)} />
      <JsonLd data={faqPageSchema(serviceFaqs)} />

      <PageHero
        eyebrow="What We Do"
        title="Our Services"
        description={siteConfig.brandDescriptor}
        variant="minimal"
      />

      {/* Replace with actual services from WEBSITE_COPY.md */}
      <ServicesGrid
        services={[
          { title: "Service One", description: "Detailed description of this service. Replace with copy from WEBSITE_COPY.md." },
          { title: "Service Two", description: "Detailed description of this service. Replace with copy from WEBSITE_COPY.md." },
          { title: "Service Three", description: "Detailed description of this service. Replace with copy from WEBSITE_COPY.md." },
          { title: "Service Four", description: "Detailed description of this service. Replace with copy from WEBSITE_COPY.md." },
          { title: "Service Five", description: "Detailed description of this service. Replace with copy from WEBSITE_COPY.md." },
          { title: "Service Six", description: "Detailed description of this service. Replace with copy from WEBSITE_COPY.md." },
        ]}
      />

      <AnswerBlockSection
        eyebrow="Common Questions"
        heading="Straight Answers"
        faqs={serviceFaqs}
      />

      <CTABanner
        title="Need a Quote?"
        description="Contact us for a free estimate on any of our services."
        primaryCTA={{ label: "Get a Free Quote", href: "/contact" }}
        variant="light"
      />
    </>
  );
}

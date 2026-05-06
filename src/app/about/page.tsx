// About page — owner story, values, and trust signals.
// Fill in from WEBSITE_COPY.md.

import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, personSchema, speakableSchema } from "@/lib/schema";
import JsonLd from "@/app/components/seo/JsonLd";
import { PageHero, StorySection, ValuesGrid, CTABanner } from "@/app/components/sections";

export const metadata: Metadata = generatePageMetadata({
  title: "About",
  description: `Learn about ${siteConfig.name} and owner ${siteConfig.ownerName}. ${siteConfig.brandDescriptor}`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ])}
      />
      <JsonLd data={personSchema()} />
      <JsonLd data={speakableSchema(`About ${siteConfig.ownerName} | ${siteConfig.name}`)} />

      <PageHero
        eyebrow="Our Story"
        title={`About ${siteConfig.nameShort}`}
        description="Built by operators, for operators. One platform. Every industry."
        variant="minimal"
      />

      <StorySection
        image={{ src: "/images/owner.webp", alt: "The founder of Gather" }}
        title="Built by Operators. For Operators."
        aspectRatio="portrait"
        paragraphs={[
          "Gather started because vendors, organizers, and community leaders deserve better tools. Not clunky legacy software. Not overcomplicated enterprise systems. Not one-size-fits-none platforms built by people who've never run a business.",
          "Every app in the Gather Suite was built from first-hand experience. Running a market. Coordinating an expo. Teaching lessons. Organizing a nonprofit. These aren't theoretical problems — they're real constraints solved by people who live them.",
          "Our mission is simple: give you the exact tools you need, nothing more. Pick what you use. Lock in fair pricing. Own your data. Grow your business without worrying about price hikes or vendor lock-in.",
        ]}
      />

      <ValuesGrid
        eyebrow="Why Gather"
        title="What Sets Us Apart"
        values={[
          {
            title: "Built by Operators",
            description: "Every product is built by someone who's actually done the work. We solve real problems, not imaginary ones.",
          },
          {
            title: "Fair, Transparent Pricing",
            description: "Founding member rates are locked forever. No hidden fees. No surprise price hikes. Pick what you need and pay for it.",
          },
          {
            title: "You Own Your Data",
            description: "Export anytime. No lock-in. We succeed because you succeed — not because you can't leave.",
          },
          {
            title: "15+ Specialized Apps",
            description: "Instead of forcing you into one overcomplicated system, we build best-in-class tools for each vertical.",
          },
          {
            title: "No Setup Costs",
            description: "Jump between products. Try new tools. Team members work across all your apps. Zero switching friction.",
          },
          {
            title: "Built to Last",
            description: "We're not chasing venture capital or exit strategies. We're building a sustainable indie SaaS company for the long term.",
          },
        ]}
      />

      <CTABanner
        title="Ready to grow your business?"
        description="Pick the tools you need. Lock in founding member pricing. No lock-in. No surprises."
        primaryCTA={{ label: "Explore Products", href: "/products" }}
        secondaryCTA={{ label: "Sign In", href: "/auth/signin" }}
        variant="light"
      />
    </>
  );
}

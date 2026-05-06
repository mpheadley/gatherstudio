// Portfolio page — project showcase grid (Starter+ tier).
// Replace placeholder projects with real client work.

import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/app/components/seo/JsonLd";
import { PageHero, PortfolioGrid, CTABanner } from "@/app/components/sections";

export const metadata: Metadata = generatePageMetadata({
  title: "Portfolio",
  description: "See our recent work and client results. Quality craftsmanship you can count on.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Portfolio", href: "/portfolio" },
        ])}
      />

      <PageHero
        eyebrow="Our Work"
        title="Portfolio"
        description="A selection of our recent projects and client results."
        variant="minimal"
      />

      {/* Replace with real project data + images */}
      <PortfolioGrid
        items={[
          { image: { src: "/images/placeholder.webp", alt: "Project one" }, title: "Project One", description: "Brief project description." },
          { image: { src: "/images/placeholder.webp", alt: "Project two" }, title: "Project Two", description: "Brief project description." },
          { image: { src: "/images/placeholder.webp", alt: "Project three" }, title: "Project Three", description: "Brief project description." },
          { image: { src: "/images/placeholder.webp", alt: "Project four" }, title: "Project Four", description: "Brief project description." },
        ]}
        columns={2}
      />

      <CTABanner
        title="Want Results Like These?"
        primaryCTA={{ label: "Start Your Project", href: "/contact" }}
        variant="light"
      />
    </>
  );
}

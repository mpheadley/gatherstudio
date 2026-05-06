// Component preview — browse all kit sections and patterns in one place.
// Use during Design Brief Phase 2 to pick layouts, test tokens, and compare variants.
// This page is excluded from production builds via robots.ts (noindex).

"use client";

import { useState } from "react";
import Link from "next/link";
import {
  PageHero,
  ServicesGrid,
  FAQ,
  CTABanner,
  Testimonials,
  StorySection,
  StatStrip,
  ValuesGrid,
  ContactForm,
  ContactInfo,
  PortfolioGrid,
  ProcessSteps,
} from "@/app/components/sections";
import {
  sampleServices,
  sampleTestimonials,
  sampleFAQ,
  sampleValues,
  sampleStats,
  sampleProcessSteps,
  samplePortfolio,
  sampleStoryParagraphs,
} from "@/data/sample-data";

// ── Section components (using real components with sample data) ──────────

function PreviewHeroCentered() {
  return (
    <PageHero
      eyebrow="Serving Calhoun County"
      title="Trusted Plumber in Anniston"
      description="Licensed plumbing contractor serving Calhoun County since 2010"
      primaryCTA={{ label: "Get a Free Quote", href: "/contact" }}
      secondaryCTA={{ label: "Call (256) 555-1234", href: "tel:+12565551234" }}
    />
  );
}

function PreviewHeroSplit() {
  return (
    <PageHero
      eyebrow="Serving Calhoun County"
      title="Plumbing Done Right, Every Time"
      description="Licensed plumbing contractor serving Calhoun County since 2010. Emergency service available 24/7."
      primaryCTA={{ label: "Get a Free Quote", href: "/contact" }}
      secondaryCTA={{ label: "Call (256) 555-1234", href: "tel:+12565551234" }}
      variant="split"
      image={{ src: "/images/placeholder.webp", alt: "Plumber at work" }}
    />
  );
}

function PreviewHeroBold() {
  // Bold bottom-aligned hero — unique layout, kept as inline preview
  return (
    <section className="relative min-h-[70vh] flex items-end section-dark overflow-hidden pb-16">
      <div className="absolute inset-0 bg-[var(--dark)]" />
      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        <p className="eyebrow text-[var(--primary)]">24/7 Emergency Service</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6 leading-tight">
          Your Local<br />
          <span className="text-[var(--primary)]">Plumbing Experts</span>
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl">
          Licensed plumbing contractor serving Calhoun County since 2010.
        </p>
        <span className="btn-primary">Get a Free Quote</span>
      </div>
    </section>
  );
}

function PreviewPageHeroMinimal() {
  return (
    <PageHero
      eyebrow="What We Do"
      title="Our Services"
      description="Licensed plumbing contractor serving Calhoun County since 2010"
      variant="minimal"
    />
  );
}

function PreviewServicesGrid() {
  return (
    <ServicesGrid
      eyebrow="What We Do"
      title="Our Services"
      services={sampleServices}
    />
  );
}

function PreviewTestimonials() {
  return (
    <Testimonials
      eyebrow="What Customers Say"
      title="Reviews That Speak for Themselves"
      items={sampleTestimonials}
    />
  );
}

function PreviewFAQ() {
  return (
    <FAQ
      eyebrow="Common Questions"
      title="FAQ"
      items={sampleFAQ}
      renderSchema={false}
    />
  );
}

function PreviewCTABanner() {
  return (
    <CTABanner
      title="Ready to Get Started?"
      description="Contact us today for a free, no-obligation quote."
      primaryCTA={{ label: "Get a Free Quote", href: "/contact" }}
      secondaryCTA={{ label: "Call (256) 555-1234", href: "tel:+12565551234" }}
    />
  );
}

function PreviewStats() {
  return <StatStrip stats={sampleStats} />;
}

function PreviewOwnerStory() {
  return (
    <StorySection
      image={{ src: "/images/placeholder.webp", alt: "Owner photo" }}
      title="Meet John Smith"
      paragraphs={sampleStoryParagraphs}
    />
  );
}

function PreviewValues() {
  return (
    <ValuesGrid
      eyebrow="Why Us"
      title="What Sets Us Apart"
      values={sampleValues}
    />
  );
}

function PreviewContactForm() {
  return (
    <section className="section">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <ContactForm heading="Send Us a Message" />
          </div>
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}

function PreviewPortfolioGrid() {
  return (
    <PortfolioGrid
      eyebrow="Our Work"
      title="Recent Projects"
      items={samplePortfolio}
    />
  );
}

function PreviewProcessGrid() {
  return (
    <ProcessSteps
      eyebrow="How It Works"
      title="Simple 3-Step Process"
      steps={sampleProcessSteps}
      variant="grid"
    />
  );
}

function PreviewProcessTimeline() {
  return (
    <ProcessSteps
      eyebrow="How It Works"
      title="Simple 3-Step Process"
      steps={sampleProcessSteps}
      variant="timeline"
    />
  );
}

// ── Primitives (inline — no matching section component) ─────────────────

function PreviewTypography() {
  return (
    <section className="section">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold mb-8">Typography</h2>
        <div className="space-y-6">
          <div>
            <p className="text-xs text-[var(--text-muted)] mb-1">eyebrow</p>
            <p className="eyebrow">Serving Calhoun County</p>
          </div>
          <div>
            <p className="text-xs text-[var(--text-muted)] mb-1">h1 — Page Title</p>
            <h1 className="text-4xl md:text-6xl font-bold">Trusted Plumber in Anniston</h1>
          </div>
          <div>
            <p className="text-xs text-[var(--text-muted)] mb-1">h2 — Section Title</p>
            <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          </div>
          <div>
            <p className="text-xs text-[var(--text-muted)] mb-1">h3 — Card/Item Title</p>
            <h3 className="text-xl font-bold">Residential Plumbing</h3>
          </div>
          <div>
            <p className="text-xs text-[var(--text-muted)] mb-1">Body text</p>
            <p className="text-[var(--text-body)]">Licensed plumbing contractor serving Calhoun County since 2010. We provide honest, reliable service at fair prices for residential and commercial customers.</p>
          </div>
          <div>
            <p className="text-xs text-[var(--text-muted)] mb-1">Muted text</p>
            <p className="text-[var(--text-muted)]">Brief description of this service. Used for supporting details and secondary content.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PreviewColors() {
  return (
    <section className="section section-light">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold mb-8">Color Tokens</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "--primary", label: "Primary" },
            { name: "--primary-hover", label: "Primary Hover" },
            { name: "--dark", label: "Dark" },
            { name: "--dark-2", label: "Dark 2" },
            { name: "--light", label: "Light" },
            { name: "--light-grey", label: "Light Grey" },
            { name: "--text-body", label: "Text Body" },
            { name: "--text-muted", label: "Text Muted" },
          ].map((c) => (
            <div key={c.name} className="text-center">
              <div
                className="w-full aspect-square rounded-lg border border-gray-200 mb-2"
                style={{ backgroundColor: `var(${c.name})` }}
              />
              <p className="text-xs font-mono text-[var(--text-muted)]">{c.name}</p>
              <p className="text-xs font-bold">{c.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PreviewButtons() {
  return (
    <section className="section">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold mb-8">Buttons</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)] mb-4">Primary</h3>
            <div className="flex flex-wrap gap-4">
              <span className="btn-primary">Get a Free Quote</span>
              <span className="btn-primary text-sm">Small Primary</span>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)] mb-4">Outline (Light BG)</h3>
            <div className="flex flex-wrap gap-4">
              <span className="btn-outline">Learn More</span>
              <span className="btn-outline text-sm">Small Outline</span>
            </div>
          </div>
          <div className="p-8 rounded-lg section-dark">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">On Dark Background</h3>
            <div className="flex flex-wrap gap-4">
              <span className="btn-primary">Get a Free Quote</span>
              <span className="btn-outline-white">Call Now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PreviewCards() {
  return (
    <section className="section section-light">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold mb-8">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-bold mb-3">Standard Card</h3>
            <p className="text-[var(--text-muted)]">Default card style with shadow, radius, and hover lift.</p>
          </div>
          <div className="card text-center">
            <h3 className="text-xl font-bold mb-3">Centered Card</h3>
            <p className="text-[var(--text-muted)]">Same card, centered text. Good for features and values.</p>
          </div>
          <div className="card !p-0 overflow-hidden md:col-span-2">
            <div className="bg-[var(--light-grey)] aspect-[21/9] flex items-center justify-center text-[var(--text-muted)]">
              Image Area
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">Image Card</h3>
              <p className="text-[var(--text-muted)] text-sm">Card with image on top — for portfolio items, case studies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section registry ─────────────────────────────────────────────────────

interface PreviewSection {
  id: string;
  label: string;
  category: "heroes" | "sections" | "patterns" | "primitives";
  component: () => React.ReactNode;
}

const sections: PreviewSection[] = [
  // Heroes
  { id: "hero-centered", label: "Hero — Centered", category: "heroes", component: PreviewHeroCentered },
  { id: "hero-split", label: "Hero — Split (Image Right)", category: "heroes", component: PreviewHeroSplit },
  { id: "hero-bold", label: "Hero — Bold Bottom-Aligned", category: "heroes", component: PreviewHeroBold },

  // Page sections
  { id: "page-hero", label: "Inner Page Hero", category: "sections", component: PreviewPageHeroMinimal },
  { id: "services-grid", label: "Services Grid", category: "sections", component: PreviewServicesGrid },
  { id: "testimonials", label: "Testimonials", category: "sections", component: PreviewTestimonials },
  { id: "faq", label: "FAQ Accordion", category: "sections", component: PreviewFAQ },
  { id: "cta-banner", label: "CTA Banner", category: "sections", component: PreviewCTABanner },
  { id: "stats", label: "Stats Bar", category: "sections", component: PreviewStats },
  { id: "owner-story", label: "Owner Story (About)", category: "sections", component: PreviewOwnerStory },
  { id: "values", label: "Values / Why Us", category: "sections", component: PreviewValues },
  { id: "contact-form", label: "Contact Form + Sidebar", category: "sections", component: PreviewContactForm },
  { id: "portfolio-grid", label: "Portfolio Grid", category: "sections", component: PreviewPortfolioGrid },

  // Layout patterns
  { id: "process-grid", label: "Process — Grid Steps", category: "patterns", component: PreviewProcessGrid },
  { id: "process-timeline", label: "Process — Timeline", category: "patterns", component: PreviewProcessTimeline },

  // Primitives
  { id: "typography", label: "Typography Scale", category: "primitives", component: PreviewTypography },
  { id: "colors", label: "Color Tokens", category: "primitives", component: PreviewColors },
  { id: "buttons", label: "Buttons", category: "primitives", component: PreviewButtons },
  { id: "cards", label: "Cards", category: "primitives", component: PreviewCards },
];

const categories = [
  { key: "heroes" as const, label: "Heroes" },
  { key: "sections" as const, label: "Page Sections" },
  { key: "patterns" as const, label: "Layout Patterns" },
  { key: "primitives" as const, label: "Primitives" },
];

// ── Main preview page ────────────────────────────────────────────────────

export default function PreviewPage() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const filtered = activeId
    ? sections.filter((s) => s.id === activeId)
    : sections;

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 bottom-0 w-64 bg-[var(--dark)] text-white overflow-y-auto z-50 pt-6 pb-12">
        <div className="px-4 mb-6">
          <h1 className="text-lg font-bold">Component Preview</h1>
          <p className="text-xs text-gray-400 mt-1">Next.js Starter Kit</p>
        </div>

        <button
          onClick={() => setActiveId(null)}
          className={`w-full text-left px-4 py-2 text-sm transition-colors ${
            activeId === null ? "bg-[var(--primary)] text-[var(--btn-text)]" : "text-gray-300 hover:text-white hover:bg-[var(--dark-2)]"
          }`}
        >
          Show All
        </button>

        {categories.map((cat) => (
          <div key={cat.key} className="mt-4">
            <p className="px-4 text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
              {cat.label}
            </p>
            {sections
              .filter((s) => s.category === cat.key)
              .map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveId(s.id === activeId ? null : s.id)}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                    activeId === s.id
                      ? "bg-[var(--primary)] text-[var(--btn-text)]"
                      : "text-gray-300 hover:text-white hover:bg-[var(--dark-2)]"
                  }`}
                >
                  {s.label}
                </button>
              ))}
          </div>
        ))}

        <div className="px-4 mt-8 pt-4 border-t border-gray-800">
          <Link href="/" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
            &larr; Back to site
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-64 flex-1 min-h-screen">
        {filtered.map((s) => (
          <div key={s.id} id={s.id}>
            <div className="bg-[var(--dark-2)] text-white px-6 py-3 flex items-center justify-between sticky top-0 z-40">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  {categories.find((c) => c.key === s.category)?.label}
                </span>
                <span className="text-gray-600">/</span>
                <span className="text-sm font-medium">{s.label}</span>
              </div>
              <span className="text-xs font-mono text-gray-500">#{s.id}</span>
            </div>
            <s.component />
          </div>
        ))}
      </main>
    </div>
  );
}

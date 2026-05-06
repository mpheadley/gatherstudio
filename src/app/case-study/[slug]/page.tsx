// Case study dynamic route (Professional tier).
// Each case study gets its own URL: /case-study/project-name
// Replace the placeholder data with real case study content.

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/app/components/seo/JsonLd";

// Replace with real case study data — consider moving to a data file
const caseStudies: Record<
  string,
  {
    title: string;
    tagline: string;
    client: string;
    trade: string;
    location: string;
    metrics: { value: string; label: string }[];
    problem: string;
    solution: string;
    results: string;
    testimonial?: { quote: string; name: string };
  }
> = {
  "example-project": {
    title: "Example Project",
    tagline: "How we helped Example Client achieve great results",
    client: "Example Client",
    trade: "Trade",
    location: "City, ST",
    metrics: [
      { value: "3x", label: "More Calls" },
      { value: "250%", label: "Traffic Increase" },
      { value: "60", label: "Days to Results" },
    ],
    problem:
      "Describe the client's challenge before working with you. Replace with real content.",
    solution:
      "Describe what you did to solve the problem. Replace with real content.",
    results:
      "Describe the measurable outcomes. Replace with real content.",
    testimonial: {
      quote: "Replace with real testimonial quote.",
      name: "Client Name",
    },
  },
};

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) return {};

  return generatePageMetadata({
    title: `Case Study: ${study.title}`,
    description: study.tagline,
    path: `/case-study/${slug}`,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Portfolio", href: "/portfolio" },
          { name: study.title, href: `/case-study/${slug}` },
        ])}
      />

      {/* Hero */}
      <section className="section section-dark pt-32 pb-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="eyebrow text-[var(--primary)]">Case Study</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
            {study.title}
          </h1>
          <p className="text-gray-300 mt-4">{study.tagline}</p>
          <div className="flex justify-center gap-8 mt-8 text-sm text-gray-400">
            <span>{study.trade}</span>
            <span>{study.location}</span>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section py-12 bg-[var(--light)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            {study.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-4xl font-bold text-[var(--primary)]">
                  {metric.value}
                </p>
                <p className="text-sm text-[var(--text-muted)] mt-1">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution / Results */}
      <section className="section">
        <div className="container mx-auto px-4 max-w-3xl prose">
          <h2>The Challenge</h2>
          <p>{study.problem}</p>

          <h2>Our Solution</h2>
          <p>{study.solution}</p>

          <h2>The Results</h2>
          <p>{study.results}</p>
        </div>
      </section>

      {/* Testimonial */}
      {study.testimonial && (
        <section className="section section-light py-16">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <blockquote className="text-xl italic text-[var(--dark)] mb-4">
              &ldquo;{study.testimonial.quote}&rdquo;
            </blockquote>
            <cite className="text-sm font-bold not-italic">
              — {study.testimonial.name}
            </cite>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-dark section py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want Results Like These?
          </h2>
          <Link href="/contact" className="btn-primary">
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}

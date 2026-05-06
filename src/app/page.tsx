// Homepage — hero, services preview, testimonials, FAQ, CTA, AEO block.
// Fill in content from WEBSITE_COPY.md after scaffolding.

import { siteConfig } from "@/lib/site-config";
import { localBusinessSchema, speakableSchema } from "@/lib/schema";
import JsonLd from "@/app/components/seo/JsonLd";
import AnimateOnScroll from "@/app/components/ui/AnimateOnScroll";
import { PageHero, ServicesGrid, CTABanner } from "@/app/components/sections";

export default function Home() {
  const verticals = [
    {
      title: "Wedding Studios",
      description: "Complete platform for florists, photographers, planners, venues, and dress shops.",
      href: "/products#wedding",
    },
    {
      title: "Market Organizers",
      description: "Farmers market and vendor event management tools for organizers and managers.",
      href: "/products#market",
    },
    {
      title: "Event Coordinators",
      description: "Expo management and bridal show coordination for event professionals.",
      href: "/products#events",
    },
    {
      title: "Coaches & Organizers",
      description: "Tools for pastors, musicians, teams, nonprofits, and community leaders.",
      href: "/products#coaching",
    },
  ];

  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={speakableSchema(`${siteConfig.name} | SaaS platform for vendors and organizers`)} />

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="The Gather Suite"
        title="Your complete vendor toolkit"
        description="One platform for wedding vendors, market managers, event organizers, and community leaders. All the tools you need, built for your industry."
        primaryCTA={{ label: "Explore Products", href: "/products" }}
        secondaryCTA={{ label: "Sign In", href: "/auth/signin" }}
        variant="centered"
        tall
      />

      {/* ── Product Verticals ──────────────────────────────────────── */}
      <section className="section section-light">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <p className="eyebrow">Built For Your Industry</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Specialized Tools for Every Vertical
              </h2>
              <p className="text-lg text-[var(--text-body)] mt-4 max-w-2xl mx-auto">
                Whether you run a wedding business, organize farmers markets, coordinate events, or lead a community—{siteConfig.nameShort} has the right toolkit.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {verticals.map((vertical, idx) => (
              <AnimateOnScroll key={vertical.title} delay={idx * 100}>
                <a
                  href={vertical.href}
                  className="card group hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">
                    {vertical.title}
                  </h3>
                  <p className="text-[var(--text-body)]">{vertical.description}</p>
                  <div className="mt-4 inline-block text-sm font-semibold text-[var(--primary)]">
                    Learn more →
                  </div>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Gather ─────────────────────────────────────────────── */}
      <section className="section section-dark">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <p className="eyebrow text-white/80">Why Choose {siteConfig.nameShort}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Built By Operators. For Operators.
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimateOnScroll>
              <div className="text-center">
                <div className="text-5xl font-bold text-[var(--primary)] mb-3">15+</div>
                <h3 className="text-lg font-bold text-white mb-2">Specialized Apps</h3>
                <p className="text-white/70">
                  One suite, multiple industries. Pick what you need.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="text-center">
                <div className="text-5xl font-bold text-[var(--primary)] mb-3">Founding</div>
                <h3 className="text-lg font-bold text-white mb-2">Member Pricing</h3>
                <p className="text-white/70">
                  Lock in discounted rates forever. No price increases.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="text-center">
                <div className="text-5xl font-bold text-[var(--primary)] mb-3">No Setup</div>
                <h3 className="text-lg font-bold text-white mb-2">Switching Costs</h3>
                <p className="text-white/70">
                  Export your data anytime. You own your business.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <section className="section section-light">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Common Questions
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="space-y-4">
            <details className="faq-item">
              <summary className="font-bold cursor-pointer">What if I only need one app?</summary>
              <div className="faq-answer">
                You can subscribe to individual apps. No bundle required. Pay only for what you use.
              </div>
            </details>

            <details className="faq-item">
              <summary className="font-bold cursor-pointer">Can I add team members?</summary>
              <div className="faq-answer">
                Yes. Each app allows team invites at your plan level. Manage roles and permissions directly from your dashboard.
              </div>
            </details>

            <details className="faq-item">
              <summary className="font-bold cursor-pointer">Do you offer discounts for multiple apps?</summary>
              <div className="faq-answer">
                Founding members get the best price across all apps. Once you lock in a founding rate, it's locked forever—even after the founding period ends.
              </div>
            </details>

            <details className="faq-item">
              <summary className="font-bold cursor-pointer">What if I need help?</summary>
              <div className="faq-answer">
                Email us at {siteConfig.email}. We respond within 24 hours. No bots, no waiting.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ──────────────────────────────────────────────── */}
      <CTABanner
        title="Ready to grow your business?"
        description="Sign in to explore all 15+ apps, or contact us with questions."
        primaryCTA={{ label: "Sign In", href: "/auth/signin" }}
        secondaryCTA={{ label: "Contact Us", href: "/contact" }}
        variant="light"
      />

      {/* ── AEO Brand Block (sr-only, crawlable by AI) ────────────────── */}
      <section className="sr-only">
        <p data-speakable="true">
          {siteConfig.brandDescriptor}
        </p>
        <p data-speakable="true">
          Gather includes specialized tools for wedding vendors (florists, photographers, venues, planners), market organizers, event coordinators, and community leaders. Founding members lock in discounted pricing forever.
        </p>
      </section>
    </>
  );
}

import { siteConfig } from "@/lib/site-config";
import AnimateOnScroll from "@/app/components/ui/AnimateOnScroll";
import { PageHero, CTABanner } from "@/app/components/sections";
import Link from "next/link";

const PRICING_TIERS = [
  {
    name: "Essential",
    description: "Single app or specialized tools",
    foundingPrice: "$19",
    regularPrice: "$29",
    period: "/month",
    apps: ["Marketday Manager", "Homiletics Coach", "Roster", "CurtainCall"],
    features: [
      "1–2 specialized tools",
      "Basic features",
      "Email support",
      "Founding pricing locked forever",
    ],
    cta: "Choose Essential",
  },
  {
    name: "Professional",
    description: "For full vendor studios",
    foundingPrice: "$49",
    regularPrice: "$69",
    period: "/month",
    apps: ["PetalStudio", "VenueStudio", "Lesson Studio", "ExpoStudio"],
    features: [
      "Advanced features",
      "Team members included",
      "White-label options",
      "Priority support",
      "Founding pricing locked forever",
    ],
    highlight: true,
    cta: "Choose Professional",
  },
  {
    name: "Suite Bundle",
    description: "All products at one price",
    foundingPrice: "$99",
    regularPrice: "$149",
    period: "/month",
    apps: ["All 15+ Gather products"],
    features: [
      "All Gather apps included",
      "Premium tier on each",
      "Unlimited team members",
      "Dedicated support",
      "Founding pricing locked forever",
    ],
    cta: "Choose Bundle",
  },
];

export async function generateMetadata() {
  return {
    title: "Gather Pricing | Transparent, Founding Member Pricing",
    description: "Simple, transparent pricing for all Gather products. Lock in founding member rates forever.",
  };
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Simple Pricing"
        title="Transparent, Fair Pricing"
        description="Pick the plan that fits your business. Founding members lock in their rate forever—no price increases."
        variant="centered"
      />

      {/* Pricing Cards */}
      <section className="section section-light">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="text-lg text-[var(--text-body)]">
              Lock in founding member pricing forever. After we reach our first 100 customers, prices increase—your rate stays the same.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING_TIERS.map((tier, idx) => (
              <AnimateOnScroll key={tier.name} delay={idx * 100}>
                <div
                  className={`card flex flex-col h-full transition-all ${
                    tier.highlight
                      ? "ring-2 ring-[var(--primary)] shadow-lg scale-105"
                      : ""
                  }`}
                >
                  {tier.highlight && (
                    <div className="mb-4 inline-block">
                      <span className="text-xs font-bold uppercase tracking-widest text-[var(--primary)] bg-[var(--primary)]/10 px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-[var(--text-body)] mb-6">{tier.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-[var(--primary)]">
                        {tier.foundingPrice}
                      </span>
                      <span className="text-[var(--text-body)]">{tier.period}</span>
                    </div>
                    <p className="text-sm text-[var(--text-body)] mt-2">
                      Regular price: <span className="line-through">{tier.regularPrice}{tier.period}</span>
                    </p>
                  </div>

                  <div className="mb-8">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-3">
                      Includes
                    </p>
                    <ul className="space-y-3">
                      {tier.apps.map((app) => (
                        <li key={app} className="text-sm text-[var(--text-body)]">
                          <span className="mr-2 text-[var(--primary)]">✓</span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8 border-t border-gray-200 pt-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-body)] mb-3">
                      Features
                    </p>
                    <ul className="space-y-2">
                      {tier.features.map((feature) => (
                        <li key={feature} className="text-sm text-[var(--text-body)] flex items-start">
                          <span className="mr-2 text-[var(--primary)]">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Link
                      href="/auth/signin"
                      className={`block w-full text-center py-3 px-4 font-semibold rounded transition-colors ${
                        tier.highlight
                          ? "btn-primary"
                          : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                      }`}
                    >
                      {tier.cta}
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-dark">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Pricing Questions?
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="space-y-4">
            <details className="faq-item">
              <summary className="font-bold cursor-pointer text-white">
                What's a "founding member"?
              </summary>
              <div className="faq-answer text-white/80">
                Founding members are the first customers who lock in an early price. Once we hit 100 paying customers, new pricing goes into effect. Your founding rate is guaranteed forever, even after you cancel and rejoin.
              </div>
            </details>

            <details className="faq-item">
              <summary className="font-bold cursor-pointer text-white">
                Can I switch tiers later?
              </summary>
              <div className="faq-answer text-white/80">
                Yes. Upgrade or downgrade anytime. Your founding rate stays the same. If you downgrade from Professional to Essential, you keep the founding price for whatever tier you pick.
              </div>
            </details>

            <details className="faq-item">
              <summary className="font-bold cursor-pointer text-white">
                Can I add team members?
              </summary>
              <div className="faq-answer text-white/80">
                Yes. Essential and Professional tiers include team member invites. You can add as many team members as you need at your tier level. Suite Bundle includes unlimited team members on all products.
              </div>
            </details>

            <details className="faq-item">
              <summary className="font-bold cursor-pointer text-white">
                What if I only need one app?
              </summary>
              <div className="faq-answer text-white/80">
                Pick the tier that matches your app. For example, if you only need PetalStudio, choose Professional ($49/month founding rate). You don't need the Suite Bundle unless you want access to all products.
              </div>
            </details>

            <details className="faq-item">
              <summary className="font-bold cursor-pointer text-white">
                Is there a contract or commitment?
              </summary>
              <div className="faq-answer text-white/80">
                No contracts. Cancel anytime, no penalties. If you cancel, your data is yours—export it whenever you want. Reactivate your account later and keep your founding rate.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to lock in founding rates?"
        description="Sign up today and your price is locked forever. Add team members, switch between products, and grow without worrying about price increases."
        primaryCTA={{ label: "Get Started", href: "/auth/signin" }}
        secondaryCTA={{ label: "Contact Sales", href: "/contact" }}
        variant="light"
      />
    </>
  );
}

import { generatePageMetadata } from "@/lib/metadata";
import { faqPageSchema, serviceSchema } from "@/lib/schema";
import JsonLd from "@/app/components/seo/JsonLd";
import AnimateOnScroll from "@/app/components/ui/AnimateOnScroll";
import {
  PageHero,
  ProcessSteps,
  FAQ,
  CTABanner,
} from "@/app/components/sections";

export const metadata = generatePageMetadata({
  title: "Plainspoken Blueprint — Message Coaching for Small Business",
  description:
    "Stop losing deals to a confusing pitch. The Plainspoken Blueprint gives you one clear sentence — and a full website built on it. Based in Northeast Alabama, working with businesses everywhere.",
  path: "/blueprint",
});

const blueprintFaqs = [
  {
    question: "What exactly is a Blueprint Session?",
    answer:
      "It's a 90-minute working session — not a lecture. We go through your business, your customer, and your message together using a structured framework. You leave with one document: what you do, who it's for, and exactly how to say it.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Most people use their new one-liner at their next networking event and report immediately different conversations. The website takes longer — but the message works the first time you use it.",
  },
  {
    question: "I'm not good with words. Will this still work?",
    answer:
      "That's exactly who this is for. Clarity is a skill, not a gift — and it's one we build together in the session.",
  },
  {
    question: "What's included in the Blueprint + Kickstart?",
    answer:
      "The Blueprint Session, plus a clean, fast 5-page website built on your message from day one. Home, About, Services, FAQ, and Contact — SEO-ready, mobile-first, deployed on a custom domain.",
  },
  {
    question: "Do I need to be local to work with you?",
    answer:
      "No. Blueprint Sessions are video calls. Matt is based in Northeast Alabama and works with clients across the country.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Name the Villain",
    description:
      "Every good story has a villain — and so does yours. We name the real problem your customer faces so your message lands differently.",
  },
  {
    step: "2",
    title: "Position You as the Guide",
    description:
      "You're not the hero. Your customer is. You're the guide with the plan. We build language that puts you in that role — trusted, capable, approachable.",
  },
  {
    step: "3",
    title: "Write the One-Liner",
    description:
      "One sentence. What you do, who it's for, and what it costs them to wait. You'll use this in your pitch, on your site, and at every networking event.",
  },
  {
    step: "4",
    title: "Build the Document",
    description:
      "Hero statement, tagline, 3-step plan, CTAs — the full Blueprint document you own and use forever. Two rounds of revisions included.",
  },
];

export default function BlueprintPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(blueprintFaqs)} />
      <JsonLd
        data={serviceSchema({
          name: "Plainspoken Blueprint Session",
          description:
            "90-minute messaging clarity session for small business owners. Walk away with a one-page Blueprint document: your hero statement, tagline, villain framing, guide positioning, and CTA language.",
          url: "/blueprint",
        })}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <PageHero
        variant="centered"
        dark
        eyebrow="Plainspoken Blueprint"
        title="Stop losing deals to a confusing pitch."
        description="Most small businesses lose customers before they say a word — because their message is unclear. The Plainspoken Blueprint gives you one sentence that closes deals, and a website built on it."
        primaryCTA={{ label: "Book a Blueprint Session", href: "mailto:matt@plainspokenblueprint.com" }}
        secondaryCTA={{ label: "See how it works", href: "#how-it-works" }}
      />

      {/* ── The Problem ──────────────────────────────────────────────────── */}
      <section className="section bg-[var(--light)]">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <AnimateOnScroll>
            <p className="eyebrow text-[var(--primary)] mb-4">The Gap</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              You're great at what you do. You just can't explain it.
            </h2>
            <p className="text-[var(--text-body)] text-lg leading-relaxed">
              Most business owners know their work. They don't know how to talk about it — not in a way that makes strangers care. The Plainspoken Blueprint fixes that in one session. You leave with language that works, a document you own, and confidence you haven't had since you started.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="section">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <p className="eyebrow text-[var(--primary)] mb-2">The Framework</p>
              <h2 className="text-3xl font-bold">How the Blueprint works</h2>
            </div>
          </AnimateOnScroll>
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────────────── */}
      <section id="pricing" className="section bg-[var(--light)]">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <p className="eyebrow text-[var(--primary)] mb-2">Services</p>
              <h2 className="text-3xl font-bold">Two ways to work together</h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimateOnScroll>
              <div className="card p-8 border border-[var(--light-grey)] rounded-[var(--card-radius)]">
                <p className="eyebrow text-[var(--primary)] mb-2">Blueprint Session</p>
                <h3 className="text-2xl font-bold mb-1">The message. Nothing else.</h3>
                <p className="text-[var(--text-muted)] mb-6">Book to discuss pricing</p>
                <ul className="space-y-3 mb-8">
                  {[
                    "90-minute working session (video call)",
                    "One-page Blueprint document",
                    "Hero statement + tagline",
                    "Villain/problem framing",
                    "Guide positioning language",
                    "3-step plan + primary CTA",
                    "Two rounds of revisions",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[var(--text-body)]">
                      <span className="text-[var(--primary)] font-bold mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="mailto:matt@plainspokenblueprint.com" className="btn-outline w-full text-center">
                  Book a Session
                </a>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="card p-8 border-2 border-[var(--primary)] rounded-[var(--card-radius)] relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--primary)] text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most popular
                </div>
                <p className="eyebrow text-[var(--primary)] mb-2">Blueprint + Kickstart</p>
                <h3 className="text-2xl font-bold mb-1">Message + a site that says it.</h3>
                <p className="text-[var(--text-muted)] mb-6">$495 · Care plan from $49/mo</p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Everything in Blueprint Session",
                    "Up to 5 pages (Home, About, Services, FAQ, Contact)",
                    "Mobile-first responsive design",
                    "Contact form + Google Analytics",
                    "SEO metadata + JSON-LD schema",
                    "Vercel deploy + custom domain setup",
                    "Copy pulled directly from your Blueprint",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[var(--text-body)]">
                      <span className="text-[var(--primary)] font-bold mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="mailto:matt@plainspokenblueprint.com" className="btn-primary w-full text-center">
                  Get Started — $495
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Testimonial ──────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimateOnScroll>
            <blockquote className="text-center">
              <p className="text-2xl font-medium italic text-[var(--dark)] mb-6 leading-relaxed">
                &ldquo;The Plainspoken Blueprint is what I wish I&rsquo;d had at the start. One page. One clear message. Everything else follows.&rdquo;
              </p>
              <cite className="text-[var(--text-muted)] not-italic">— Matt Headley, Gather Studio</cite>
            </blockquote>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <FAQ
        eyebrow="Questions"
        title="What people ask before booking"
        items={blueprintFaqs}
        renderSchema={false}
      />

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <CTABanner
        eyebrow="Ready?"
        title="Book a Blueprint Session"
        description="One sentence that closes deals. A website built on it. Let's build your message."
        primaryCTA={{ label: "Email Matt", href: "mailto:matt@plainspokenblueprint.com" }}
        secondaryCTA={{ label: "Back to Gather Studio", href: "/" }}
        variant="dark"
      />
    </>
  );
}

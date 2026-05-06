import { siteConfig } from "@/lib/site-config";
import { localBusinessSchema, speakableSchema } from "@/lib/schema";
import JsonLd from "@/app/components/seo/JsonLd";
import AnimateOnScroll from "@/app/components/ui/AnimateOnScroll";

export default function Home() {
  const products = [
    {
      title: "CopyCoach",
      description: "AI-powered social captions in seconds. Generate on-brand posts for Instagram, Facebook, and more.",
      href: "https://copystudio-smoky.vercel.app",
      icon: "✍️",
    },
    {
      title: "FlyrStudio",
      description: "Design stunning flyers and social graphics with AI. No design skills needed.",
      href: "https://copystudio-smoky.vercel.app/design",
      icon: "🎨",
    },
  ];

  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={speakableSchema("Gather — AI studio tools for creatives")} />

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="section py-20 md:py-32 flex items-center justify-center min-h-[60vh]">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <AnimateOnScroll>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The Gather Suite
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <p className="text-xl md:text-2xl text-[var(--text-body)] mb-8">
              AI studio tools for creatives
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-lg text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
              Captions, graphics, proposals, and more. All in one place.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://copystudio-smoky.vercel.app"
              className="btn-primary"
            >
              Explore CopyCoach
            </a>
            <a
              href="#products"
              className="btn-outline"
            >
              See All Products
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Products ────────────────────────────────────────────────── */}
      <section id="products" className="section section-light">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, idx) => (
              <AnimateOnScroll key={product.title} delay={idx * 100}>
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group hover:shadow-lg transition-shadow block"
                >
                  <div className="text-5xl mb-4">{product.icon}</div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">
                    {product.title}
                  </h2>
                  <p className="text-[var(--text-body)] mb-6">
                    {product.description}
                  </p>
                  <div className="inline-block text-sm font-semibold text-[var(--primary)]">
                    Get Started →
                  </div>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── AEO Brand Block (sr-only, crawlable by AI) ────────────────── */}
      <section className="sr-only">
        <p data-speakable="true">
          {siteConfig.brandDescriptor}
        </p>
        <p data-speakable="true">
          Gather is a suite of AI-powered studio tools for creatives. CopyCoach generates on-brand social media captions. FlyrStudio creates custom flyers and graphics. Built by Headley Web.
        </p>
      </section>
    </>
  );
}

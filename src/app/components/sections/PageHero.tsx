// Page hero section — centered, split (image + text), or minimal (inner pages).
// Uses .animate-hero + --hero-delay for staggered entrance.

import Link from "next/link";
import Image from "next/image";
import type { CTALink } from "./types";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCTA?: CTALink;
  secondaryCTA?: CTALink;
  variant?: "centered" | "split" | "minimal";
  image?: { src: string; alt: string };
  dark?: boolean;
  tall?: boolean;
}

function HeroCTA({
  cta,
  className,
}: {
  cta: CTALink;
  className: string;
}) {
  const isExternal = cta.href.startsWith("http") || cta.href.startsWith("tel:");
  if (isExternal) {
    return (
      <a href={cta.href} className={className}>
        {cta.label}
      </a>
    );
  }
  return (
    <Link href={cta.href} className={className}>
      {cta.label}
    </Link>
  );
}

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryCTA,
  secondaryCTA,
  variant = "centered",
  image,
  dark = true,
  tall = false,
}: PageHeroProps) {
  const sectionClass = dark ? "section-dark" : "";
  const bgClass = dark ? "bg-[var(--dark)]" : "bg-[var(--light)]";
  const descColor = dark ? "text-gray-300" : "text-[var(--text-body)]";
  const secondaryBtnClass = dark
    ? "btn-outline-white"
    : "btn-outline";

  // Minimal variant — compact inner page hero (services, about, contact, etc.)
  if (variant === "minimal") {
    return (
      <section className={`section ${sectionClass} pt-32 pb-16`}>
        <div className="container mx-auto px-4 text-center">
          {eyebrow && (
            <p className="eyebrow text-[var(--primary)]">{eyebrow}</p>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mt-4">{title}</h1>
          {description && (
            <p className={`${descColor} mt-4`}>{description}</p>
          )}
        </div>
      </section>
    );
  }

  // Split variant — text left, image right
  if (variant === "split" && image) {
    return (
      <section
        className={`relative ${tall ? "min-h-[90vh]" : "min-h-[70vh]"} flex items-center ${sectionClass} overflow-hidden`}
      >
        <div className={`absolute inset-0 ${bgClass}`} />
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              {eyebrow && (
                <p
                  className="eyebrow text-[var(--primary)] animate-hero"
                  style={{ "--hero-delay": "0ms" } as React.CSSProperties}
                >
                  {eyebrow}
                </p>
              )}
              <h1
                className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-hero"
                style={{ "--hero-delay": "150ms" } as React.CSSProperties}
              >
                {title}
              </h1>
              {description && (
                <p
                  className={`text-lg ${descColor} mb-8 animate-hero`}
                  data-speakable="true"
                  style={{ "--hero-delay": "300ms" } as React.CSSProperties}
                >
                  {description}
                </p>
              )}
              {(primaryCTA || secondaryCTA) && (
                <div
                  className="flex flex-col sm:flex-row gap-4 animate-hero"
                  style={{ "--hero-delay": "450ms" } as React.CSSProperties}
                >
                  {primaryCTA && (
                    <HeroCTA cta={primaryCTA} className="btn-primary" />
                  )}
                  {secondaryCTA && (
                    <HeroCTA cta={secondaryCTA} className={secondaryBtnClass} />
                  )}
                </div>
              )}
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden animate-hero"
              style={{ "--hero-delay": "300ms" } as React.CSSProperties}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Centered variant (default) — text-only center
  return (
    <section
      className={`relative ${tall ? "min-h-[90vh]" : "min-h-[70vh]"} flex items-center justify-center ${sectionClass} overflow-hidden`}
    >
      <div className={`absolute inset-0 ${bgClass}`} />
      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
        {eyebrow && (
          <p
            className="eyebrow text-[var(--primary)] animate-hero"
            style={{ "--hero-delay": "0ms" } as React.CSSProperties}
          >
            {eyebrow}
          </p>
        )}
        <h1
          className="text-4xl md:text-6xl font-bold mt-4 mb-6 animate-hero"
          style={{ "--hero-delay": "150ms" } as React.CSSProperties}
        >
          {title}
        </h1>
        {description && (
          <p
            className={`text-lg ${descColor} mb-8 animate-hero`}
            data-speakable="true"
            style={{ "--hero-delay": "300ms" } as React.CSSProperties}
          >
            {description}
          </p>
        )}
        {(primaryCTA || secondaryCTA) && (
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-hero"
            style={{ "--hero-delay": "450ms" } as React.CSSProperties}
          >
            {primaryCTA && (
              <HeroCTA cta={primaryCTA} className="btn-primary" />
            )}
            {secondaryCTA && (
              <HeroCTA cta={secondaryCTA} className={secondaryBtnClass} />
            )}
          </div>
        )}
      </div>
    </section>
  );
}

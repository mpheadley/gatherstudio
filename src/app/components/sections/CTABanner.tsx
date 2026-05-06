// Call-to-action banner — dark or light background with heading + CTAs.

import Link from "next/link";
import AnimateOnScroll from "@/app/components/ui/AnimateOnScroll";
import type { CTALink } from "./types";

interface CTABannerProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCTA?: CTALink;
  secondaryCTA?: CTALink;
  variant?: "dark" | "light";
}

function BannerCTA({
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

export default function CTABanner({
  eyebrow,
  title,
  description,
  primaryCTA,
  secondaryCTA,
  variant = "dark",
}: CTABannerProps) {
  const isDark = variant === "dark";
  const sectionClass = isDark ? "section-dark section py-16" : "section section-light py-16";
  const descClass = isDark ? "text-gray-300" : "text-[var(--text-body)]";
  const secondaryBtnClass = isDark ? "btn-outline-white" : "btn-outline";

  return (
    <section className={sectionClass}>
      <div className="container mx-auto px-4 text-center">
        <AnimateOnScroll>
          {eyebrow && <p className="eyebrow text-[var(--primary)]">{eyebrow}</p>}
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          {description && (
            <p className={`${descClass} mb-8 max-w-xl mx-auto`}>
              {description}
            </p>
          )}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryCTA && (
                <BannerCTA cta={primaryCTA} className="btn-primary" />
              )}
              {secondaryCTA && (
                <BannerCTA cta={secondaryCTA} className={secondaryBtnClass} />
              )}
            </div>
          )}
        </AnimateOnScroll>
      </div>
    </section>
  );
}

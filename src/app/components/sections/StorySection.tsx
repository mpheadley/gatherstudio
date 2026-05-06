// Story / about section — image + text side by side.
// Use reverse prop to flip image to left side.

import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/app/components/ui/AnimateOnScroll";
import type { CTALink } from "./types";

interface StorySectionProps {
  image: { src: string; alt: string };
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  cta?: CTALink;
  reverse?: boolean;
  aspectRatio?: "landscape" | "portrait";
}

export default function StorySection({
  image,
  eyebrow,
  title,
  paragraphs,
  cta,
  reverse = false,
  aspectRatio = "landscape",
}: StorySectionProps) {
  const aspect = aspectRatio === "portrait" ? "aspect-[4/5]" : "aspect-[4/3]";

  return (
    <section className="section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <AnimateOnScroll className={reverse ? "md:order-2" : ""}>
            <div className={`relative ${aspect} rounded-lg overflow-hidden`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </AnimateOnScroll>

          {/* Text */}
          <AnimateOnScroll delay={150} className={reverse ? "md:order-1" : ""}>
            <div>
              {eyebrow && (
                <p className="eyebrow text-[var(--primary)]">{eyebrow}</p>
              )}
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                {title}
              </h2>
              <div className="space-y-4 text-[var(--text-body)]">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {cta && (
                <Link
                  href={cta.href}
                  className="btn-primary inline-block mt-6"
                >
                  {cta.label}
                </Link>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

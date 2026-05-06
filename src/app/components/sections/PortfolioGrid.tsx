// Portfolio / work samples grid — image cards with title + description.

import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/app/components/ui/AnimateOnScroll";
import SectionHeader from "./SectionHeader";

interface PortfolioItem {
  image: { src: string; alt: string };
  title: string;
  description?: string;
  href?: string;
}

interface PortfolioGridProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items: PortfolioItem[];
  columns?: 2 | 3;
}

export default function PortfolioGrid({
  eyebrow,
  title,
  subtitle,
  items,
  columns = 3,
}: PortfolioGridProps) {
  const colClass = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3";

  return (
    <section className="section">
      <div className="container mx-auto px-4">
        {title && (
          <AnimateOnScroll>
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              subtitle={subtitle}
            />
          </AnimateOnScroll>
        )}
        <div className={`grid grid-cols-1 ${colClass} gap-8`}>
          {items.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 80}>
              <div className="card overflow-hidden p-0">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    className="object-cover"
                    sizes={`(max-width: 768px) 100vw, ${columns === 2 ? "50vw" : "33vw"}`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  {item.description && (
                    <p className="text-[var(--text-muted)] text-sm">
                      {item.description}
                    </p>
                  )}
                  {item.href && (
                    <Link
                      href={item.href}
                      className="text-[var(--primary)] text-sm font-medium mt-3 inline-block hover:underline"
                    >
                      View Project &rarr;
                    </Link>
                  )}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

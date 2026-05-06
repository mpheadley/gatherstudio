// Testimonial blockquotes — 1/2/3 column grid.

import AnimateOnScroll from "@/app/components/ui/AnimateOnScroll";
import SectionHeader from "./SectionHeader";

interface TestimonialItem {
  quote: string;
  name: string;
  role?: string;
  location?: string;
}

interface TestimonialsProps {
  eyebrow?: string;
  title?: string;
  items: TestimonialItem[];
  columns?: 1 | 2 | 3;
}

export default function Testimonials({
  eyebrow,
  title,
  items,
  columns,
}: TestimonialsProps) {
  const cols = columns ?? (items.length >= 3 ? 3 : 2);
  const colClass =
    cols === 1
      ? "max-w-2xl mx-auto"
      : cols === 2
        ? "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        : "grid grid-cols-1 md:grid-cols-3 gap-8";

  return (
    <section className="section section-light">
      <div className="container mx-auto px-4">
        {title && (
          <AnimateOnScroll>
            <SectionHeader eyebrow={eyebrow} title={title} />
          </AnimateOnScroll>
        )}
        <div className={colClass}>
          {items.map((item, i) => (
            <AnimateOnScroll key={item.name} delay={i * 100}>
              <blockquote className="card">
                <p className="text-[var(--text-body)] italic mb-4">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <cite className="text-sm font-bold text-[var(--dark)] not-italic block">
                  — {item.name}
                </cite>
                {(item.role || item.location) && (
                  <span className="text-xs text-[var(--text-muted)]">
                    {[item.role, item.location].filter(Boolean).join(", ")}
                  </span>
                )}
              </blockquote>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

// Services card grid — 2/3/4 column layout with optional icons and feature lists.

import AnimateOnScroll from "@/app/components/ui/AnimateOnScroll";
import SectionHeader from "./SectionHeader";

interface ServiceItem {
  icon?: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
}

interface ServicesGridProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  services: ServiceItem[];
  columns?: 2 | 3 | 4;
}

export default function ServicesGrid({
  eyebrow,
  title,
  subtitle,
  services,
  columns = 3,
}: ServicesGridProps) {
  const colClass =
    columns === 2
      ? "md:grid-cols-2"
      : columns === 4
        ? "md:grid-cols-2 lg:grid-cols-4"
        : "md:grid-cols-3";

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
          {services.map((service, i) => (
            <AnimateOnScroll key={service.title} delay={i * 80}>
              <div className="card text-center">
                {service.icon && (
                  <div className="flex justify-center mb-4 text-[var(--primary)]">
                    {service.icon}
                  </div>
                )}
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-[var(--text-muted)]">
                  {service.description}
                </p>
                {service.features && service.features.length > 0 && (
                  <ul className="mt-4 space-y-2 text-left text-sm text-[var(--text-body)]">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="text-[var(--primary)] mt-0.5">&#10003;</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

// Values / why-us card grid — icon + title + description.

import AnimateOnScroll from "@/app/components/ui/AnimateOnScroll";
import SectionHeader from "./SectionHeader";

interface ValueItem {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

interface ValuesGridProps {
  eyebrow?: string;
  title?: string;
  values: ValueItem[];
  columns?: 2 | 3 | 4;
}

export default function ValuesGrid({
  eyebrow,
  title,
  values,
  columns = 3,
}: ValuesGridProps) {
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
            <SectionHeader eyebrow={eyebrow} title={title} />
          </AnimateOnScroll>
        )}
        <div className={`grid grid-cols-1 ${colClass} gap-8`}>
          {values.map((value, i) => (
            <AnimateOnScroll key={value.title} delay={i * 80}>
              <div className="card text-center">
                {value.icon && (
                  <div className="flex justify-center mb-4 text-[var(--primary)]">
                    {value.icon}
                  </div>
                )}
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-[var(--text-muted)]">{value.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

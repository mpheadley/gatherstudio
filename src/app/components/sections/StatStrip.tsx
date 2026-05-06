// Horizontal stats bar — large numbers with labels.

import AnimateOnScroll from "@/app/components/ui/AnimateOnScroll";

interface StatItem {
  value: string;
  label: string;
}

interface StatStripProps {
  stats: StatItem[];
  variant?: "dark" | "light";
}

export default function StatStrip({
  stats,
  variant = "dark",
}: StatStripProps) {
  const isDark = variant === "dark";
  const sectionClass = isDark ? "section-dark py-12" : "section-light py-12";
  const valueColor = isDark ? "text-[var(--primary)]" : "text-[var(--primary)]";
  const labelColor = isDark ? "text-gray-300" : "text-[var(--text-muted)]";

  return (
    <section className={sectionClass}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 80}>
              <div>
                <p className={`text-4xl md:text-5xl font-bold ${valueColor}`}>
                  {stat.value}
                </p>
                <p className={`text-sm mt-2 ${labelColor}`}>{stat.label}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

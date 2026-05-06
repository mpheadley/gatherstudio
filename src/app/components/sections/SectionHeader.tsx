// Reusable section header — eyebrow + title + subtitle.
// Does NOT self-animate. Parent wraps in <AnimateOnScroll> for flexibility.

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClass} mb-12`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-bold mt-2">{title}</h2>
      {subtitle && (
        <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

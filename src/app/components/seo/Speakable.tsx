// Speakable wrapper — marks content for voice assistants and AI citation.
// Renders children with data-speakable="true" so SpeakableSpecification
// schema can target them via cssSelector.

interface SpeakableProps {
  children: React.ReactNode;
  as?: "p" | "div" | "span" | "section";
  className?: string;
}

export default function Speakable({
  children,
  as: Tag = "p",
  className = "",
}: SpeakableProps) {
  return (
    <Tag data-speakable="true" className={className || undefined}>
      {children}
    </Tag>
  );
}

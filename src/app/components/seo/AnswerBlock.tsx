// Answer-first content block for AEO (Answer Engine Optimization).
// Renders a visible Q&A section with data-speakable attributes for AI extraction.
// Pair with faqPageSchema() from schema.ts for matching FAQPage JSON-LD.

import AnimateOnScroll from "@/app/components/ui/AnimateOnScroll";

interface AnswerBlockProps {
  question: string;
  answer: string;
}

export default function AnswerBlock({ question, answer }: AnswerBlockProps) {
  return (
    <AnimateOnScroll>
      <div>
        <h3 className="text-xl font-bold mb-3" data-speakable="true">
          {question}
        </h3>
        <p className="text-[var(--text-body)] leading-relaxed" data-speakable="true">
          {answer}
        </p>
      </div>
    </AnimateOnScroll>
  );
}

interface AnswerBlockSectionProps {
  eyebrow?: string;
  heading?: string;
  faqs: { question: string; answer: string }[];
}

export function AnswerBlockSection({
  eyebrow = "Common Questions",
  heading = "Straight Answers",
  faqs,
}: AnswerBlockSectionProps) {
  return (
    <section className="section">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimateOnScroll>
          <p className="eyebrow text-center">{eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {heading}
          </h2>
        </AnimateOnScroll>
        <div className="space-y-12">
          {faqs.map((faq) => (
            <AnswerBlock key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

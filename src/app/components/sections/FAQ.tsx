// FAQ accordion — native <details>/<summary>, no client JS needed.
// Auto-generates FAQPage JSON-LD schema by default.

import AnimateOnScroll from "@/app/components/ui/AnimateOnScroll";
import JsonLd from "@/app/components/seo/JsonLd";
import { faqPageSchema } from "@/lib/schema";
import SectionHeader from "./SectionHeader";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  eyebrow?: string;
  title?: string;
  items: FAQItem[];
  renderSchema?: boolean;
}

export default function FAQ({
  eyebrow,
  title,
  items,
  renderSchema = true,
}: FAQProps) {
  return (
    <section className="section">
      <div className="container mx-auto px-4 max-w-3xl">
        {renderSchema && <JsonLd data={faqPageSchema(items)} />}
        {title && (
          <AnimateOnScroll>
            <SectionHeader eyebrow={eyebrow} title={title} />
          </AnimateOnScroll>
        )}
        <div className="space-y-4">
          {items.map((item, i) => (
            <AnimateOnScroll key={item.question} delay={i * 60}>
              <details className="faq-item">
                <summary>{item.question}</summary>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </details>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

// Process steps — numbered grid or vertical timeline.

import AnimateOnScroll from "@/app/components/ui/AnimateOnScroll";
import SectionHeader from "./SectionHeader";

interface Step {
  step: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  eyebrow?: string;
  title?: string;
  steps: Step[];
  variant?: "grid" | "timeline";
}

function StepCircle({ step }: { step: string }) {
  return (
    <div className="w-12 h-12 rounded-full bg-[var(--primary)] text-[var(--primary-text)] flex items-center justify-center font-bold text-lg shrink-0">
      {step}
    </div>
  );
}

export default function ProcessSteps({
  eyebrow,
  title,
  steps,
  variant = "grid",
}: ProcessStepsProps) {
  if (variant === "timeline") {
    return (
      <section className="section">
        <div className="container mx-auto px-4 max-w-2xl">
          {title && (
            <AnimateOnScroll>
              <SectionHeader eyebrow={eyebrow} title={title} />
            </AnimateOnScroll>
          )}
          <div className="flex flex-col gap-0">
            {steps.map((s, i) => (
              <AnimateOnScroll key={s.step} delay={i * 100}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <StepCircle step={s.step} />
                    {i < steps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-[var(--primary-tint)] my-2" />
                    )}
                  </div>
                  <div className="pb-10">
                    <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                    <p className="text-[var(--text-muted)]">{s.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Grid variant (default)
  return (
    <section className="section">
      <div className="container mx-auto px-4">
        {title && (
          <AnimateOnScroll>
            <SectionHeader eyebrow={eyebrow} title={title} />
          </AnimateOnScroll>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <AnimateOnScroll key={s.step} delay={i * 80}>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <StepCircle step={s.step} />
                </div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-[var(--text-muted)]">{s.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

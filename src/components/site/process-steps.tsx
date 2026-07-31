import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export type ProcessStepDetail = {
  step: string;
  title: string;
  icon: LucideIcon;
  description: string;
  items: string[];
};

export function ProcessSteps({ steps }: { steps: ProcessStepDetail[] }) {
  return (
    <ol className="relative">
      {steps.map((s, i) => {
        const isLast = i === steps.length - 1;
        return (
          <Reveal as="li" key={s.step} delay={i * 0.06} className="relative flex gap-5 pb-10">
            {!isLast && (
              <span
                aria-hidden="true"
                className="absolute top-12 left-6 h-[calc(100%-2.5rem)] w-0.5 -translate-x-1/2 bg-border"
              />
            )}
            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white shadow-sm">
              <s.icon className="h-5 w-5" aria-hidden="true" />
            </div>

            <div className="flex-1 rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="text-xs font-semibold tracking-wide text-brand-primary uppercase">
                {s.step}
              </p>
              <h3 className="mt-1 font-heading text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-medium text-brand-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        );
      })}
    </ol>
  );
}

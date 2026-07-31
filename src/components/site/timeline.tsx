import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export type TimelineStep = {
  step: string;
  title: string;
  description: string;
  meta?: string;
  icon?: LucideIcon;
};

export function Timeline({
  steps,
  currentStep,
  className,
}: {
  steps: TimelineStep[];
  currentStep?: number;
  className?: string;
}) {
  return (
    <ol
      className={cn(
        "relative flex flex-col gap-0 lg:flex-row lg:items-stretch lg:gap-0",
        className
      )}
    >
      {steps.map((s, i) => {
        const isCurrent = currentStep === i + 1;
        const isLast = i === steps.length - 1;
        return (
          <Reveal
            as="li"
            key={s.step}
            delay={i * 0.08}
            className="relative flex flex-1 gap-4 pb-10 lg:flex-col lg:gap-3 lg:pb-0"
          >
            {/* connector */}
            {!isLast && (
              <span
                aria-hidden="true"
                className="absolute top-5 left-5 h-[calc(100%-1.25rem)] w-0.5 -translate-x-1/2 bg-border lg:top-5 lg:left-[calc(50%+1.25rem)] lg:h-0.5 lg:w-[calc(100%-2.5rem)] lg:translate-x-0"
              />
            )}
            <div
              className={cn(
                "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm lg:mx-auto",
                isCurrent ? "bg-brand-accent" : "bg-brand-primary"
              )}
            >
              {s.icon ? (
                <s.icon className="h-5 w-5" aria-hidden="true" />
              ) : (
                i + 1
              )}
            </div>
            <div className="flex-1 lg:px-2 lg:text-center">
              <p className="text-xs font-semibold tracking-wide text-brand-primary uppercase">
                {s.step}
                {s.meta && (
                  <span className="ml-2 font-normal text-muted-foreground normal-case">
                    {s.meta}
                  </span>
                )}
              </p>
              <h3 className="mt-1 font-heading text-base font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </div>
          </Reveal>
        );
      })}
    </ol>
  );
}

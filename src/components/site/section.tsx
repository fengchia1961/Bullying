import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  muted = false,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  muted?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={cn(muted && "bg-muted/40")}>
      <div
        className={cn(
          "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && (
        <p className="text-sm font-semibold tracking-wide text-brand-primary uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-heading text-2xl font-bold text-foreground sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}

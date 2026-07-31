import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function InfoCard({
  icon: Icon,
  title,
  description,
  href,
  linkLabel = "閱讀更多",
  className,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  className?: string;
}) {
  const content = (
    <div
      className={cn(
        "group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        href && "cursor-pointer",
        className
      )}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="font-heading text-lg font-semibold text-foreground">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      {href && (
        <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-brand-primary">
          {linkLabel}
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full focus-visible:outline-none">
        {content}
      </Link>
    );
  }

  return content;
}

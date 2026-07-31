import { AlertTriangle, ShieldOff, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  warning: {
    icon: AlertTriangle,
    wrapper: "border-brand-warning/30 bg-brand-warning/10",
    iconWrap: "bg-brand-warning/20 text-brand-warning",
  },
  danger: {
    icon: ShieldOff,
    wrapper: "border-brand-danger/30 bg-brand-danger/10",
    iconWrap: "bg-brand-danger/20 text-brand-danger",
  },
} as const;

export function AlertBox({
  variant = "warning",
  title,
  items,
  icon,
  className,
}: {
  variant?: keyof typeof variants;
  title: string;
  items?: string[];
  icon?: LucideIcon;
  className?: string;
}) {
  const style = variants[variant];
  const Icon = icon ?? style.icon;

  return (
    <div
      className={cn(
        "flex items-start gap-4 rounded-2xl border p-6",
        style.wrapper,
        className
      )}
    >
      <span
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
          style.iconWrap
        )}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <p className="font-heading text-base leading-relaxed font-semibold text-foreground">
          {title}
        </p>
        {items && items.length > 0 && (
          <ul className="mt-2 flex flex-wrap gap-2">
            {items.map((item) => (
              <li
                key={item}
                className="rounded-full bg-card px-3 py-1 text-sm font-medium text-foreground ring-1 ring-border"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

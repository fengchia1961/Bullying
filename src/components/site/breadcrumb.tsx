import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export type BreadcrumbItem = {
  title: string;
  href?: string;
};

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="breadcrumb" className="text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li className="flex items-center gap-1.5">
          <Link
            href="/"
            className="flex items-center gap-1 transition-colors hover:text-brand-primary"
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            首頁
          </Link>
        </li>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.title} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-brand-primary"
                >
                  {item.title}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className="font-medium text-foreground"
                >
                  {item.title}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

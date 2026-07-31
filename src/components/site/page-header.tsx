import { Breadcrumb, type BreadcrumbItem } from "@/components/site/breadcrumb";

export function PageHeader({
  title,
  description,
  breadcrumb,
}: {
  title: string;
  description: string;
  breadcrumb: BreadcrumbItem[];
}) {
  return (
    <div className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <Breadcrumb items={breadcrumb} />
        <h1 className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}

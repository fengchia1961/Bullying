import type { Metadata } from "next";
import { ExternalLink, Landmark, ScrollText, ShieldAlert, Stethoscope } from "lucide-react";

import { PageHeader } from "@/components/site/page-header";
import { Section } from "@/components/site/section";
import { officialResources } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "官方資源｜職場霸凌防治指導手冊",
  description: "勞動部、職業安全衛生署等職場霸凌防治相關官方資源連結。",
};

const icons = [Landmark, Stethoscope, ShieldAlert, ScrollText];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        title="官方資源"
        description="以下連結導向政府官方網站，提供最新、最完整的法規與政策資訊。"
        breadcrumb={[{ title: "官方資源" }]}
      />

      <Section>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {officialResources.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="flex-1 font-heading text-base font-semibold text-foreground">
                  {item.title}
                </span>
                <ExternalLink
                  className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand-primary"
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          本網站內容僅供參考整理，正確法規與最新公告請以各官方網站為準。
        </p>
      </Section>
    </>
  );
}

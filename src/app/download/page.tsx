import type { Metadata } from "next";
import {
  Download,
  FileCheck2,
  FileSignature,
  FileText,
  NotebookPen,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

import { PageHeader } from "@/components/site/page-header";
import { Section } from "@/components/site/section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "表單下載｜職場霸凌防治指導手冊",
  description: "申訴書、委任書、撤回書、調查紀錄、保密切結書、同意書等表單下載。",
  path: "/download",
});

const forms = [
  { icon: FileText, title: "申訴書" },
  { icon: FileSignature, title: "委任書" },
  { icon: NotebookPen, title: "撤回書" },
  { icon: UserCheck, title: "調查紀錄" },
  { icon: ShieldCheck, title: "保密切結書" },
  { icon: FileCheck2, title: "同意書" },
];

export default function DownloadPage() {
  return (
    <>
      <PageHeader
        title="表單下載"
        description="申訴與調查程序中會使用到的常用表單，下載後填寫並送交指定窗口。"
        breadcrumb={[{ title: "表單下載" }]}
      />

      <Section>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {forms.map((form) => (
            <a
              key={form.title}
              href="#"
              className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                <form.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <span className="font-heading text-lg font-semibold text-foreground">
                {form.title}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition-transform group-hover:-translate-y-0.5">
                <Download className="h-4 w-4" aria-hidden="true" />
                下載表單
              </span>
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          （範例連結，實際表單請洽貴單位人資或申訴受理窗口取得最新版本）
        </p>
      </Section>
    </>
  );
}

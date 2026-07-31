import type { Metadata } from "next";
import Link from "next/link";
import { CalendarClock, ClipboardEdit, Download, FileSearch, Megaphone, Send } from "lucide-react";

import { PageHeader } from "@/components/site/page-header";
import { Section, SectionHeading } from "@/components/site/section";
import { Timeline, type TimelineStep } from "@/components/site/timeline";
import { InfoCard } from "@/components/site/info-card";

export const metadata: Metadata = {
  title: "申訴流程｜職場霸凌防治指導手冊",
  description: "職場霸凌申訴流程說明：如何提出申訴、受理期限與完整流程圖。",
};

const steps: TimelineStep[] = [
  {
    step: "STEP 01",
    title: "提出申訴",
    icon: ClipboardEdit,
    description: "員工填寫申訴書，向指定窗口或雇主提出申訴。",
  },
  {
    step: "STEP 02",
    title: "10 日內決定受理",
    icon: CalendarClock,
    meta: "受理期限",
    description: "雇主應於受理期限內審核並決定是否受理案件。",
  },
  {
    step: "STEP 03",
    title: "開始調查",
    icon: FileSearch,
    description: "受理後組成調查小組，進行訪談與證據蒐集。",
  },
  {
    step: "STEP 04",
    title: "通知結果",
    icon: Megaphone,
    description: "調查完成後，以書面通知申訴人與相對人處理結果。",
  },
  {
    step: "STEP 05",
    title: "申復",
    icon: Send,
    description: "如對結果有異議，可於期限內提出申復。",
  },
];

export default function ComplaintProcessPage() {
  return (
    <>
      <PageHeader
        title="申訴流程"
        description="從提出申訴到收到處理結果，掌握每個階段的期限與應注意事項。"
        breadcrumb={[{ title: "申訴流程" }]}
      />

      <Section>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <InfoCard
            icon={ClipboardEdit}
            title="提出申訴"
            description="以書面（申訴書）向雇主或指定窗口提出，並可請人陪同或委任代理人。"
          />
          <InfoCard
            icon={CalendarClock}
            title="受理與時程"
            description="雇主原則上應於 10 個工作日內決定是否受理，並書面通知申訴人。"
          />
          <InfoCard
            icon={FileSearch}
            title="後續調查"
            description="受理後將依調查程序展開，詳見「調查程序」頁面說明。"
            href="/investigation"
            linkLabel="查看調查程序"
          />
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="流程圖"
          title="申訴流程五步驟"
          description="每一步皆有明確時程與負責窗口，確保申訴案件不被拖延。"
        />
        <div className="mt-12">
          <Timeline steps={steps} />
        </div>
      </Section>

      <Section>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
          <h3 className="font-heading text-xl font-semibold">
            準備好提出申訴了嗎？
          </h3>
          <p className="text-sm text-muted-foreground">
            下載申訴書表單，填寫完成後送交指定窗口即可開始受理程序。
          </p>
          <Link
            href="/forms"
            className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            前往表單下載
          </Link>
        </div>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarClock,
  CheckCircle2,
  ClipboardEdit,
  Download,
  Gavel,
  Megaphone,
} from "lucide-react";

import { PageHeader } from "@/components/site/page-header";
import { Section, SectionHeading } from "@/components/site/section";
import { Timeline, type TimelineStep } from "@/components/site/timeline";
import { Reveal } from "@/components/ui/reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "申訴流程｜職場霸凌防治指導手冊",
  description: "職場霸凌申訴流程說明：如何提出申訴、受理期限與完整流程圖。",
  path: "/complaint",
});

const steps: TimelineStep[] = [
  { step: "STEP 1", title: "提出申訴", icon: ClipboardEdit, description: "員工向雇主或指定窗口提出申訴。" },
  { step: "STEP 2", title: "是否受理", icon: CheckCircle2, description: "雇主於期限內審核並決定是否受理。" },
  { step: "STEP 3", title: "調查", icon: Gavel, description: "組成調查小組進行訪談與蒐證。" },
  { step: "STEP 4", title: "決定", icon: CalendarClock, description: "彙整調查結果，做成處理建議。" },
  { step: "STEP 5", title: "通知", icon: Megaphone, description: "以書面通知雙方最終處理結果。" },
];

const stepDetails = [
  {
    step: "STEP 1",
    title: "提出申訴",
    items: ["可書面", "可口頭", "可 Email"],
  },
  {
    step: "STEP 2",
    title: "是否受理",
    items: ["10 個工作日內審核", "書面通知是否受理", "不受理需說明理由"],
  },
  {
    step: "STEP 3",
    title: "調查",
    items: ["組成調查小組", "分別訪談雙方與證人", "蒐集相關事證"],
  },
  {
    step: "STEP 4",
    title: "決定",
    items: ["彙整調查報告", "做成處理建議", "簽核確認"],
  },
  {
    step: "STEP 5",
    title: "通知",
    items: ["書面通知雙方結果", "說明處理理由", "告知申復權利"],
  },
];

const schedule = [
  { label: "10 工作日", description: "決定是否受理申訴案件" },
  { label: "7 工作日", description: "完成受理登錄與組成調查小組" },
  { label: "調查期限", description: "依案件複雜度合理延長，並通知雙方" },
];

export default function ComplaintPage() {
  return (
    <>
      <PageHeader
        title="申訴流程"
        description="從提出申訴到收到處理結果，掌握每個階段的期限與應注意事項。"
        breadcrumb={[{ title: "申訴流程" }]}
      />

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
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading center={false} eyebrow="詳細說明" title="每個步驟怎麼做" />
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {stepDetails.map((detail, i) => (
                <Reveal key={detail.step} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-border bg-card p-5 shadow-sm">
                    <p className="text-xs font-semibold tracking-wide text-brand-primary uppercase">
                      {detail.step}
                    </p>
                    <h3 className="mt-1 font-heading text-base font-semibold text-foreground">
                      {detail.title}
                    </h3>
                    <ul className="mt-3 space-y-1.5">
                      {detail.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading center={false} eyebrow="時程" title="重要期限" />
            <div className="mt-8 space-y-4">
              {schedule.map((item, i) => (
                <Reveal key={item.label} delay={i * 0.08}>
                  <div className="flex gap-4 rounded-2xl border border-border bg-muted/40 p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-heading text-sm font-bold text-brand-primary">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section muted>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
          <h3 className="font-heading text-xl font-semibold">
            準備好提出申訴了嗎？
          </h3>
          <p className="text-sm text-muted-foreground">
            下載申訴書表單，填寫完成後送交指定窗口即可開始受理程序。
          </p>
          <Link
            href="/download"
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

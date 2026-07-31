import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ClipboardEdit,
  Download,
  FileSearch,
  Gavel,
  Megaphone,
  Send,
} from "lucide-react";

import { PageHeader } from "@/components/site/page-header";
import { Section, SectionHeading } from "@/components/site/section";
import { ProcessSteps, type ProcessStepDetail } from "@/components/site/process-steps";
import { Reveal } from "@/components/ui/reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "申訴流程｜職場霸凌防治指導手冊",
  description: "職場霸凌申訴流程說明：如何提出申訴、受理期限與完整流程圖。",
  path: "/complaint",
});

const steps: ProcessStepDetail[] = [
  {
    step: "STEP 1",
    title: "提出申訴",
    icon: ClipboardEdit,
    description: "員工向雇主或指定窗口提出申訴。",
    items: ["書面", "口頭", "Email", "代理人"],
  },
  {
    step: "STEP 2",
    title: "受理",
    icon: CheckCircle2,
    description: "雇主於期限內審核並決定是否受理。",
    items: ["審核申訴內容", "書面通知是否受理", "不受理需說明理由"],
  },
  {
    step: "STEP 3",
    title: "成立調查",
    icon: Gavel,
    description: "受理後組成調查小組，正式立案。",
    items: ["組成調查小組", "指定利益迴避", "正式立案登記"],
  },
  {
    step: "STEP 4",
    title: "調查",
    icon: FileSearch,
    description: "進行訪談與蒐證，釐清事實。",
    items: ["分別訪談雙方與證人", "蒐集相關事證", "製作訪談紀錄"],
  },
  {
    step: "STEP 5",
    title: "通知",
    icon: Megaphone,
    description: "以書面通知雙方最終處理結果。",
    items: ["書面通知雙方結果", "說明處理理由", "告知申復權利"],
  },
  {
    step: "STEP 6",
    title: "申復",
    icon: Send,
    description: "如有不服，可於期限內提出申復。",
    items: ["期限內以書面提出", "說明不服理由", "交由申復審議小組審查"],
  },
];

const schedule = [
  { label: "提出期限", description: "知悉事件後應儘速提出，越早保留證據越有利" },
  { label: "受理期限", description: "雇主原則上應於 10 個工作日內決定是否受理" },
  { label: "通知期限", description: "調查完成後應於合理期限內以書面通知雙方" },
];

export default function ComplaintPage() {
  return (
    <>
      <PageHeader
        title="申訴流程"
        description="從提出申訴到收到處理結果，掌握每個階段的期限與應注意事項。"
        breadcrumb={[{ title: "申訴流程" }]}
      />

      <Section>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading
              center={false}
              eyebrow="流程圖"
              title="申訴流程六步驟"
              description="每一步皆有明確時程，點開即可看到怎麼做。"
            />
            <div className="mt-10">
              <ProcessSteps steps={steps} />
            </div>
          </div>

          <div className="lg:sticky lg:top-24 lg:h-fit">
            <SectionHeading center={false} eyebrow="Important" title="重要期限" />
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

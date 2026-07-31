import type { Metadata } from "next";
import {
  ArrowRight,
  Eye,
  EyeOff,
  FileCheck2,
  FileSearch,
  FileText,
  Gavel,
  Megaphone,
  MessagesSquare,
  ScrollText,
  ShieldOff,
} from "lucide-react";

import { PageHeader } from "@/components/site/page-header";
import { Section, SectionHeading } from "@/components/site/section";
import { InfoCard } from "@/components/site/info-card";
import { Timeline, type TimelineStep } from "@/components/site/timeline";
import { Reveal } from "@/components/ui/reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "調查程序｜職場霸凌防治指導手冊",
  description: "職場霸凌調查程序：調查原則、利益迴避、調查流程與調查報告。",
  path: "/investigation",
});

const principles = [
  { icon: Gavel, title: "公平", description: "給予雙方陳述意見與答辯的對等機會，不預設立場。" },
  { icon: Eye, title: "客觀", description: "依事證認定事實，避免個人主觀好惡影響調查結果。" },
  { icon: EyeOff, title: "保密", description: "案件資訊僅限必要人員知悉，避免當事人身分外洩。" },
];

const processSteps: TimelineStep[] = [
  { step: "STEP 01", title: "通知", icon: Megaphone, description: "通知雙方當事人調查即將展開。" },
  { step: "STEP 02", title: "訪談", icon: MessagesSquare, description: "分別訪談申訴人、相對人與相關證人。" },
  { step: "STEP 03", title: "蒐證", icon: FileSearch, description: "蒐集文件、通訊紀錄等相關事證。" },
  { step: "STEP 04", title: "報告", icon: FileCheck2, description: "彙整事證作成書面調查報告。" },
];

const reportItems = [
  { icon: ScrollText, title: "案件摘要", description: "簡述申訴緣由與雙方基本資訊。" },
  { icon: FileText, title: "調查經過", description: "記錄訪談對象、時間與蒐證過程。" },
  { icon: FileCheck2, title: "事實認定", description: "依事證判斷事件是否構成職場霸凌。" },
  { icon: Gavel, title: "建議事項", description: "提出後續處理與改善建議。" },
];

export default function InvestigationPage() {
  return (
    <>
      <PageHeader
        title="調查程序"
        description="調查小組如何在公正、保密的原則下完成訪談與調查報告。"
        breadcrumb={[{ title: "調查程序" }]}
      />

      <Section>
        <SectionHeading eyebrow="調查原則" title="三項核心原則" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {principles.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <InfoCard {...item} className="h-full" />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="利益迴避" title="調查小組成員是否須迴避" />
        <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <div className="rounded-2xl border border-border bg-card px-6 py-5 text-center shadow-sm">
            <ShieldOff className="mx-auto h-6 w-6 text-brand-primary" aria-hidden="true" />
            <p className="mt-2 font-heading text-sm font-semibold text-foreground">
              是否有利益關係
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              與案件當事人有無親屬、密切私交或職務利害關係
            </p>
          </div>
          <div className="flex flex-col items-center gap-1 text-brand-primary">
            <ArrowRight className="h-5 w-5 rotate-90 sm:rotate-0" aria-hidden="true" />
            <span className="text-xs font-semibold">有</span>
          </div>
          <div className="rounded-2xl border border-brand-danger/30 bg-brand-danger/10 px-6 py-5 text-center shadow-sm">
            <p className="font-heading text-sm font-semibold text-foreground">迴避</p>
            <p className="mt-1 text-xs text-muted-foreground">
              該成員不得參與本案調查
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="調查流程" title="四個步驟完成調查" />
        <div className="mt-12">
          <Timeline steps={processSteps} />
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="調查報告" title="報告應包含的內容" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reportItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <InfoCard {...item} className="h-full" />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import {
  Bell,
  CheckCircle2,
  FileSearch,
  FileWarning,
  Gavel,
  ScrollText,
  Send,
} from "lucide-react";

import { PageHeader } from "@/components/site/page-header";
import { Section, SectionHeading } from "@/components/site/section";
import { Timeline, type TimelineStep } from "@/components/site/timeline";
import { InfoCard } from "@/components/site/info-card";
import { Reveal } from "@/components/ui/reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "申復流程｜職場霸凌防治指導手冊",
  description: "對調查結果不服時，如何於期限內提出申復及後續處理程序。",
  path: "/appeal",
});

const steps: TimelineStep[] = [
  {
    step: "Day 0",
    title: "收到結果",
    icon: Bell,
    description: "當事人收到調查結果的書面通知。",
  },
  {
    step: "30 日內",
    title: "提出申復",
    icon: Send,
    meta: "申復期限",
    description: "如對結果有異議，應於期限內以書面提出申復申請。",
  },
  {
    step: "STEP 03",
    title: "審議",
    icon: Gavel,
    description: "由申復審議小組審查申復理由，必要時召開會議聽取陳述。",
  },
  {
    step: "STEP 04",
    title: "重新調查",
    icon: FileSearch,
    description: "如認定原調查有疏漏，得就爭議部分重新蒐證調查。",
  },
  {
    step: "STEP 05",
    title: "完成決定",
    icon: CheckCircle2,
    description: "做成最終決定並書面通知雙方，程序至此終結。",
  },
];

const eligibleReasons = [
  { icon: FileWarning, title: "程序瑕疵", description: "原調查程序有違反公正、保密等規定之情形。" },
  { icon: ScrollText, title: "新事證", description: "原調查時未能取得，且足以影響認定結果的新證據。" },
  { icon: Gavel, title: "重大遺漏", description: "原調查對重要事實或關鍵證人有明顯疏漏未予審酌。" },
];

export default function AppealPage() {
  return (
    <>
      <PageHeader
        title="申復流程"
        description="若對調查結果有異議，可於期限內依程序提出申復。"
        breadcrumb={[{ title: "申復流程" }]}
      />

      <Section>
        <SectionHeading
          eyebrow="Timeline"
          title="申復流程五步驟"
          description="申復並非重新提出申訴，而是針對原調查結果提出異議與審議。"
        />
        <div className="mt-12">
          <Timeline steps={steps} currentStep={2} />
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="適用情況" title="哪些情況可以提出申復" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {eligibleReasons.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <InfoCard {...item} className="h-full" />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

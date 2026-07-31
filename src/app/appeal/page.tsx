import type { Metadata } from "next";
import {
  Bell,
  CheckCircle2,
  FileSearch,
  Gavel,
  Send,
} from "lucide-react";

import { PageHeader } from "@/components/site/page-header";
import { Section, SectionHeading } from "@/components/site/section";
import { Timeline, type TimelineStep } from "@/components/site/timeline";

export const metadata: Metadata = {
  title: "申復流程｜職場霸凌防治指導手冊",
  description: "對調查結果不服時，如何於期限內提出申復及後續處理程序。",
};

const steps: TimelineStep[] = [
  {
    step: "Day 0",
    title: "收到通知",
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
    title: "召開申復會議",
    icon: Gavel,
    description: "由申復審議小組召開會議，聽取雙方陳述。",
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
    </>
  );
}

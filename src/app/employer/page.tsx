import type { Metadata } from "next";
import {
  Brain,
  Gavel,
  HeartHandshake,
  Inbox,
  Landmark,
  ScrollText,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import { PageHeader } from "@/components/site/page-header";
import { Section, SectionHeading } from "@/components/site/section";
import { InfoCard } from "@/components/site/info-card";
import { Timeline, type TimelineStep } from "@/components/site/timeline";
import { AlertBox } from "@/components/site/alert-box";
import { Reveal } from "@/components/ui/reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "雇主責任｜職場霸凌防治指導手冊",
  description: "雇主接獲職場霸凌申訴後應採取的防治措施、保護義務與處理原則。",
  path: "/employer",
});

const responsibilities = [
  {
    icon: ShieldCheck,
    title: "預防",
    description: "訂定書面防治措施與申訴管道，並公告周知全體員工。",
  },
  {
    icon: Inbox,
    title: "立即措施",
    description: "接獲申訴後即時處置，避免情況持續惡化。",
  },
  {
    icon: Gavel,
    title: "調查",
    description: "組成公正調查小組，於合理期限內完成調查並做成報告。",
  },
  {
    icon: HeartHandshake,
    title: "保護",
    description: "保護當事人身心安全，避免遭受二次傷害或報復。",
  },
];

const steps: TimelineStep[] = [
  {
    step: "STEP 01",
    title: "收到申訴",
    icon: Inbox,
    description: "指定窗口收到員工申訴或通報，記錄基本資訊。",
  },
  {
    step: "STEP 02",
    title: "立即保護",
    icon: ShieldCheck,
    description: "視情況調整職務或工作空間，降低雙方接觸風險。",
  },
  {
    step: "STEP 03",
    title: "協助",
    icon: HeartHandshake,
    description: "提供心理、法律等必要協助，支持當事人身心健康。",
  },
  {
    step: "STEP 04",
    title: "開始調查",
    icon: Gavel,
    description: "組成調查小組，依既定程序展開正式調查。",
  },
];

const assistance = [
  {
    icon: Brain,
    title: "心理協助",
    description: "提供諮商輔導資源，協助當事人調適身心壓力。",
  },
  {
    icon: Landmark,
    title: "法律協助",
    description: "提供法律諮詢管道，說明申訴與後續救濟權益。",
  },
  {
    icon: Stethoscope,
    title: "醫療協助",
    description: "如有身心傷害，協助安排就醫與相關醫療資源。",
  },
  {
    icon: ScrollText,
    title: "福利資源",
    description: "視需要提供職務調整、彈性工時等福利支持。",
  },
];

export default function EmployerPage() {
  return (
    <>
      <PageHeader
        title="雇主責任"
        description="雇主於知悉職場霸凌事件後，負有即時處理、保護當事人與落實調查的法定義務。"
        breadcrumb={[{ title: "雇主責任" }]}
      />

      <Section>
        <SectionHeading eyebrow="核心義務" title="雇主應盡的四項責任" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {responsibilities.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <InfoCard {...item} className="h-full" />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="處理流程"
          title="知悉後的立即措施"
          description="每一步都應留下書面紀錄，作為後續調查與法規遵循的依據。"
        />
        <div className="mt-12">
          <Timeline steps={steps} />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="協助資源" title="可提供哪些協助" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {assistance.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <InfoCard {...item} className="h-full" />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section muted className="max-w-3xl">
        <AlertBox
          variant="danger"
          title="雇主對申訴人不得有下列行為："
          items={["報復", "歧視", "不利待遇"]}
        />
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import {
  FileSearch,
  HeartHandshake,
  Inbox,
  ShieldCheck,
  Siren,
} from "lucide-react";

import { PageHeader } from "@/components/site/page-header";
import { Section, SectionHeading } from "@/components/site/section";
import { InfoCard } from "@/components/site/info-card";
import { Timeline, type TimelineStep } from "@/components/site/timeline";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "雇主責任｜職場霸凌防治指導手冊",
  description: "雇主接獲職場霸凌申訴後應採取的防治措施、保護義務與處理原則。",
};

const responsibilities = [
  {
    icon: ShieldCheck,
    title: "建立防治制度",
    description: "訂定書面防治措施、申訴管道與處理程序，並公告周知全體員工。",
  },
  {
    icon: Inbox,
    title: "受理申訴",
    description: "指定專責窗口受理申訴，並確保申訴管道暢通、易於使用。",
  },
  {
    icon: HeartHandshake,
    title: "保護與協助",
    description: "提供當事人心理諮商、職務調整等必要協助，避免二次傷害。",
  },
  {
    icon: FileSearch,
    title: "落實調查",
    description: "組成公正調查小組，於合理期限內完成調查並做成報告。",
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
    title: "立即措施",
    icon: Siren,
    description: "視情況採取緊急處置，避免情況持續惡化。",
  },
  {
    step: "STEP 03",
    title: "保護當事人",
    icon: ShieldCheck,
    description: "評估是否需暫時調整職務或工作空間，降低接觸風險。",
  },
  {
    step: "STEP 04",
    title: "提供協助",
    icon: HeartHandshake,
    description: "提供心理諮商、法律諮詢等資源，支持當事人身心健康。",
  },
  {
    step: "STEP 05",
    title: "開始調查",
    icon: FileSearch,
    description: "組成調查小組，依既定程序展開正式調查。",
  },
];

export default function EmployerResponsibilityPage() {
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
          title="接獲申訴後的五個處理步驟"
          description="每一步都應留下書面紀錄，作為後續調查與法規遵循的依據。"
        />
        <div className="mt-12">
          <Timeline steps={steps} />
        </div>
      </Section>
    </>
  );
}

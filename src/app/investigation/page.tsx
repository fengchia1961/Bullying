import type { Metadata } from "next";
import {
  EyeOff,
  FileCheck2,
  Gavel,
  MessagesSquare,
  ShieldOff,
} from "lucide-react";

import { PageHeader } from "@/components/site/page-header";
import { Section, SectionHeading } from "@/components/site/section";
import { InfoCard } from "@/components/site/info-card";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "調查程序｜職場霸凌防治指導手冊",
  description: "職場霸凌調查程序：調查原則、利益迴避、訪談、保密與調查報告。",
};

const items = [
  {
    icon: Gavel,
    title: "調查原則",
    description:
      "調查應秉持公正、客觀、中立原則，給予雙方陳述意見與答辯的對等機會。",
  },
  {
    icon: ShieldOff,
    title: "利益迴避",
    description:
      "與案件有利害關係或親屬關係之人員，應主動迴避，不得參與調查小組。",
  },
  {
    icon: MessagesSquare,
    title: "訪談",
    description:
      "分別訪談申訴人、相對人與相關證人，並完整記錄訪談內容以利後續審酌。",
  },
  {
    icon: EyeOff,
    title: "保密",
    description:
      "案件相關資訊僅限調查必要人員知悉，避免申訴人身分或案情外洩。",
  },
  {
    icon: FileCheck2,
    title: "調查報告",
    description:
      "彙整事證後作成書面調查報告，載明認定事實與處理建議，作為後續決定依據。",
  },
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
        <SectionHeading eyebrow="五大重點" title="調查程序應把握的原則" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <InfoCard {...item} className="h-full" />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

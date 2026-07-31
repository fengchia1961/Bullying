import type { Metadata } from "next";
import {
  AlertTriangle,
  Gavel,
  MessagesSquare,
  Scale,
  ShieldAlert,
  Users,
} from "lucide-react";

import { PageHeader } from "@/components/site/page-header";
import { Section, SectionHeading } from "@/components/site/section";
import { InfoCard } from "@/components/site/info-card";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "認識職場霸凌｜職場霸凌防治指導手冊",
  description: "認識職場霸凌的定義、法律依據、常見類型、判斷原則與常見案例。",
};

const legalBasis = [
  {
    title: "職業安全衛生法",
    description: "雇主應採取必要措施，預防因執行職務遭受不法侵害。",
  },
  {
    title: "性別平等工作法",
    description: "與性別、性傾向有關之霸凌行為，另有申訴與調查機制。",
  },
  {
    title: "勞動基準法",
    description: "涉及職場暴力導致勞動條件受損時之相關保障。",
  },
];

const bullyingTypes = [
  {
    icon: MessagesSquare,
    title: "語言霸凌",
    description: "辱罵、羞辱、嘲諷、威脅性言語等重複性言語攻擊。",
  },
  {
    icon: Users,
    title: "關係霸凌",
    description: "刻意排擠、孤立、散布謠言，破壞人際與工作關係。",
  },
  {
    icon: ShieldAlert,
    title: "權力霸凌",
    description: "利用職位權力不當施壓、刁難或報復下屬。",
  },
  {
    icon: AlertTriangle,
    title: "網路霸凌",
    description: "透過通訊軟體、社群平台公開羞辱或散布不實訊息。",
  },
];

const judgingPrinciples = [
  "行為具有持續性或重複性，而非單一偶發事件",
  "雙方存在權力不對等關係（如主管對部屬）",
  "已造成當事人身心健康或工作權益的實際損害",
  "行為超出合理工作指導與管理所需的範圍",
];

export default function UnderstandingPage() {
  return (
    <>
      <PageHeader
        title="認識職場霸凌"
        description="了解職場霸凌的定義、法律依據、常見類型與判斷原則，是保護自己與同事的第一步。"
        breadcrumb={[{ title: "認識職場霸凌" }]}
      />

      <Section>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading
              center={false}
              eyebrow="定義"
              title="什麼是職場霸凌"
            />
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              職場霸凌泛指在工作場所中，一方對他人反覆施加言語、行為或權力上的不當對待，
              使當事人身心受到傷害，或形成充滿敵意、羞辱性的工作環境。它不同於單一次的意見衝突或
              合理的績效管理，關鍵在於「持續性」與「造成實質傷害」。
            </p>
          </div>
          <Reveal className="rounded-2xl border border-border bg-muted/40 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
              <Gavel className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-4 font-heading text-base font-semibold">
              小提醒
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              遇到疑似霸凌情況，建議儘早保留對話紀錄、郵件、錄音等證據，並諮詢公司內部窗口或工會。
            </p>
          </Reveal>
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="法律依據" title="相關法規重點" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {legalBasis.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <InfoCard icon={Scale} {...item} className="h-full" />
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          詳細條文請以{" "}
          <a
            href="https://law.moj.gov.tw/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-primary hover:underline"
          >
            全國法規資料庫
          </a>{" "}
          公告內容為準。
        </p>
      </Section>

      <Section>
        <SectionHeading eyebrow="常見類型" title="職場霸凌的常見樣態" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bullyingTypes.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <InfoCard {...item} className="h-full" />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="判斷原則" title="如何初步判斷是否構成霸凌" />
        <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {judgingPrinciples.map((text, i) => (
            <Reveal key={text} delay={i * 0.08}>
              <li className="flex items-start gap-3 rounded-xl bg-card p-4 text-sm leading-relaxed text-foreground shadow-sm ring-1 ring-border">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary text-xs font-bold text-white">
                  {i + 1}
                </span>
                {text}
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}

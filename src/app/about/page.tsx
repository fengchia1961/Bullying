import type { Metadata } from "next";
import {
  BookOpen,
  MessagesSquare,
  ShieldAlert,
  UserRoundX,
  Wifi,
} from "lucide-react";

import { PageHeader } from "@/components/site/page-header";
import { Section, SectionHeading } from "@/components/site/section";
import { InfoCard } from "@/components/site/info-card";
import { Timeline, type TimelineStep } from "@/components/site/timeline";
import { AlertBox } from "@/components/site/alert-box";
import { Reveal } from "@/components/ui/reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "認識職場霸凌｜職場霸凌防治指導手冊",
  description: "認識職場霸凌的定義、法律依據、常見類型與判斷原則。",
  path: "/about",
});

const legalFlow: TimelineStep[] = [
  { step: "01", title: "職業安全衛生法", description: "課予雇主預防執行職務遭受不法侵害之義務。" },
  { step: "02", title: "防治準則", description: "訂定具體防治措施與處理程序之行政規範。" },
  { step: "03", title: "雇主責任", description: "落實於企業內部規章與申訴調查機制。" },
];

const bullyingTypes = [
  {
    icon: MessagesSquare,
    title: "言語霸凌",
    description: "辱罵、羞辱、嘲諷、威脅性言語等重複性言語攻擊。",
  },
  {
    icon: UserRoundX,
    title: "肢體霸凌",
    description: "推擠、拍打、阻擋去路等涉及身體接觸的侵犯行為。",
  },
  {
    icon: ShieldAlert,
    title: "權勢霸凌",
    description: "利用職位權力不當施壓、刁難或報復下屬。",
  },
  {
    icon: Wifi,
    title: "網路霸凌",
    description: "透過通訊軟體、社群平台公開羞辱或散布不實訊息。",
  },
];

const judgingSteps: TimelineStep[] = [
  { step: "01", title: "是否執行職務", description: "事件是否發生於執行職務或相關工作場合。" },
  { step: "02", title: "是否反覆發生", description: "行為是否具有持續性，而非單一偶發事件。" },
  { step: "03", title: "是否造成身心傷害", description: "是否已對當事人身心健康造成實質影響。" },
  { step: "04", title: "是否具有權勢關係", description: "雙方是否存在職權、資歷等不對等關係。" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="認識職場霸凌"
        description="了解職場霸凌的定義、法律依據、常見類型與判斷原則，是保護自己與同事的第一步。"
        breadcrumb={[{ title: "認識職場霸凌" }]}
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
              <BookOpen className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <SectionHeading center={false} eyebrow="定義" title="什麼是職場霸凌" />
            </div>
          </div>
          <p className="mt-5 text-base leading-loose text-muted-foreground">
            職場霸凌泛指在工作場所中，一方對他人反覆施加言語、行為或權力上的不當對待，使當事人身心受到傷害，
            或形成充滿敵意、羞辱性的工作環境。它可能來自主管、同事，也可能來自客戶或廠商，型態包括言語羞辱、
            刻意排擠孤立、利用職權刁難，乃至於網路上的公開謾罵與造謠。職場霸凌不同於單一次的意見衝突或合理的
            績效管理，關鍵在於行為是否具有「持續性」、是否存在「權力不對等」，以及是否已對當事人的身心健康與
            工作權益造成實質傷害。及早辨識這些特徵，有助於受害者尋求協助，也有助於雇主建立更完善的預防與處理
            機制，共同營造尊重、安全的工作環境。
          </p>
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="法律依據" title="從法規到企業內部規範" />
        <div className="mt-12">
          <Timeline steps={legalFlow} />
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
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
        <div className="mt-12">
          <Timeline steps={judgingSteps} />
        </div>
      </Section>

      <Section className="max-w-3xl">
        <AlertBox
          variant="warning"
          title="並非所有衝突都是職場霸凌，需依個案判斷。"
        />
      </Section>
    </>
  );
}

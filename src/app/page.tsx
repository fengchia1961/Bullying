import Link from "next/link";
import {
  BookOpen,
  Building2,
  FileQuestion,
  GitBranch,
  Layers,
  Library,
  ScrollText,
} from "lucide-react";

import { Hero } from "@/components/site/hero";
import { SearchBox } from "@/components/site/search-box";
import { InfoCard } from "@/components/site/info-card";
import { Section, SectionHeading } from "@/components/site/section";
import { Timeline, type TimelineStep } from "@/components/site/timeline";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { Reveal } from "@/components/ui/reveal";
import { faqPreview } from "@/lib/faq-data";

const quickEntries = [
  {
    icon: BookOpen,
    title: "認識職場霸凌",
    description: "定義、法律依據、常見類型與判斷原則一次看懂。",
    href: "/understanding",
  },
  {
    icon: Building2,
    title: "雇主責任",
    description: "雇主接獲申訴後應採取的防治措施與保護義務。",
    href: "/employer-responsibility",
  },
  {
    icon: GitBranch,
    title: "申訴流程",
    description: "從提出申訴到通知結果，完整流程圖說明。",
    href: "/complaint-process",
  },
  {
    icon: FileQuestion,
    title: "常見問題",
    description: "主管責罵、同事排擠、匿名申訴等常見疑問解答。",
    href: "/faq",
  },
];

const siteFeatures = [
  {
    icon: Layers,
    title: "圖像化流程",
    description: "以流程圖與時間軸呈現申訴、調查、申復程序，一目了然。",
  },
  {
    icon: ScrollText,
    title: "法規重點整理",
    description: "精選《職場霸凌防治指導手冊》重點，去除冗長法條。",
  },
  {
    icon: FileQuestion,
    title: "常見問題",
    description: "彙整員工、主管、HR 最常見的疑問與解答。",
  },
  {
    icon: Library,
    title: "官方資源",
    description: "連結勞動部、職安署等官方網站，掌握最新規定。",
  },
];

const flowPreview: TimelineStep[] = [
  { step: "STEP 01", title: "提出申訴", description: "員工向雇主或申訴管道提出申訴。" },
  { step: "STEP 02", title: "受理", description: "雇主於期限內決定是否受理案件。" },
  { step: "STEP 03", title: "調查", description: "組成調查小組進行訪談與蒐證。" },
  { step: "STEP 04", title: "審議", description: "彙整調查結果並做成處理建議。" },
  { step: "STEP 05", title: "通知", description: "以書面通知雙方調查結果。" },
  { step: "STEP 06", title: "申復", description: "當事人如有不服，可依程序提出申復。" },
];

export default function Home() {
  return (
    <>
      <Hero />

      <Section className="py-12 lg:py-14">
        <SearchBox />
      </Section>

      <Section muted>
        <SectionHeading eyebrow="快速入口" title="四大功能入口" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {quickEntries.map((entry, i) => (
            <Reveal key={entry.href} delay={i * 0.08}>
              <InfoCard {...entry} linkLabel="前往查看" className="h-full" />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="網站特色" title="為什麼使用本手冊網站" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteFeatures.map((entry, i) => (
            <Reveal key={entry.title} delay={i * 0.08}>
              <InfoCard {...entry} className="h-full" />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="流程預覽"
          title="申訴到申復，六個步驟"
          description="完整說明請見申訴流程與申復流程頁面。"
        />
        <div className="mt-12">
          <Timeline steps={flowPreview} />
        </div>
      </Section>

      <Section>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            center={false}
            eyebrow="FAQ"
            title="常見問題"
            description="更多問題請見完整 FAQ 頁面。"
          />
          <Link
            href="/faq"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-primary hover:underline"
          >
            查看全部 FAQ
          </Link>
        </div>
        <div className="mt-8 rounded-2xl border border-border bg-card px-6 shadow-sm">
          <FaqAccordion items={faqPreview} />
        </div>
      </Section>
    </>
  );
}

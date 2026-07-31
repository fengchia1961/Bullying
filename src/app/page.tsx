import Link from "next/link";
import {
  BookOpen,
  Building2,
  Calendar,
  FileQuestion,
  FileSearch,
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
import { newsData } from "@/lib/news-data";

const quickEntries = [
  {
    icon: BookOpen,
    title: "認識職場霸凌",
    description: "了解定義與判斷原則。",
    href: "/about",
  },
  {
    icon: Building2,
    title: "雇主責任",
    description: "了解法定義務。",
    href: "/employer",
  },
  {
    icon: GitBranch,
    title: "申訴流程",
    description: "一步一步了解流程。",
    href: "/complaint",
  },
  {
    icon: FileSearch,
    title: "調查程序",
    description: "了解調查如何進行。",
    href: "/investigation",
  },
];

const personaNav = [
  { emoji: "👨‍💼", title: "我是雇主", href: "/employer" },
  { emoji: "👩‍💻", title: "我是 HR", href: "/investigation" },
  { emoji: "👨‍🔧", title: "我是員工", href: "/complaint" },
  { emoji: "📚", title: "我想了解制度", href: "/about" },
];

const scenarioGuide = [
  { emoji: "📌", title: "我懷疑自己遭遇職場霸凌", href: "/about" },
  { emoji: "📌", title: "我收到員工申訴", href: "/complaint" },
  { emoji: "📌", title: "我是主管，不知道如何處理", href: "/employer" },
  { emoji: "📌", title: "我想了解調查流程", href: "/investigation" },
  { emoji: "📌", title: "我想提出申復", href: "/appeal" },
];

const siteFeatures = [
  {
    icon: Layers,
    title: "流程圖",
    description: "以流程圖與時間軸呈現申訴、調查、申復程序，一目了然。",
  },
  {
    icon: ScrollText,
    title: "重點整理",
    description: "精選《職場霸凌防治指導手冊》重點，去除冗長法條。",
  },
  {
    icon: FileQuestion,
    title: "FAQ",
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
  { step: "STEP 04", title: "通知", description: "以書面通知雙方調查結果。" },
  { step: "STEP 05", title: "申復", description: "當事人如有不服，可依程序提出申復。" },
];

export default function Home() {
  return (
    <>
      <Hero />

      <Section className="max-w-3xl">
        <SectionHeading eyebrow="關於本站" title="為什麼需要防治職場霸凌" />
        <p className="mt-6 text-base leading-loose text-muted-foreground">
          職場霸凌不僅傷害當事人的身心健康，也會削弱團隊士氣與組織信任，長期下來更可能影響企業的營運效率與人才留任。
          法規要求雇主建立防治措施與申訴機制，其目的並非增加企業負擔，而是協助建立一套清楚、可依循的處理流程，讓員工在遇到不當對待時知道如何求助，也讓雇主能及時介入、降低爭議擴大的風險。
          建立友善、尊重的工作環境，是每一位工作者都值得擁有的基本保障，也是企業永續經營的重要基礎。本站將防治制度、申訴流程與調查程序整理為圖像化的重點內容，協助你快速掌握關鍵資訊。
        </p>
      </Section>

      <Section className="py-4 lg:py-6">
        <SearchBox />
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="情境式導覽"
          title="請選擇目前的情境"
          description="點擊後直接跳到最相關的頁面與流程圖。"
        />
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {scenarioGuide.map((item, i) => (
            <Reveal key={item.href} delay={i * 0.06}>
              <Link
                href={item.href}
                className="flex h-full items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary hover:shadow-lg"
              >
                <span className="text-2xl" aria-hidden="true">
                  {item.emoji}
                </span>
                <span className="font-medium text-foreground">{item.title}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="快速入口" title="四大功能入口" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {quickEntries.map((entry, i) => (
            <Reveal key={entry.href} delay={i * 0.08}>
              <InfoCard {...entry} linkLabel="前往查看" className="h-full" />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="我該怎麼做？" title="依你的身分快速導覽" />
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {personaNav.map((item, i) => (
            <Reveal key={item.href} delay={i * 0.08}>
              <Link
                href={item.href}
                className="flex h-full flex-col items-center gap-2 rounded-2xl border border-border bg-card p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary hover:shadow-lg"
              >
                <span className="text-3xl" aria-hidden="true">
                  {item.emoji}
                </span>
                <span className="text-sm font-medium text-foreground">
                  {item.title}
                </span>
              </Link>
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
          title="申訴到申復，五個步驟"
          description="點擊下方任一步驟，即可進入完整流程頁面。"
        />
        <Link href="/complaint" className="mt-12 block">
          <Timeline steps={flowPreview} />
        </Link>
      </Section>

      <Section>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            center={false}
            eyebrow="最新公告"
            title="職場霸凌防治最新消息"
          />
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {newsData.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  {item.year}
                </span>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
                <a
                  href="https://www.mol.gov.tw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-2 text-sm font-medium text-brand-primary hover:underline"
                >
                  查看更多 →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section muted>
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

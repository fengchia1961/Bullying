"use client";

import * as React from "react";
import {
  Eye,
  EyeOff,
  FileCheck2,
  FileSearch,
  FileText,
  Gavel,
  Megaphone,
  MessagesSquare,
  NotebookPen,
  ScrollText,
  ShieldOff,
  UserRoundCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/site/section";
import { InfoCard } from "@/components/site/info-card";
import { Timeline, type TimelineStep } from "@/components/site/timeline";

type CardItem = { icon: LucideIcon; title: string; description: string };

type InvestigationTab = {
  value: string;
  label: string;
  eyebrow: string;
  title: string;
  cards?: CardItem[];
  timelineSteps?: TimelineStep[];
  cardCols?: string;
};

const tabs: InvestigationTab[] = [
  {
    value: "principles",
    label: "調查原則",
    eyebrow: "Tab 1",
    title: "調查原則",
    cards: [
      { icon: Gavel, title: "公平", description: "給予雙方陳述意見與答辯的對等機會，不預設立場。" },
      { icon: Eye, title: "客觀", description: "依事證認定事實，避免個人主觀好惡影響調查結果。" },
      { icon: EyeOff, title: "保密", description: "案件資訊僅限必要人員知悉，避免當事人身分外洩。" },
    ],
  },
  {
    value: "team",
    label: "調查小組",
    eyebrow: "Tab 2",
    title: "調查小組",
    cards: [
      { icon: Users, title: "組成方式", description: "由人資、主管及相關專業人員共同組成調查小組。" },
      { icon: UserRoundCheck, title: "外部委員", description: "必要時得邀請外部專家學者參與，強化調查公正性。" },
      { icon: ShieldOff, title: "利益迴避", description: "與案件當事人有利害關係之成員應主動迴避。" },
    ],
  },
  {
    value: "interview",
    label: "訪談程序",
    eyebrow: "Tab 3",
    title: "訪談程序",
    timelineSteps: [
      { step: "STEP 01", title: "通知", icon: Megaphone, description: "通知雙方當事人調查即將展開。" },
      { step: "STEP 02", title: "訪談", icon: MessagesSquare, description: "分別訪談申訴人、相對人與相關證人。" },
      { step: "STEP 03", title: "蒐證", icon: FileSearch, description: "蒐集文件、通訊紀錄等相關事證。" },
      { step: "STEP 04", title: "紀錄", icon: NotebookPen, description: "完整記錄訪談內容，作為報告依據。" },
    ],
  },
  {
    value: "report",
    label: "調查報告",
    eyebrow: "Tab 4",
    title: "調查報告應包含的內容",
    cardCols: "sm:grid-cols-2 lg:grid-cols-4",
    cards: [
      { icon: ScrollText, title: "摘要", description: "簡述申訴緣由與雙方基本資訊。" },
      { icon: FileText, title: "事實", description: "記錄訪談對象、時間與蒐證過程認定之事實。" },
      { icon: FileCheck2, title: "分析", description: "依事證判斷事件是否構成職場霸凌。" },
      { icon: Gavel, title: "建議", description: "提出後續處理與改善建議。" },
    ],
  },
];

export function InvestigationTabs() {
  const [active, setActive] = React.useState(tabs[0].value);
  const current = tabs.find((t) => t.value === active) ?? tabs[0];

  return (
    <div>
      <div
        role="tablist"
        aria-label="調查程序分頁"
        className="inline-flex flex-wrap gap-1 rounded-lg bg-muted p-1"
      >
        {tabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            role="tab"
            aria-selected={active === tab.value}
            onClick={() => setActive(tab.value)}
            className={cn(
              "rounded-md px-4 py-2 text-sm font-medium transition-colors",
              active === tab.value
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div role="tabpanel" className="pt-10">
        <SectionHeading center={false} eyebrow={current.eyebrow} title={current.title} />
        {current.cards && (
          <div
            className={cn(
              "mt-10 grid grid-cols-1 gap-6",
              current.cardCols ?? "sm:grid-cols-3"
            )}
          >
            {current.cards.map((item) => (
              <InfoCard key={item.title} {...item} className="h-full" />
            ))}
          </div>
        )}
        {current.timelineSteps && (
          <div className="mt-12">
            <Timeline steps={current.timelineSteps} />
          </div>
        )}
      </div>
    </div>
  );
}

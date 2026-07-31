export type SearchEntry = {
  title: string;
  description: string;
  href: string;
  keywords: string[];
};

export const searchIndex: SearchEntry[] = [
  {
    title: "什麼是職場霸凌",
    description: "認識職場霸凌的定義與常見類型",
    href: "/understanding",
    keywords: ["定義", "類型", "判斷原則", "霸凌"],
  },
  {
    title: "雇主責任",
    description: "雇主接獲申訴後的處理義務與保護措施",
    href: "/employer-responsibility",
    keywords: ["雇主", "保護當事人", "防治措施"],
  },
  {
    title: "申訴流程",
    description: "如何提出申訴、受理期限與流程圖",
    href: "/complaint-process",
    keywords: ["申訴", "受理期限", "提出申訴", "10日"],
  },
  {
    title: "調查程序",
    description: "調查小組、訪談、保密與調查報告",
    href: "/investigation",
    keywords: ["調查小組", "調查", "訪談", "保密", "利益迴避"],
  },
  {
    title: "申復流程",
    description: "對調查結果不服時的申復時程與流程",
    href: "/appeal",
    keywords: ["申復", "30日", "申復會議", "重新調查"],
  },
  {
    title: "常見問題 FAQ",
    description: "主管責罵、同事排擠、匿名申訴等常見疑問",
    href: "/faq",
    keywords: ["FAQ", "常見問題", "匿名", "撤回"],
  },
  {
    title: "表單下載",
    description: "申訴書、委任書、撤回書等表單",
    href: "/forms",
    keywords: ["表單", "申訴書", "委任書", "撤回書"],
  },
  {
    title: "官方資源",
    description: "勞動部、職業安全衛生署等外部連結",
    href: "/resources",
    keywords: ["官方資源", "勞動部", "職安署", "法規查詢"],
  },
];

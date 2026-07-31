export type NavItem = {
  title: string;
  href: string;
};

export const siteConfig = {
  name: "職場霸凌防治指導手冊",
  shortName: "職場霸凌防治手冊",
  description:
    "快速了解職場霸凌防治制度、申訴流程、調查程序與相關資源，建立安全、尊重的工作環境。",
  disclaimer:
    "本網站為課程團體作業，內容整理自《職場霸凌防治指導手冊》，實際法規請以政府公告為準。",
};

export const mainNav: NavItem[] = [
  { title: "首頁", href: "/" },
  { title: "認識職場霸凌", href: "/understanding" },
  { title: "雇主責任", href: "/employer-responsibility" },
  { title: "申訴流程", href: "/complaint-process" },
  { title: "調查程序", href: "/investigation" },
  { title: "申復流程", href: "/appeal" },
  { title: "FAQ", href: "/faq" },
  { title: "官方資源", href: "/resources" },
];

export const footerQuickLinks: NavItem[] = [
  { title: "認識職場霸凌", href: "/understanding" },
  { title: "雇主責任", href: "/employer-responsibility" },
  { title: "申訴流程", href: "/complaint-process" },
  { title: "調查程序", href: "/investigation" },
  { title: "申復流程", href: "/appeal" },
  { title: "表單下載", href: "/forms" },
];

export const officialResources: NavItem[] = [
  { title: "勞動部", href: "https://www.mol.gov.tw/" },
  { title: "職業安全衛生署", href: "https://www.osha.gov.tw/" },
  {
    title: "職場霸凌防治專區",
    href: "https://www.osha.gov.tw/48110/48132/48133/",
  },
  { title: "全國法規資料庫", href: "https://law.moj.gov.tw/" },
];

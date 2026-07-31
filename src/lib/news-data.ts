export type NewsItem = {
  year: string;
  title: string;
  summary: string;
};

export const newsData: NewsItem[] = [
  {
    year: "2026",
    title: "職場霸凌防治最新消息",
    summary:
      "勞動部持續推動職場霸凌防治宣導與教育訓練，鼓勵企業建立內部申訴管道，落實友善職場文化。",
  },
  {
    year: "2026",
    title: "企業防治措施查核持續加強",
    summary:
      "主管機關加強對企業防治措施與申訴機制的查核，提醒雇主定期檢視內部規範是否符合最新規定。",
  },
  {
    year: "2025",
    title: "友善職場教育訓練推廣",
    summary:
      "各地方勞工局處持續辦理職場霸凌防治講座，協助企業與員工建立正確觀念與處理流程。",
  },
];

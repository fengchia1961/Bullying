import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";
import { Section } from "@/components/site/section";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { faqData } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "常見問題 FAQ｜職場霸凌防治指導手冊",
  description: "職場霸凌常見問題整理：責罵、排擠、匿名申訴、撤回、調查時程等。",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        title="常見問題"
        description="彙整員工、主管、HR 最常詢問的職場霸凌相關問題。"
        breadcrumb={[{ title: "FAQ" }]}
      />

      <Section className="max-w-3xl">
        <div className="rounded-2xl border border-border bg-card px-6 shadow-sm">
          <FaqAccordion items={faqData} />
        </div>
      </Section>
    </>
  );
}

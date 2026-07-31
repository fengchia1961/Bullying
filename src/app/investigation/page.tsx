import type { Metadata } from "next";

import { PageHeader } from "@/components/site/page-header";
import { Section } from "@/components/site/section";
import { InvestigationTabs } from "@/components/site/investigation-tabs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "調查程序｜職場霸凌防治指導手冊",
  description: "職場霸凌調查程序：調查原則、調查小組、訪談程序與調查報告。",
  path: "/investigation",
});

export default function InvestigationPage() {
  return (
    <>
      <PageHeader
        title="調查程序"
        description="調查小組如何在公正、保密的原則下完成訪談與調查報告。"
        breadcrumb={[{ title: "調查程序" }]}
      />

      <Section>
        <InvestigationTabs />
      </Section>
    </>
  );
}

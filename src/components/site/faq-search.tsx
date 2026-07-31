"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { FaqAccordion, type FaqItem } from "@/components/site/faq-accordion";

export function FaqSearch({ items }: { items: FaqItem[] }) {
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
    );
  }, [items, query]);

  return (
    <div>
      <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-3 shadow-md focus-within:ring-2 focus-within:ring-brand-primary">
        <Search className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="輸入關鍵字，例如：匿名、撤回、申復"
          aria-label="搜尋常見問題"
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-card px-6 shadow-sm">
        {filtered.length > 0 ? (
          <FaqAccordion items={filtered} />
        ) : (
          <p className="py-8 text-center text-sm text-muted-foreground">
            找不到符合「{query}」的問題，試試其他關鍵字。
          </p>
        )}
      </div>
    </div>
  );
}

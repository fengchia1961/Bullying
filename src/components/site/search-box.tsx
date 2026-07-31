"use client";

import * as React from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { searchIndex } from "@/lib/search-data";
import { cn } from "@/lib/utils";

export function SearchBox() {
  const [query, setQuery] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const results = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return searchIndex
      .filter(
        (entry) =>
          entry.title.toLowerCase().includes(q) ||
          entry.description.toLowerCase().includes(q) ||
          entry.keywords.some((k) => k.toLowerCase().includes(q))
      )
      .slice(0, 6);
  }, [query]);

  React.useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div
      id="search"
      ref={containerRef}
      className="relative mx-auto w-full max-w-xl scroll-mt-24"
    >
      <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-3 shadow-md focus-within:ring-2 focus-within:ring-brand-primary">
        <Search className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="搜尋關鍵字，例如：申復、調查小組、受理期限"
          aria-label="搜尋網站內容"
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="清除搜尋"
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>

      {open && query && (
        <div className="absolute inset-x-0 top-full z-20 mt-2 overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
          {results.length > 0 ? (
            <ul className="divide-y divide-border">
              {results.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block px-4 py-3 text-left transition-colors hover:bg-brand-primary/5"
                    )}
                  >
                    <p className="text-sm font-medium text-foreground">
                      {r.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {r.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-4 text-sm text-muted-foreground">
              找不到符合「{query}」的結果，試試其他關鍵字。
            </p>
          )}
        </div>
      )}
    </div>
  );
}

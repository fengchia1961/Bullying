"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, Shield } from "lucide-react";

import { cn } from "@/lib/utils";
import { mainNav } from "@/lib/site-config";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-[72px] w-full border-b transition-colors",
        scrolled
          ? "border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80"
          : "border-transparent bg-background/60 backdrop-blur"
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-base font-bold tracking-tight sm:text-lg"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-primary text-white">
            <Shield className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="hidden sm:inline">職場霸凌防治指導手冊</span>
          <span className="sm:hidden">霸凌防治手冊</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="主導覽">
          {mainNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-brand-primary hover:bg-brand-primary/10 rounded-md",
                  active && "text-brand-primary"
                )}
              >
                {item.title}
                {active && (
                  <span className="absolute inset-x-2 -bottom-[1px] h-0.5 rounded-full bg-brand-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <Link
            href="/?focus=search#search"
            className="hidden h-9 w-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-brand-primary/10 hover:text-brand-primary sm:flex"
            aria-label="搜尋"
          >
            <Search className="h-[18px] w-[18px]" aria-hidden="true" />
          </Link>
          <ThemeToggle />

          <Sheet>
            <SheetTrigger
              render={
                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-brand-primary/10 hover:text-brand-primary lg:hidden"
                  aria-label="開啟選單"
                />
              }
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-left">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary text-white">
                    <Shield className="h-4 w-4" aria-hidden="true" />
                  </span>
                  職場霸凌防治指導手冊
                </SheetTitle>
              </SheetHeader>
              <nav
                className="mt-4 flex flex-col gap-1 px-4"
                aria-label="行動裝置導覽"
              >
                {mainNav.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <SheetClose
                      key={item.href}
                      render={
                        <Link
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "rounded-md px-3 py-2.5 text-base font-medium text-foreground/80 transition-colors hover:bg-brand-primary/10 hover:text-brand-primary",
                            active && "bg-brand-primary/10 text-brand-primary"
                          )}
                        />
                      }
                    >
                      {item.title}
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

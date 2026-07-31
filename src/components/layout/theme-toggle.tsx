"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-brand-primary/10 hover:text-brand-primary"
      aria-label="切換深色／淺色模式"
    >
      <Sun className="h-[18px] w-[18px] dark:hidden" aria-hidden="true" />
      <Moon className="hidden h-[18px] w-[18px] dark:block" aria-hidden="true" />
    </button>
  );
}

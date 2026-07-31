import Link from "next/link";
import { Shield } from "lucide-react";
import {
  siteConfig,
  footerQuickLinks,
  officialResources,
} from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-heading text-base font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary text-white">
                <Shield className="h-4 w-4" aria-hidden="true" />
              </span>
              {siteConfig.shortName}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              整理職場霸凌防治制度、申訴流程、調查程序與相關資源，協助建立安全、尊重的工作環境。
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">快速連結</h3>
            <ul className="mt-3 space-y-2">
              {footerQuickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-brand-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">相關資源</h3>
            <ul className="mt-3 space-y-2">
              {officialResources.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-brand-primary"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">課程資訊</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>大學課程團體作業展示網站</li>
              <li>內容來源：《職場霸凌防治指導手冊》</li>
              <li>
                <Link
                  href="/faq"
                  className="transition-colors hover:text-brand-primary"
                >
                  常見問題
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs leading-relaxed text-muted-foreground">
          <p>&copy; 2026 Workplace Bullying Prevention Guide</p>
          <p className="mt-1">{siteConfig.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}

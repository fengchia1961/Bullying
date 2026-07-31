import { FileText, Scale, Shield, Users } from "lucide-react";

export function HeroIllustration() {
  return (
    <div className="relative mx-auto flex h-72 w-full max-w-md items-center justify-center sm:h-96">
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <circle cx="80" cy="90" r="110" className="fill-brand-secondary/10" />
        <circle cx="330" cy="300" r="90" className="fill-brand-accent/10" />
        <rect
          x="60"
          y="60"
          width="280"
          height="280"
          rx="48"
          className="fill-brand-primary/5"
        />
      </svg>

      <div className="relative z-10 flex h-40 w-40 items-center justify-center rounded-3xl bg-brand-primary text-white shadow-xl sm:h-48 sm:w-48">
        <Shield className="h-20 w-20 sm:h-24 sm:w-24" aria-hidden="true" />
      </div>

      <span className="absolute top-6 left-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-card text-brand-secondary shadow-lg ring-1 ring-border sm:top-8 sm:left-6">
        <Users className="h-7 w-7" aria-hidden="true" />
      </span>
      <span className="absolute right-2 bottom-16 flex h-14 w-14 items-center justify-center rounded-2xl bg-card text-brand-accent shadow-lg ring-1 ring-border sm:right-4">
        <Scale className="h-7 w-7" aria-hidden="true" />
      </span>
      <span className="absolute right-10 top-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-card text-brand-warning shadow-lg ring-1 ring-border sm:top-4">
        <FileText className="h-6 w-6" aria-hidden="true" />
      </span>
    </div>
  );
}

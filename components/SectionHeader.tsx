import type { ReactNode } from "react";

export function SectionHeading({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`m-0 font-display text-[clamp(44px,5.5vw,76px)] leading-[0.95] font-normal uppercase ${className}`}
    >
      {children}
    </h2>
  );
}

export function SectionHeader({ title, children }: { title: ReactNode; children?: ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <SectionHeading>{title}</SectionHeading>
      {children}
    </div>
  );
}

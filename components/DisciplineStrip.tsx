import { disciplines } from "@/lib/content";

export function DisciplineStrip() {
  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-ink bg-accent text-ink">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-x-[0.6em] gap-y-1 px-5 py-4 font-display text-[clamp(18px,2.3vw,30px)] leading-tight tracking-[0.04em] uppercase sm:px-8 sm:py-[18px]">
        {disciplines.flatMap((d, i) => [
          i > 0 ? <span key={`x${i}`}>✕</span> : null,
          <span key={`d${i}`} className="whitespace-nowrap">
            {d}
          </span>,
        ])}
      </div>
    </div>
  );
}

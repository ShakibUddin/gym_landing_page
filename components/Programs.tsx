import { programs } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

export function Programs() {
  return (
    <section id="programs" className="mx-auto flex max-w-[1280px] flex-col gap-12 px-8 pt-28 pb-24 max-sm:pt-20 max-sm:pb-16">
      <SectionHeader
        title={
          <>
            Pick your
            <br />
            training
          </>
        }
      >
        <p className="m-0 max-w-[420px] text-soft">
          Every program runs on a 6-week cycle with tracked progressions. Mix and match — all classes are included in
          Unlimited.
        </p>
      </SectionHeader>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-0.5 border-2 border-line bg-line">
        {programs.map((p) => (
          <article key={p.number} className="flex min-h-[300px] flex-col gap-4 bg-ink px-7 pt-8 pb-9">
            <span className="font-display text-[22px] text-accent">{p.number}</span>
            <h3 className="m-0 font-display text-[34px] leading-none font-normal uppercase">{p.name}</h3>
            <p className="m-0 grow text-soft">{p.description}</p>
            <span className="text-sm font-semibold tracking-[0.1em] text-muted uppercase">{p.meta}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

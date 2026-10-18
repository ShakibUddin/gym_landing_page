import Image from "next/image";
import { heroImage } from "@/lib/content";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-[1280px] flex-wrap items-stretch gap-12 px-8 pt-[72px] pb-[88px] max-sm:pt-12 max-sm:pb-16">
      <div className="flex min-w-0 flex-[1_1_440px] flex-col justify-center gap-7">
        <p className="m-0 flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-muted uppercase">
          <span className="inline-block size-2.5 shrink-0 bg-accent" />
          Open 5am – 11pm · Eastside Foundry District
        </p>
        <h1 className="m-0 font-display text-[clamp(48px,6vw,96px)] leading-[0.92] font-normal tracking-[0.005em] uppercase">
          Built for
          <br />
          the work
          <br />
          you <span className="text-accent">show up</span> for.
        </h1>
        <p className="m-0 max-w-[520px] text-xl text-soft">
          Strength, conditioning and coaching under one roof. No mirrors-and-machines filler — just platforms, racks,
          real programming and people who know your name.
        </p>
        <div className="flex flex-wrap gap-3.5 pt-2">
          <a
            href="#join"
            className="inline-flex min-h-14 items-center gap-2.5 bg-accent px-[30px] text-base font-bold tracking-[0.08em] text-ink uppercase no-underline hover:text-ink"
          >
            Claim your free week
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path d="M3 9h12M10 4l5 5-5 5" />
            </svg>
          </a>
          <a
            href="#membership"
            className="inline-flex min-h-14 items-center border-[1.5px] border-paper px-[30px] text-base font-semibold tracking-[0.08em] uppercase no-underline"
          >
            See memberships
          </a>
        </div>
      </div>
      <div className="ph-hero relative flex min-h-[680px] min-w-0 flex-[1.4_1_440px] items-end max-sm:min-h-[480px]">
        <Image
          src={heroImage}
          placeholder="blur"
          alt="Athlete mid-set, gripping a heavy dumbbell in a bent-over row"
          fill
          priority
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover object-left"
        />
        <div className="relative m-5 flex max-w-[280px] flex-col gap-1.5 border border-line bg-ink px-[22px] py-5">
          <span className="text-[13px] font-semibold tracking-[0.14em] text-accent uppercase">Next class</span>
          <span className="font-display text-[30px] leading-[1.05] uppercase">Barbell Strength</span>
          <span className="text-[15px] text-soft">Today · 6:00pm · Platform room</span>
        </div>
      </div>
    </section>
  );
}

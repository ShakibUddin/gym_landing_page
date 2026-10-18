import { plans } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

export function Membership() {
  return (
    <section id="membership" className="bg-paper text-ink">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-8 py-28 max-sm:py-20">
        <SectionHeader title="Membership">
          <p className="m-0 max-w-[420px] text-[#3e3d38]">
            No joining fee. No annual contract. Pause or cancel any time with 30 days&rsquo; notice.
          </p>
        </SectionHeader>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] items-stretch gap-5">
          {plans.map((p) => {
            const f = p.featured;
            return (
              <article
                key={p.name}
                className={`relative flex flex-col gap-5 border-[1.5px] border-ink px-8 py-9 ${
                  f ? "bg-ink text-paper" : "bg-white"
                }`}
              >
                {f && (
                  <span className="absolute -top-3.5 left-8 bg-accent px-3 py-1 text-[13px] font-bold tracking-[0.12em] text-ink uppercase">
                    Most popular
                  </span>
                )}
                <h3 className="m-0 font-display text-[30px] font-normal uppercase">{p.name}</h3>
                <p className="m-0 flex items-baseline gap-2">
                  <span className={`font-display text-[52px] leading-none ${f ? "text-accent" : ""}`}>{p.price}</span>
                  <span className={f ? "text-soft" : "text-[#3e3d38]"}>/ month</span>
                </p>
                <ul
                  className={`m-0 flex grow list-none flex-col gap-2.5 p-0 ${f ? "text-[#e2e0d8]" : "text-[#2a2925]"}`}
                >
                  {p.features.map((feat) => (
                    <li key={feat}>{feat}</li>
                  ))}
                </ul>
                <a
                  href="#join"
                  className={`flex min-h-[52px] items-center justify-center font-bold tracking-[0.08em] uppercase no-underline ${
                    f ? "bg-accent text-ink hover:text-ink" : "border-[1.5px] border-ink text-ink hover:text-ink"
                  }`}
                >
                  Choose {p.name}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

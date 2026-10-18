import Image from "next/image";
import { coaches } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

export function Coaches() {
  return (
    <section id="coaches" className="mx-auto flex max-w-[1280px] flex-col gap-12 px-8 pt-6 pb-28 max-sm:pb-20">
      <SectionHeader title="Your coaches">
        <p className="m-0 max-w-[420px] text-soft">
          Certified, experienced, and on the floor every session — not behind a desk.
        </p>
      </SectionHeader>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-6">
        {coaches.map((c) => (
          <article key={c.name} className="flex flex-col gap-3.5">
            <div className="ph-hero relative aspect-[4/5]">
              <Image
                src={c.image}
                alt={`Portrait of ${c.name}`}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
                style={{ objectPosition: `${c.position} center` }}
              />
            </div>
            <h3 className="m-0 font-display text-[28px] font-normal uppercase">{c.name}</h3>
            <p className="m-0 text-[15px] font-semibold tracking-[0.06em] text-muted uppercase">{c.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

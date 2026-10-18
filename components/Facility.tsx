import Image from "next/image";
import { facilityFeatures, facilityPhotos } from "@/lib/content";
import { SectionHeading } from "./SectionHeader";

export function Facility() {
  return (
    <section className="border-y border-line bg-panel">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-14 px-8 py-24 max-sm:py-16">
        <div className="grid min-w-0 flex-[1_1_440px] grid-cols-2 gap-3">
          {facilityPhotos.map((p) => (
            <div
              key={p.src.src}
              className={`ph-panel relative ${p.wide ? "col-span-2 h-[280px]" : "h-[200px]"} max-sm:h-[180px]`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                placeholder="blur"
                sizes={p.wide ? "(min-width: 1280px) 600px, (min-width: 640px) 50vw, 100vw" : "(min-width: 1280px) 300px, (min-width: 640px) 25vw, 50vw"}
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-7">
          <SectionHeading>The floor</SectionHeading>
          <p className="m-0 max-w-[480px] text-soft">
            12,000 sq ft of space designed around the way people really train. Here&rsquo;s what&rsquo;s waiting for
            you:
          </p>
          <ul className="m-0 flex list-none flex-col border-t border-line p-0">
            {facilityFeatures.map((f) => (
              <li key={f} className="flex items-center gap-4 border-b border-line py-[18px] text-[19px] font-semibold">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2.4"
                  aria-hidden="true"
                  className="shrink-0"
                >
                  <path d="M4 11.5l4.5 4.5L18 6" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

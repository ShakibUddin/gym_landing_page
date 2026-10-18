import { highlightedClass, schedule, scheduleDays } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

const headCell = "px-5 py-4 text-[13px] font-semibold tracking-[0.14em] text-muted uppercase";

export function Schedule() {
  return (
    <section id="schedule" className="mx-auto flex max-w-[1280px] flex-col gap-10 px-8 pt-28 pb-24 max-sm:pt-20 max-sm:pb-16">
      <SectionHeader title="This week">
        <a href="#schedule" className="py-3 text-[15px] font-semibold tracking-[0.08em] uppercase">
          Full timetable →
        </a>
      </SectionHeader>
      <div
        role="region"
        aria-label="Weekly class timetable, scrolls horizontally on small screens"
        tabIndex={0}
        className="overflow-x-auto border border-line"
      >
        <table className="w-full min-w-[760px] border-collapse text-base">
          <caption className="sr-only">Class timetable, Monday to Saturday</caption>
          <thead>
            <tr className="bg-panel text-left">
              <th scope="col" className={headCell}>
                Time
              </th>
              {scheduleDays.map((d) => (
                <th key={d} scope="col" className={headCell}>
                  {d}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {schedule.map((row) => (
              <tr key={row.time} className="border-t border-line">
                <th scope="row" className="px-5 py-[18px] text-left font-display text-xl font-normal">
                  {row.time}
                </th>
                {row.classes.map((c, i) => (
                  <td key={i} className={`px-5 py-[18px] ${c === "—" ? "text-muted" : ""}`}>
                    {c === highlightedClass ? (
                      <span className="bg-accent px-2 py-[3px] font-bold text-ink">{c}</span>
                    ) : (
                      c
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

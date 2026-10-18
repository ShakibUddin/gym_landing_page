import { footer } from "@/lib/content";

const colHead = "text-[13px] font-semibold tracking-[0.14em] text-muted uppercase";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1280px] flex-wrap justify-between gap-10 px-8 pt-14 pb-10">
        <div className="flex max-w-[320px] flex-col gap-3">
          <span className="font-display text-[32px] tracking-[0.04em]">IRONWORKS</span>
          <p className="m-0 text-[15px] text-muted">
            {footer.address[0]}
            <br />
            {footer.address[1]}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-14 gap-y-10">
          <div className="flex flex-col gap-2.5 text-[15px]">
            <span className={colHead}>Hours</span>
            {footer.hours.map((h) => (
              <span key={h}>{h}</span>
            ))}
          </div>
          <div className="flex flex-col gap-2.5 text-[15px]">
            <span className={colHead}>Contact</span>
            {footer.contact.map((c) => (
              <a key={c.label} href={c.href} className="inline-block py-1">
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] border-t border-line px-8 pt-5 pb-8 text-sm text-muted">
        © 2026 Ironworks Gym
      </div>
    </footer>
  );
}

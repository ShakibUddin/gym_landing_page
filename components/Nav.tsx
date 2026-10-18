"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/lib/content";

const linkCls = "py-2.5 no-underline max-md:block max-md:border-b max-md:border-line max-md:py-4";

export function Nav() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    // Close the menu if the viewport grows past the mobile breakpoint
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => mq.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="border-b border-line">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-x-8 px-8 py-5 max-sm:px-5"
      >
        <a href="#top" onClick={close} className="flex items-center gap-2.5 no-underline">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M3 10v8M7 6v16M21 6v16M25 10v8M7 14h14" />
          </svg>
          <span className="font-display text-[26px] tracking-[0.04em]">IRONWORKS</span>
        </a>

        <button
          ref={buttonRef}
          type="button"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
          className="inline-flex size-12 cursor-pointer items-center justify-center border border-line bg-transparent text-paper md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" aria-hidden="true">
            {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>

        <div
          id="nav-menu"
          className={`${open ? "flex" : "hidden"} w-full flex-col pt-4 md:flex md:w-auto md:flex-row md:flex-wrap md:items-center md:gap-x-7 md:gap-y-2 md:pt-0 text-[15px] font-semibold tracking-[0.06em] uppercase`}
        >
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={close} className={linkCls}>
              {l.label}
            </a>
          ))}
          <a
            href="#join"
            onClick={close}
            className="bg-accent px-[22px] py-3 font-bold text-ink no-underline hover:text-ink max-md:mt-5 max-md:py-4 max-md:text-center"
          >
            Free trial
          </a>
        </div>
      </nav>
    </header>
  );
}

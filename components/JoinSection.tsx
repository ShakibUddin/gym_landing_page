import { JoinForm } from "./JoinForm";

export function JoinSection() {
  return (
    <section id="join" className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-12 px-8 py-28 max-sm:py-20">
      <div className="flex min-w-0 flex-[999_1_480px] flex-col gap-5">
        <h2 className="m-0 font-display text-[clamp(56px,7.5vw,112px)] leading-[0.92] font-normal uppercase">
          First week
          <br />
          <span className="text-accent">on us.</span>
        </h2>
        <p className="m-0 max-w-[460px] text-[19px] text-soft">
          Seven days, every class, no card required. Drop your details and a coach will reach out to book your intro.
        </p>
      </div>
      <JoinForm />
    </section>
  );
}

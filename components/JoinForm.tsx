"use client";

import { useState, type FormEvent } from "react";
import { goals } from "@/lib/content";

type Errors = { name?: string; email?: string };

const labelCls = "text-[13px] font-semibold tracking-[0.14em] text-soft uppercase";
const fieldCls = "min-h-[52px] border bg-ink px-4 text-[17px] text-paper placeholder:text-[#8e8c84]";

function validate(name: string, email: string): Errors {
  const errors: Errors = {};
  if (name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!email.trim()) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.email = "Please enter a valid email address.";
  return errors;
}

export function JoinForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const goal = String(data.get("goal") ?? "");

    const found = validate(name, email);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setSubmitted(false);
      form.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
      return;
    }

    console.log("Join form submitted:", { name: name.trim(), email: email.trim(), goal });
    setSubmitted(true);
    form.reset();
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="flex min-w-0 flex-[1_1_380px] flex-col gap-[18px] border border-line bg-panel px-8 py-9 max-sm:px-5"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="join-name" className={labelCls}>
          Name
        </label>
        <input
          id="join-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your full name"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "join-name-error" : undefined}
          className={`${fieldCls} ${errors.name ? "border-red-400" : "border-[#4a4943]"}`}
        />
        {errors.name && (
          <p id="join-name-error" role="alert" className="m-0 text-sm text-red-400">
            {errors.name}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="join-email" className={labelCls}>
          Email
        </label>
        <input
          id="join-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "join-email-error" : undefined}
          className={`${fieldCls} ${errors.email ? "border-red-400" : "border-[#4a4943]"}`}
        />
        {errors.email && (
          <p id="join-email-error" role="alert" className="m-0 text-sm text-red-400">
            {errors.email}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="join-goal" className={labelCls}>
          Main goal
        </label>
        <select id="join-goal" name="goal" className={`${fieldCls} border-[#4a4943]`}>
          {goals.map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="mt-1.5 min-h-14 cursor-pointer border-0 bg-accent text-base font-bold tracking-[0.08em] text-ink uppercase"
      >
        Start my free week
      </button>
      {submitted && (
        <p role="status" className="m-0 text-[15px] text-accent">
          Thanks — a coach will be in touch to book your intro.
        </p>
      )}
    </form>
  );
}

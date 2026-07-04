"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/lib/content";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

const fieldClasses =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 transition";

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = `New enquiry from ${form.name}`;
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company || "—"}`,
      "",
      form.message,
    ];
    const mailto = `mailto:${company.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
  };

  const contactRows = [
    {
      icon: Mail,
      label: "Email us",
      value: company.email,
      href: `mailto:${company.email}`,
    },
    ...company.phones.map((phone) => ({
      icon: Phone,
      label: "Call us",
      value: phone,
      href: `tel:${phone.replace(/\s+/g, "")}`,
    })),
    {
      icon: MapPin,
      label: "Find us",
      value: company.location,
      href: undefined,
    },
  ];

  return (
    <Section id="contact">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
        {/* LEFT: heading + contact details */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Get in touch"
            title="Let's talk about your"
            accent="cloud."
            subtitle="Tell us where you are and where you want to be. We'll reply within one business day."
          />

          <div className="mt-8 space-y-4">
            {contactRows.map((row, i) => {
              const RowIcon = row.icon;
              const inner = (
                <span className="inline-flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03]">
                    <RowIcon
                      size={18}
                      strokeWidth={1.6}
                      className="text-brand-cyan"
                    />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-[0.14em] text-slate-500">
                      {row.label}
                    </span>
                    <span className="text-sm font-medium text-slate-300 transition group-hover:text-white">
                      {row.value}
                    </span>
                  </span>
                </span>
              );

              return (
                <Reveal key={`${row.label}-${row.value}`} delay={i * 0.06}>
                  {row.href ? (
                    <a href={row.href} className="group block w-fit">
                      {inner}
                    </a>
                  ) : (
                    <div className="group w-fit">{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* RIGHT: form card */}
        <Reveal delay={0.12}>
          <div className="gradient-border rounded-2xl">
            <div className="glass rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-gradient text-ink-950 shadow-glow">
                    <Check size={28} strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-white">
                    Almost there
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-400">
                    We&apos;ve opened your email app with the message ready — just
                    hit send and we&apos;ll reply within one business day. Nothing
                    happened? Email us directly at{" "}
                    <a
                      href={`mailto:${company.email}`}
                      className="text-brand-cyan transition hover:text-white"
                    >
                      {company.email}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-medium text-slate-400 transition hover:text-white"
                  >
                    ← Back to the form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-xs text-slate-400"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange("name")}
                      placeholder="Jane Cooper"
                      autoComplete="name"
                      className={fieldClasses}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1.5 block text-xs text-slate-400"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange("email")}
                      placeholder="jane@company.com"
                      autoComplete="email"
                      className={fieldClasses}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-company"
                      className="mb-1.5 block text-xs text-slate-400"
                    >
                      Company{" "}
                      <span className="text-slate-500">(optional)</span>
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange("company")}
                      placeholder="Acme Inc."
                      autoComplete="organization"
                      className={fieldClasses}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-xs text-slate-400"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange("message")}
                      placeholder="Tell us about your cloud goals…"
                      className={`${fieldClasses} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-base font-semibold text-ink-950 transition hover:-translate-y-0.5"
                  >
                    Send message
                    <ArrowRight
                      size={18}
                      strokeWidth={2}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    Prefer email? Reach us at{" "}
                    <a
                      href={`mailto:${company.email}`}
                      className="text-slate-400 transition hover:text-white"
                    >
                      {company.email}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { plans } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <Section id="pricing">
      <SectionHeading
        eyebrow="Managed plans"
        title="Simple pricing,"
        accent="serious operations."
        subtitle="Every plan includes 24/7 monitoring, security and backups. Scale up as you grow."
      />

      {/* Billing toggle */}
      <Reveal delay={0.12}>
        <div className="mt-8 flex justify-center">
          <div
            className="glass inline-flex items-center gap-1 rounded-full p-1"
            role="group"
            aria-label="Billing period"
          >
            <button
              type="button"
              aria-pressed={!yearly}
              onClick={() => setYearly(false)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                !yearly
                  ? "bg-brand-gradient text-ink-950 shadow-glow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              aria-pressed={yearly}
              onClick={() => setYearly(true)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                yearly
                  ? "bg-brand-gradient text-ink-950 shadow-glow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Yearly
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                  yearly
                    ? "bg-ink-950/15 text-ink-950"
                    : "bg-brand-cyan/10 text-brand-cyan"
                }`}
              >
                Save ~2 months
              </span>
            </button>
          </div>
        </div>
      </Reveal>

      {/* Plans grid */}
      <div className="mt-12 grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
        {plans.map((plan, i) => {
          const price = yearly ? plan.yearly : plan.monthly;
          const suffix = yearly ? "/yr" : "/mo";

          return (
            <Reveal key={plan.name} delay={i * 0.06}>
              <div
                className={
                  plan.featured
                    ? "gradient-border rounded-2xl shadow-glow lg:scale-[1.03]"
                    : ""
                }
              >
                <div
                  className={
                    plan.featured
                      ? "relative flex flex-col rounded-2xl bg-ink-900/80 p-8"
                      : "surface-card relative flex flex-col rounded-2xl p-8"
                  }
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-gradient px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-950 shadow-glow">
                      Most popular
                    </span>
                  )}

                  {/* Header */}
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {plan.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">{plan.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="mt-6">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-4xl font-bold text-white">
                        ${price}
                      </span>
                      <span className="text-base text-slate-500">{suffix}</span>
                    </div>
                    <p className="mt-1 h-4 text-xs text-slate-500">
                      {yearly
                        ? `≈ $${Math.round(plan.yearly / 12)}/mo billed annually`
                        : ""}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check
                          size={18}
                          strokeWidth={1.6}
                          className="mt-0.5 shrink-0 text-brand-cyan"
                          aria-hidden
                        />
                        <span className="text-sm text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    href="#contact"
                    variant={plan.featured ? "primary" : "secondary"}
                    size="md"
                    className="mt-8 w-full"
                  >
                    Get started
                  </Button>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

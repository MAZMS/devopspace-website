import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { process } from "@/lib/content";

export function Process() {
  return (
    <Section id="process">
      <SectionHeading
        eyebrow="How we work"
        title="From assessment to"
        accent="always-on operations."
        subtitle="A proven path we've refined since 2008 — clear at every step."
      />

      <div className="relative mt-14">
        {/* Horizontal gradient connector — sits behind the number tiles on lg */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-brand-cyan/30 via-brand-blue/30 to-brand-violet/30 lg:block"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="group relative flex h-full flex-col rounded-2xl">
                {/* Numbered tile — overlaps the connector line */}
                <span className="relative grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-ink-900 shadow-card transition-colors duration-300 group-hover:border-white/20">
                  <span className="gradient-text font-display text-base font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>

                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

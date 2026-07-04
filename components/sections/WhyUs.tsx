import { Users, ShieldCheck, Gauge, Activity, type LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { stats, company } from "@/lib/content";

type Value = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const values: Value[] = [
  {
    icon: Users,
    title: "Senior engineers",
    description: "Cloud specialists on every account — no hand-offs to juniors.",
  },
  {
    icon: ShieldCheck,
    title: "Security-first",
    description: "Identity, backups and guardrails baked in from day one.",
  },
  {
    icon: Gauge,
    title: "Cost-aware",
    description: "Continuous FinOps that trims spend without slowing teams.",
  },
  {
    icon: Activity,
    title: "Always-on",
    description: "24/7 follow-the-sun monitoring and incident response.",
  },
];

export function WhyUs() {
  return (
    <Section id="about">
      <SectionHeading
        align="left"
        eyebrow="Why DevOpSpace"
        title="A partner that"
        accent="owns the outcome."
        subtitle={`Since ${company.founded} we've helped teams move to the cloud and stay there — calmly, securely and cost-consciously.`}
      />

      {/* Two-column: narrative + value cards */}
      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        {/* Left: narrative */}
        <Reveal className="flex flex-col justify-center gap-5">
          <p className="text-slate-400 leading-relaxed">
            For {company.yearsInBusiness}+ years we&apos;ve been designing,
            building and running cloud platforms across{" "}
            <span className="text-slate-300">AWS, Azure and GCP</span> — from
            first migration to steady-state operations. That depth means fewer
            surprises, faster decisions and architecture that ages well.
          </p>
          <p className="text-slate-400 leading-relaxed">
            You work with{" "}
            <span className="text-slate-300">one accountable team</span>{" "}
            that owns delivery end to end. Security and cost discipline aren&apos;t
            add-ons here — they&apos;re part of how we design, ship and operate
            everything we touch.
          </p>
        </Reveal>

        {/* Right: 2x2 value cards */}
        <div className="grid grid-cols-2 gap-4">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.06}>
              <div className="surface-card h-full p-5">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-brand-cyan">
                  <value.icon size={18} strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 font-display text-sm font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Full-width stats band */}
      <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center transition-colors duration-300 hover:border-white/20">
              <div className="gradient-text font-display text-3xl font-bold sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-slate-300">{stat.label}</div>
              {stat.sublabel && (
                <div className="mt-0.5 text-xs text-slate-500">
                  {stat.sublabel}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

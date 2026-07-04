import { MapPin, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies } from "@/lib/content";

export function CaseStudies() {
  return (
    <Section id="work">
      <SectionHeading
        eyebrow="Selected work"
        title="Outcomes, not just"
        accent="deployments."
        subtitle="A few engagements that show how we think and deliver."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {caseStudies.map((study, i) => (
          <Reveal key={study.title} delay={i * 0.06}>
            <article className="gradient-border group h-full rounded-2xl">
              <div className="glass flex h-full flex-col rounded-2xl p-7 transition-transform duration-300 group-hover:-translate-y-1">
                {/* tags */}
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* title */}
                <h3 className="mt-4 font-display text-xl font-semibold text-white">
                  {study.title}
                </h3>

                {/* location */}
                <span className="mt-2 inline-flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin size={13} strokeWidth={1.6} />
                  {study.location}
                </span>

                {/* summary */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                  {study.summary}
                </p>

                {/* result footer */}
                <div className="mt-5 flex items-end justify-between gap-4 border-t border-white/10 pt-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-500">
                      Result
                    </div>
                    <div className="mt-1 font-display font-semibold gradient-text">
                      {study.result}
                    </div>
                  </div>
                  <span
                    aria-hidden
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-all duration-300 group-hover:border-white/20 group-hover:bg-brand-gradient group-hover:text-ink-950"
                  >
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.6}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { solutions } from "@/lib/content";

export function Solutions() {
  return (
    <Section id="solutions">
      <SectionHeading
        eyebrow="Platforms we manage"
        title="Solutions we"
        accent="run for you."
        subtitle="Best-in-class tools, fully managed — you get the value without the operational overhead."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution, i) => (
          <Reveal key={solution.name} delay={i * 0.05}>
            <article className="surface-card group relative h-full p-6">
              {/* Managed pill */}
              <span className="absolute right-5 top-5 rounded-full border border-white/10 px-2 py-0.5 text-[11px] text-slate-500">
                Managed
              </span>

              {/* Monogram tile */}
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-brand-gradient-soft">
                <span className="font-display text-lg font-bold gradient-text">
                  {solution.name.charAt(0)}
                </span>
              </div>

              <p className="mt-4 text-xs font-medium uppercase tracking-wider text-brand-cyan">
                {solution.category}
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold text-white">
                {solution.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {solution.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

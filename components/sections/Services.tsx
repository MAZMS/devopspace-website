import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { services } from "@/lib/content";

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="What we do"
        title="Everything your cloud needs,"
        accent="under one roof."
        subtitle="From first migration to 24/7 operations — a full-stack team across strategy, build, security and run."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 0.05}>
            <article className="surface-card group flex h-full flex-col rounded-2xl border border-white/10 p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-brand-gradient-soft">
                <Icon name={service.icon} className="text-brand-cyan" size={22} />
              </span>

              <h3 className="mt-4 font-display text-base font-semibold text-white">
                {service.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {service.description}
              </p>

              <ul className="mt-4 space-y-1.5">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <Check
                      size={14}
                      strokeWidth={1.6}
                      className="mt-0.5 shrink-0 text-brand-cyan"
                      aria-hidden
                    />
                    <span className="text-xs text-slate-400">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

import { Quote, Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow="Client love"
        title="Teams that"
        accent="sleep better at night."
        subtitle="What founders and leaders say about working with DevOpSpace."
      />

      <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:balance]">
        {testimonials.map((t, i) => (
          <Reveal key={t.company} delay={(i % 3) * 0.06} className="mb-6 break-inside-avoid">
            <figure className="surface-card p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={14} className="fill-brand-cyan text-brand-cyan" />
                  ))}
                </div>
                <Quote size={22} className="text-brand-cyan/50" strokeWidth={1.6} aria-hidden />
              </div>

              <blockquote className="mt-4 text-[15px] leading-relaxed text-slate-200">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  aria-hidden
                  className="grid h-10 w-10 place-items-center rounded-full bg-brand-gradient font-display font-bold text-ink-950"
                >
                  {t.company.charAt(0)}
                </span>
                <div className="leading-tight">
                  <div className="text-sm font-medium text-white">{t.author}</div>
                  <div className="text-xs text-slate-500">{t.company}</div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

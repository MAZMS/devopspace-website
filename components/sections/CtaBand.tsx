import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/lib/content";

export function CtaBand() {
  return (
    <section id="cta" className="relative py-24">
      <div className="container-page">
        <Reveal y={32}>
          <div className="gradient-border rounded-[1.7rem] p-px shadow-card">
            <div className="relative overflow-hidden rounded-[1.6rem] bg-ink-900 px-8 py-16 text-center sm:px-16">
              {/* Decorative background layers (behind content) */}
              <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                {/* soft blurred blobs */}
                <div className="absolute -left-16 -top-16 h-72 w-72 rounded-full bg-brand-blue/25 blur-[100px]" />
                <div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-brand-violet/25 blur-[100px]" />
                {/* faint centered radial wash */}
                <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-cyan/10 blur-[120px]" />
                {/* subtle grid texture */}
                <div
                  className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center">
                <Badge>Ease your cloud journey · since {company.founded}</Badge>

                <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
                  Ready to ease your{" "}
                  <span className="gradient-text">cloud journey</span>?
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                  Talk to the team that has planned, built, secured and run cloud
                  platforms since {company.founded}. No buzzwords — just a clear
                  plan and one accountable partner.
                </p>

                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button href="#contact" size="lg">
                    Talk to an engineer
                    <ArrowRight
                      size={18}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Button>
                  <Button href="#pricing" variant="secondary" size="lg">
                    See pricing
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

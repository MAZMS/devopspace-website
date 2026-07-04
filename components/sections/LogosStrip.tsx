import { clients } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function LogosStrip() {
  const marquee = [...clients, ...clients];

  return (
    <section
      aria-label="Trusted by teams that ship on the cloud"
      className="relative border-y border-white/10 py-10"
    >
      <Reveal>
        <p className="mb-7 text-center text-xs uppercase tracking-widest text-slate-500">
          Trusted by teams that ship on the cloud
        </p>
      </Reveal>

      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-14">
          {marquee.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center gap-14"
              aria-hidden={i >= clients.length}
            >
              <span className="whitespace-nowrap text-lg font-medium text-slate-400 transition-colors duration-300 hover:text-slate-200">
                {name}
              </span>
              <span
                aria-hidden
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/15"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

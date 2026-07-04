import { cn } from "@/lib/utils";
import { Badge } from "./Badge";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  accent,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  /** Optional trailing words rendered in the brand gradient. */
  accent?: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <Badge>{eyebrow}</Badge>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "max-w-3xl text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl",
            centered && "mx-auto",
          )}
        >
          {title}
          {accent && (
            <>
              {" "}
              <span className="gradient-text">{accent}</span>
            </>
          )}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg",
              centered && "mx-auto",
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:opacity-50";

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-gradient bg-[length:200%_100%] text-ink-950 font-semibold shadow-[0_10px_30px_-10px_rgba(56,189,248,0.6)] hover:bg-[position:100%_0] hover:shadow-[0_16px_40px_-12px_rgba(139,92,246,0.65)] hover:-translate-y-0.5",
  secondary:
    "glass text-white hover:bg-white/[0.08] hover:border-white/25 hover:-translate-y-0.5",
  ghost: "text-slate-300 hover:text-white hover:bg-white/5",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  external,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
}) {
  const classes = cn(base, sizes[size], variants[variant], className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}

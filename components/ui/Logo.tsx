import { cn } from "@/lib/utils";

export function Logo({
  className,
  showWord = true,
}: {
  className?: string;
  showWord?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient shadow-glow">
        <svg
          width="22"
          height="22"
          viewBox="0 0 64 64"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="26"
            cy="32"
            r="9.5"
            stroke="#05070F"
            strokeWidth="5"
            fill="none"
          />
          <circle
            cx="40"
            cy="32"
            r="9.5"
            stroke="#05070F"
            strokeWidth="5"
            fill="none"
          />
        </svg>
      </span>
      {showWord && (
        <span className="font-display text-lg font-semibold tracking-tight text-white">
          DevOp<span className="gradient-text">Space</span>
        </span>
      )}
    </span>
  );
}

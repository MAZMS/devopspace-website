/** Fixed, full-page ambient backdrop: grid, top aurora glow and vignette. */
export function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* base */}
      <div className="absolute inset-0 bg-ink-950" />

      {/* subtle grid */}
      <div className="absolute inset-0 bg-grid-lines bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_75%)]" />

      {/* aurora glows */}
      <div className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-brand-blue/20 blur-[130px]" />
      <div className="absolute -top-24 right-[8%] h-[28rem] w-[28rem] rounded-full bg-brand-violet/20 blur-[120px]" />
      <div className="absolute top-[10%] left-[2%] h-[24rem] w-[24rem] rounded-full bg-brand-cyan/10 blur-[120px]" />

      {/* bottom vignette */}
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-ink-950 to-transparent" />
    </div>
  );
}

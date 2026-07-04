"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cloud, ShieldCheck, Activity, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { company } from "@/lib/content";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const techChips = ["AWS", "Azure", "Kubernetes", "Terraform", "DevOps"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* local hero glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-blue/20 blur-[120px]" />
      </div>

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          <motion.div variants={item}>
            <Badge>Cloud &amp; DevOps partner · since {company.founded}</Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.1rem]"
          >
            {company.headline}
            <br className="hidden sm:block" />{" "}
            <span className="gradient-text">{company.headlineAccent}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
          >
            {company.subheadline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href="#contact" size="lg">
              Start your cloud journey
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
            <Button href="#services" variant="secondary" size="lg">
              Explore services
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <span className="text-xs uppercase tracking-[0.16em] text-slate-500">
              Built on
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {techChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-300"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right: floating ops console */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-brand-gradient-soft blur-2xl" />
          <div className="gradient-border glass rounded-[1.5rem] p-1.5 shadow-card">
            <div className="rounded-[1.15rem] bg-ink-900/80 p-5">
              {/* window chrome */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/70" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/70" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
                </div>
                <span className="font-mono text-xs text-slate-500">
                  devopspace · ops console
                </span>
              </div>

              {/* status tiles */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { icon: Activity, label: "Uptime", value: "99.99%" },
                  { icon: Cloud, label: "Deploys/wk", value: "128" },
                  { icon: ShieldCheck, label: "Cost saved", value: "-32%" },
                ].map((tile) => (
                  <div
                    key={tile.label}
                    className="rounded-xl border border-white/5 bg-white/[0.02] p-3"
                  >
                    <tile.icon size={16} className="text-brand-cyan" />
                    <div className="mt-2 font-display text-lg font-semibold text-white">
                      {tile.value}
                    </div>
                    <div className="text-[11px] text-slate-500">{tile.label}</div>
                  </div>
                ))}
              </div>

              {/* pipeline */}
              <div className="mt-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-400">
                    pipeline · main
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2 py-0.5 text-[11px] font-medium text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    passing
                  </span>
                </div>
                <div className="mt-3 space-y-2">
                  {["build", "test", "deploy"].map((stage, i) => (
                    <div key={stage} className="flex items-center gap-3">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                        <Check size={12} />
                      </span>
                      <span className="w-16 font-mono text-xs text-slate-400">
                        {stage}
                      </span>
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1, delay: 0.6 + i * 0.2 }}
                          className="h-full rounded-full bg-brand-gradient"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* floating chip */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-5 -left-5 hidden items-center gap-2 rounded-2xl border border-white/10 bg-ink-900/90 px-4 py-3 shadow-glow-violet backdrop-blur-xl sm:flex"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-gradient text-ink-950">
              <ShieldCheck size={16} />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-white">24/7 managed</div>
              <div className="text-[11px] text-slate-400">follow-the-sun ops</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

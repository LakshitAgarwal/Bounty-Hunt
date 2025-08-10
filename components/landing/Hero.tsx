"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type HeroProps = {
  className?: string;
};

export default function Hero({ className }: HeroProps) {
  return (
    <section
      className={cn(
        "relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-24 sm:py-28 md:py-32 lg:py-40",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
      >
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        Now live: Discover paid GitHub issues
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="text-center text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
      >
        Find and ship high‑quality bounties
        <br className="hidden sm:block" />
        from open‑source projects
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="max-w-2xl text-center text-base leading-7 text-white/70 sm:text-lg"
      >
        We aggregate paid issues across GitHub. Track skills and repos you care
        about, apply with confidence, and get paid fast when work is accepted.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="flex flex-col items-center gap-3 sm:flex-row"
      >
        <a
          href="#browse"
          className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-black shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
        >
          Browse bounties
        </a>
        <a
          href="#watchlist"
          className="rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/10"
        >
          Create watchlist
        </a>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(50%_50%_at_50%_0%,rgba(59,130,246,0.25)_0%,rgba(59,130,246,0.06)_40%,rgba(59,130,246,0)_80%)]" />
    </section>
  );
}

import { motion } from "motion/react";
import { ArrowRight, Sparkles, ShieldCheck, Star } from "lucide-react";
import { Starfield } from "./Background";
import { PathModal } from "./PathModal";

export function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 cosmic-bg" />
      <div className="absolute inset-0 grid-faint opacity-60" />
      <Starfield count={90} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-foreground/80">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-400" />
            </span>
            Personalized cosmic guidance · 100% private
          </div>

          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]">
            Discover what your{" "}
            <span className="text-gradient-gold">numbers</span> reveal about{" "}
            <span className="text-gradient-luxe">your future</span>
          </h1>

          <p className="mt-5 max-w-xl text-base sm:text-lg text-foreground/70 leading-relaxed">
            Personalized numerology and kundli guidance for career, relationships,
            business success, and life clarity — distilled into modern, premium
            insights you can actually use.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <PathModal>
              <button
                className="group inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-semibold bg-gradient-to-b from-amber-300 to-amber-500 text-[#1a0f2e] glow-gold hover:brightness-110 transition cursor-pointer"
              >
                <Sparkles className="h-4 w-4" />
                Check Your Path — Free
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </button>
            </PathModal>
            <a
              href="#tools"
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-medium glass hover:bg-white/10 transition"
            >
              Get Free Kundli Compatibility
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-foreground/60">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              Private &amp; encrypted
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-amber-400" />
              4.9 / 5 from 1,000+ seekers
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-violet-300" />
              No spam · WhatsApp delivery
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-square w-full max-w-[540px] mx-auto"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

function HeroVisual() {
  const symbols = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="relative h-full w-full">
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.55),transparent_60%)] blur-2xl" />
      {/* Outer ring */}
      <div className="absolute inset-2 rounded-full border border-white/10 spin-slow">
        {symbols.map((s, i) => {
          const a = (i / symbols.length) * Math.PI * 2;
          const r = 46;
          const x = 50 + Math.cos(a) * r;
          const y = 50 + Math.sin(a) * r;
          return (
            <span
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2 text-amber-300/80 text-sm font-display"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {s}
            </span>
          );
        })}
      </div>
      {/* Mid ring */}
      <div
        className="absolute inset-12 rounded-full border border-amber-300/20"
        style={{ animation: "spin-slow 90s linear infinite reverse" }}
      >
        {numbers.map((n, i) => {
          const a = (i / numbers.length) * Math.PI * 2;
          const r = 46;
          const x = 50 + Math.cos(a) * r;
          const y = 50 + Math.sin(a) * r;
          return (
            <span
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2 text-xs text-foreground/70"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {n}
            </span>
          );
        })}
      </div>
      {/* Core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-44 w-44 sm:h-56 sm:w-56 rounded-full glass-strong flex items-center justify-center ring-gold">
          <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-violet-500/40 via-fuchsia-400/20 to-amber-400/30 blur-xl" />
          <div className="relative text-center">
            <div className="text-[11px] uppercase tracking-[0.25em] text-foreground/60">
              Your Number
            </div>
            <div className="mt-1 font-display text-7xl font-bold text-gradient-gold">
              7
            </div>
            <div className="mt-1 text-[11px] text-foreground/60">
              Insight unlocked
            </div>
          </div>
        </div>
      </div>
      {/* Floating chips */}
      <motion.div
        className="absolute left-2 top-6 glass rounded-2xl px-3 py-2 text-xs flex items-center gap-2 float-slow"
        style={{ animationDelay: "0.4s" }}
      >
        <Sparkles className="h-3.5 w-3.5 text-amber-300" />
        Career path: <span className="text-amber-200">expansion</span>
      </motion.div>
      <motion.div
        className="absolute right-2 bottom-10 glass rounded-2xl px-3 py-2 text-xs flex items-center gap-2 float-slow"
        style={{ animationDelay: "1.4s" }}
      >
        <Star className="h-3.5 w-3.5 text-violet-300" />
        Compatibility: <span className="text-violet-200">92%</span>
      </motion.div>
    </div>
  );
}

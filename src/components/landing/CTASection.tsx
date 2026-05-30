import { motion } from "motion/react";
import { MessageCircle, Video, Sparkles } from "lucide-react";
import { Starfield } from "./Background";

export function CTASection() {
  return (
    <section id="consult" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 cosmic-bg" />
      <Starfield count={60} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-amber-200/90">
          <Sparkles className="h-3 w-3" /> Premium consultation
        </div>
        <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]">
          Need <span className="text-gradient-gold">personalized guidance</span>?
        </h2>
        <p className="mt-5 text-foreground/70 max-w-2xl mx-auto leading-relaxed">
          Get on a private 1:1 reading with an Astrowani expert. WhatsApp or Zoom — your choice.
          Walk out with decisions, not predictions.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://wa.me/919999999999?text=Hi%20Astrowani%2C%20I%27d%20like%20to%20book%20a%20premium%20consultation."
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-semibold bg-gradient-to-b from-emerald-400 to-emerald-600 text-[#06281a] shadow-[0_20px_60px_-20px_rgba(16,185,129,0.6)] hover:brightness-110 transition"
          >
            <MessageCircle className="h-4 w-4" />
            Book on WhatsApp
          </a>
          <a
            href="#tools"
            className="group inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-semibold bg-gradient-to-b from-amber-300 to-amber-500 text-[#1a0f2e] glow-gold hover:brightness-110 transition"
          >
            <Video className="h-4 w-4" />
            Schedule Zoom Consultation
          </a>
        </div>

        <div className="mt-6 text-xs text-foreground/55">
          Avg response time: under 2 hours · Limited slots per day
        </div>
      </motion.div>
    </section>
  );
}

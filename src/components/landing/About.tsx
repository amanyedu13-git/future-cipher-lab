import { motion } from "motion/react";
import { ShieldCheck, Sparkles, HeartHandshake } from "lucide-react";

const points = [
  {
    icon: Sparkles,
    title: "Traditional wisdom, modern delivery",
    desc: "Rooted in Vedic numerology and kundli science — packaged for the way you actually live.",
  },
  {
    icon: HeartHandshake,
    title: "Honest, decision-grade guidance",
    desc: "No vague predictions. You leave every reading with a clear next step.",
  },
  {
    icon: ShieldCheck,
    title: "Private &amp; secure by default",
    desc: "Your birth details and conversations are encrypted and never shared.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-amber-200/90">
            About Astrowani
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Spiritual clarity, designed like a{" "}
            <span className="text-gradient-gold">premium product</span>.
          </h2>
          <p className="mt-5 text-foreground/70 leading-relaxed">
            Astrowani exists to make spiritual guidance feel modern, calm, and
            actionable. We blend traditional Vedic kundli analysis with
            numerology and a clear, human conversation — so you walk away with
            real decisions, not just predictions.
          </p>

          <div className="mt-7 space-y-3">
            {points.map((p) => (
              <div key={p.title} className="flex items-start gap-3 rounded-xl glass p-4">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/30 to-amber-300/20 ring-1 ring-white/10">
                  <p.icon className="h-4 w-4 text-amber-200" />
                </span>
                <div>
                  <div className="text-sm font-medium" dangerouslySetInnerHTML={{ __html: p.title }} />
                  <div className="text-sm text-foreground/65" dangerouslySetInnerHTML={{ __html: p.desc }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[5/6] w-full max-w-md mx-auto"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-600/30 via-fuchsia-500/10 to-amber-400/20 blur-2xl" />
          <div className="relative h-full w-full rounded-3xl glass-strong p-6 overflow-hidden">
            <div className="absolute inset-0 grid-faint opacity-50" />
            <div className="relative h-full flex flex-col">
              <div className="flex items-center gap-2 text-xs text-foreground/60">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Live reading · WhatsApp
              </div>
              <div className="mt-4 space-y-3">
                <Bubble side="left">
                  Namaste 🙏 I'd like clarity about a career move this quarter.
                </Bubble>
                <Bubble side="right">
                  Your number 7 cycle is opening a recognition window through Aug–Nov.
                  Decisions made on the 12th will compound strongly.
                </Bubble>
                <Bubble side="left">This is exactly what I needed. Thank you ✨</Bubble>
              </div>
              <div className="mt-auto pt-6">
                <div className="rounded-2xl bg-white/[0.04] border border-white/5 p-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-foreground/55">
                    Snapshot
                  </div>
                  <div className="mt-1 font-display text-2xl font-semibold">
                    1,000+ readings · 4.9★
                  </div>
                  <div className="mt-1 text-xs text-foreground/60">
                    Seekers across India, UAE, UK, US & SG
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Bubble({ side, children }: { side: "left" | "right"; children: React.ReactNode }) {
  return (
    <div className={`flex ${side === "right" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
          side === "right"
            ? "bg-gradient-to-br from-violet-500/40 to-fuchsia-500/30 border border-white/10 rounded-br-md"
            : "bg-white/[0.06] border border-white/10 rounded-bl-md"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

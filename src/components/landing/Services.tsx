import { motion } from "motion/react";
import {
  Briefcase,
  Heart,
  Building2,
  TrendingUp,
  UserRound,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeading } from "./Tools";

const services = [
  {
    icon: Briefcase,
    title: "Career Guidance",
    desc: "Decode your strengths, ideal roles and growth windows — backed by numerology + kundli timing.",
  },
  {
    icon: Heart,
    title: "Marriage Compatibility",
    desc: "Karmic alignment, emotional resonance and practical compatibility — analyzed honestly.",
  },
  {
    icon: Building2,
    title: "Business Numerology",
    desc: "Audit your brand name, founder energy and launch dates to maximize compounding growth.",
  },
  {
    icon: TrendingUp,
    title: "Financial Growth",
    desc: "Identify wealth cycles, money-blocking patterns and remedy rituals tuned to your chart.",
  },
  {
    icon: UserRound,
    title: "Personal Consultation",
    desc: "A private 1:1 reading on WhatsApp or Zoom — straight answers, no jargon, no fluff.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Premium guidance for <span className="text-gradient-luxe">every life decision</span>
            </>
          }
          sub="No generic horoscopes. Every reading is built from your kundli, numerology and the question you actually want answered."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.a
              href="#consult"
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="group relative rounded-2xl glass p-6 overflow-hidden hover:border-amber-300/30 hover:bg-white/[0.07] transition"
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-amber-300/20 ring-1 ring-white/10">
                  <s.icon className="h-5 w-5 text-amber-200" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{s.desc}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-xs text-amber-200 group-hover:gap-2 transition-all">
                  Book this reading <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

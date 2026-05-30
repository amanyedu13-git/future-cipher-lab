import { motion } from "motion/react";
import { ClipboardEdit, Sparkles, Phone } from "lucide-react";
import { SectionHeading } from "./Tools";

const steps = [
  {
    icon: ClipboardEdit,
    title: "Enter Your Details",
    desc: "A 60-second onboarding — name, birth details and the area you want clarity in.",
  },
  {
    icon: Sparkles,
    title: "Receive Personalized Insights",
    desc: "Our system blends Vedic kundli + numerology to generate a custom preview.",
  },
  {
    icon: Phone,
    title: "Book Premium Consultation",
    desc: "Talk 1:1 with an expert on WhatsApp or Zoom for a deep, decisive reading.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              From curious to <span className="text-gradient-gold">clear</span> in three steps
            </>
          }
        />
        <div className="mt-12 relative">
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative rounded-2xl glass p-6 text-center"
              >
                <div className="mx-auto relative inline-flex h-20 w-20 items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/40 to-amber-300/20 blur-xl" />
                  <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-full glass-strong ring-gold">
                    <s.icon className="h-6 w-6 text-amber-200" />
                  </div>
                </div>
                <div className="mt-4 text-[11px] uppercase tracking-[0.2em] text-foreground/55">
                  Step 0{i + 1}
                </div>
                <h3 className="mt-1 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

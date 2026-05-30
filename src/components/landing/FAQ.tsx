import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { SectionHeading } from "./Tools";

const faqs = [
  {
    q: "Is numerology accurate?",
    a: "Numerology is a 5000-year-old framework for understanding personality patterns and timing cycles. It works best as a decision-making lens — combined with kundli analysis at Astrowani, it becomes remarkably accurate for life-direction questions.",
  },
  {
    q: "What details are required?",
    a: "For numerology: full name and date of birth. For kundli/compatibility: also time and place of birth (more accurate readings). For business: brand name, founder name and DOB.",
  },
  {
    q: "How will I receive my report?",
    a: "Free previews appear instantly on screen. Detailed reports and premium consultations are delivered on WhatsApp + Email — usually within 24 hours.",
  },
  {
    q: "Are consultations private?",
    a: "Absolutely. All communication is end-to-end encrypted, and your birth details are never shared, sold, or used for marketing.",
  },
  {
    q: "How long does an analysis take?",
    a: "Free tool insights take under 60 seconds. Premium reports and 1:1 consultations are delivered within 24 hours. Urgent slots available on request.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions, <span className="text-gradient-luxe">answered honestly</span>
            </>
          }
        />

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-2xl glass transition ${isOpen ? "border-amber-300/30" : ""}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-medium text-foreground/90">{f.q}</span>
                  <span
                    className={`inline-flex h-7 w-7 items-center justify-center rounded-full transition ${
                      isOpen ? "bg-amber-300 text-[#1a0f2e]" : "bg-white/5 text-foreground/70"
                    }`}
                  >
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm text-foreground/70 leading-relaxed">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

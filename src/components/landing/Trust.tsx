import { motion } from "motion/react";
import { FileText, Sparkles, ShieldCheck, MessageCircleHeart } from "lucide-react";

const stats = [
  { icon: FileText, value: "1,000+", label: "Reports Generated" },
  { icon: Sparkles, value: "Trusted", label: "Personal Guidance" },
  { icon: MessageCircleHeart, value: "Personalized", label: "Insights, not generic" },
  { icon: ShieldCheck, value: "100%", label: "Private Consultations" },
];

export function Trust() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative rounded-2xl glass p-5 sm:p-6 hover:bg-white/8 transition overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-violet-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition" />
              <s.icon className="h-5 w-5 text-amber-300" />
              <div className="mt-4 font-display text-2xl sm:text-3xl font-semibold text-gradient-luxe">
                {s.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-foreground/65">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

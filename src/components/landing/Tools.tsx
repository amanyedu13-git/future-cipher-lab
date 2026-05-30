import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Heart,
  Briefcase,
  ArrowRight,
  ArrowLeft,
  Lock,
  Check,
  Loader2,
} from "lucide-react";

type Field = {
  name: string;
  label: string;
  type?: "text" | "date" | "time" | "email" | "tel" | "textarea";
  placeholder?: string;
  required?: boolean;
};

type Step = {
  title: string;
  subtitle?: string;
  fields: Field[];
};

type Tool = {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
  title: string;
  desc: string;
  cta: string;
  steps: Step[];
  resultTitle: string;
  resultLabel: string;
  resultValue: (data: Record<string, string>) => string;
  insight: (data: Record<string, string>) => string;
  unlockCta: string;
};

const luckyNumber = (date?: string) => {
  if (!date) return 7;
  const digits = date.replace(/\D/g, "").split("").map(Number);
  let sum = digits.reduce((a, b) => a + b, 0);
  while (sum > 9) sum = String(sum).split("").map(Number).reduce((a, b) => a + b, 0);
  return sum || 7;
};

const tools: Tool[] = [
  {
    id: "lucky",
    icon: Sparkles,
    badge: "Free · 60 sec",
    title: "Your Path Calculator",
    desc: "Decode the single digit driving your destiny — career, money & timing.",
    cta: "Reveal My Path",
    steps: [
      {
        title: "About you",
        subtitle: "Start with the basics — we'll do the math.",
        fields: [
          { name: "name", label: "Full Name", placeholder: "e.g. Aarav Mehta", required: true },
          { name: "dob", label: "Date of Birth", type: "date", required: true },
        ],
      },
      {
        title: "Where should we send it?",
        subtitle: "Your private report arrives on WhatsApp + Email.",
        fields: [
          { name: "whatsapp", label: "WhatsApp Number", type: "tel", placeholder: "+91 98xxx xxxxx", required: true },
          { name: "email", label: "Email Address", type: "email", placeholder: "you@email.com", required: true },
        ],
      },
      {
        title: "What's on your mind?",
        fields: [
          {
            name: "intent",
            label: "Why are you seeking guidance?",
            type: "textarea",
            placeholder: "Tell us what area of life you want clarity in...",
          },
        ],
      },
    ],
    resultTitle: "Your path number is",
    resultLabel: "Numerology core · Pythagorean",
    resultValue: (d) => String(luckyNumber(d.dob)),
    insight: () =>
      "You are entering a wealth + recognition cycle. Best decision-making days fall on the 3rd, 12th & 21st of every month. Avoid major launches on Saturdays.",
    unlockCta: "Unlock Full Personalized Report",
  },
  {
    id: "kundli",
    icon: Heart,
    badge: "Free · Couple report",
    title: "Kundli Compatibility Checker",
    desc: "See how your stars align — emotionally, karmically, and practically.",
    cta: "Check Compatibility",
    steps: [
      {
        title: "Person 1",
        fields: [
          { name: "p1_name", label: "Full Name", required: true },
          { name: "p1_dob", label: "Date of Birth", type: "date", required: true },
          { name: "p1_tob", label: "Time of Birth", type: "time" },
          { name: "p1_pob", label: "Place of Birth", placeholder: "City, Country" },
        ],
      },
      {
        title: "Person 2",
        fields: [
          { name: "p2_name", label: "Full Name", required: true },
          { name: "p2_dob", label: "Date of Birth", type: "date", required: true },
          { name: "p2_tob", label: "Time of Birth", type: "time" },
          { name: "p2_pob", label: "Place of Birth", placeholder: "City, Country" },
        ],
      },
      {
        title: "Send my private report",
        fields: [
          { name: "whatsapp", label: "WhatsApp Number", type: "tel", required: true },
          { name: "email", label: "Email Address", type: "email", required: true },
          {
            name: "intent",
            label: "Why are you seeking guidance?",
            type: "textarea",
            placeholder: "Share what you're hoping to understand...",
          },
        ],
      },
    ],
    resultTitle: "Compatibility score",
    resultLabel: "Ashtakoot · 36 guna match",
    resultValue: (d) => {
      const a = luckyNumber(d.p1_dob);
      const b = luckyNumber(d.p2_dob);
      const score = Math.max(62, Math.min(96, 70 + (9 - Math.abs(a - b)) * 3));
      return `${score}%`;
    },
    insight: () =>
      "Strong emotional resonance with shared karmic intent. Communication harmony is exceptional; the next 90 days are highly favorable for commitment-level conversations.",
    unlockCta: "Get Detailed Compatibility Report",
  },
  {
    id: "business",
    icon: Briefcase,
    badge: "Free · Brand audit",
    title: "Business Name Numerology",
    desc: "Audit your brand's vibration — and find the name that actually attracts wealth.",
    cta: "Analyze My Business Name",
    steps: [
      {
        title: "Your business",
        fields: [
          { name: "bname", label: "Current Business Name", required: true },
          { name: "category", label: "Business Category", placeholder: "e.g. D2C beauty, SaaS, agency" },
        ],
      },
      {
        title: "About the founder",
        fields: [
          { name: "founder", label: "Founder Name", required: true },
          { name: "fdob", label: "Founder Date of Birth", type: "date", required: true },
        ],
      },
      {
        title: "Where should we send it?",
        fields: [
          { name: "whatsapp", label: "WhatsApp Number", type: "tel", required: true },
          { name: "email", label: "Email Address", type: "email", required: true },
          {
            name: "intent",
            label: "Why are you seeking guidance?",
            type: "textarea",
            placeholder: "Tell us your business goals or challenges...",
          },
        ],
      },
    ],
    resultTitle: "Business energy score",
    resultLabel: "Chaldean brand vibration",
    resultValue: (d) => {
      const base = (d.bname || "").replace(/\s/g, "").length;
      const score = Math.max(58, Math.min(94, 60 + base * 2));
      return `${score} / 100`;
    },
    insight: () =>
      "Brand vibrates with the number 6 — magnetic for trust-led categories but slightly diluted for growth. A 1-character refinement could increase compounding revenue energy significantly.",
    unlockCta: "Get Premium Brand Numerology Report",
  },
];

export function Tools() {
  const [activeId, setActiveId] = useState(tools[0].id);
  const active = tools.find((t) => t.id === activeId)!;

  return (
    <section id="tools" className="relative py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Free interactive tools"
          title={
            <>
              Get a real{" "}
              <span className="text-gradient-gold">personalized insight</span>{" "}
              before you ever pay
            </>
          }
          sub="Three premium calculators — built like a SaaS onboarding, not a temple form. Your data is private and never sold."
        />

        <div className="mt-10 grid lg:grid-cols-[280px_1fr] gap-6">
          {/* Tool picker */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {tools.map((t) => {
              const isActive = t.id === activeId;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveId(t.id)}
                  className={`group flex-shrink-0 lg:flex-shrink text-left rounded-2xl p-4 transition border ${
                    isActive
                      ? "glass-strong border-amber-300/30 glow-purple"
                      : "glass border-white/5 hover:border-white/15"
                  } min-w-[220px] lg:min-w-0`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${
                        isActive
                          ? "bg-gradient-to-br from-amber-300 to-amber-500 text-[#1a0f2e]"
                          : "bg-white/5 text-amber-300"
                      }`}
                    >
                      <t.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.18em] text-foreground/55">
                        {t.badge}
                      </div>
                      <div className="text-sm font-medium">{t.title}</div>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-foreground/60 line-clamp-2">{t.desc}</p>
                </button>
              );
            })}
          </div>

          <ToolFlow key={active.id} tool={active} />
        </div>
      </div>
    </section>
  );
}

function ToolFlow({ tool }: { tool: Tool }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"form" | "loading" | "result">("form");
  const total = tool.steps.length;
  const progress = useMemo(
    () => ((step + (status === "result" ? 1 : 0)) / total) * 100,
    [step, total, status],
  );

  const current = tool.steps[step];
  const canNext = current.fields
    .filter((f) => f.required)
    .every((f) => (data[f.name] || "").trim().length > 0);

  const next = () => {
    if (!canNext) return;
    if (step < total - 1) {
      setStep((s) => s + 1);
    } else {
      setStatus("loading");
      setTimeout(() => setStatus("result"), 1500);
    }
  };

  return (
    <div className="relative rounded-3xl glass-strong p-5 sm:p-8 overflow-hidden">
      <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-violet-500/25 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-amber-400/15 blur-3xl" />

      <div className="relative flex items-center justify-between mb-6">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-foreground/55">
            {tool.badge}
          </div>
          <h3 className="mt-1 font-display text-xl sm:text-2xl font-semibold">
            {tool.title}
          </h3>
        </div>
        <div className="text-xs text-foreground/60">
          Step {Math.min(step + 1, total)} / {total}
        </div>
      </div>

      {/* progress */}
      <div className="relative h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-300"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <div className="relative mt-7 min-h-[320px]">
        <AnimatePresence mode="wait">
          {status === "form" && (
            <motion.div
              key={`form-${step}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              <div className="mb-5">
                <div className="font-display text-lg font-semibold">{current.title}</div>
                {current.subtitle && (
                  <p className="text-sm text-foreground/60 mt-1">{current.subtitle}</p>
                )}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {current.fields.map((f) => (
                  <FloatingField
                    key={f.name}
                    field={f}
                    value={data[f.name] || ""}
                    onChange={(v) => setData((d) => ({ ...d, [f.name]: v }))}
                    full={f.type === "textarea"}
                  />
                ))}
              </div>

              <div className="mt-7 flex items-center justify-between">
                <button
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="inline-flex items-center gap-2 text-sm text-foreground/70 disabled:opacity-40 disabled:cursor-not-allowed hover:text-foreground"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
                <button
                  onClick={next}
                  disabled={!canNext}
                  className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold bg-gradient-to-b from-amber-300 to-amber-500 text-[#1a0f2e] glow-gold disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-110 transition"
                >
                  {step === total - 1 ? tool.cta : "Continue"}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </button>
              </div>
            </motion.div>
          )}

          {status === "loading" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <div className="relative h-20 w-20 rounded-full glass flex items-center justify-center">
                <Loader2 className="h-7 w-7 text-amber-300 animate-spin" />
                <div className="absolute inset-0 rounded-full ring-1 ring-amber-300/30 animate-ping" />
              </div>
              <div className="mt-5 font-display text-lg">Aligning the stars…</div>
              <div className="mt-1 text-xs text-foreground/60">
                Calculating your personalized reading
              </div>
            </motion.div>
          )}

          {status === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-[1fr_1.2fr] gap-6 items-stretch"
            >
              <ResultCard tool={tool} data={data} />
              <PremiumPreview tool={tool} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function FloatingField({
  field,
  value,
  onChange,
  full,
}: {
  field: Field;
  value: string;
  onChange: (v: string) => void;
  full?: boolean;
}) {
  const [focus, setFocus] = useState(false);
  const filled = value.length > 0 || field.type === "date" || field.type === "time";
  const labelUp = focus || filled;

  return (
    <label
      className={`relative block rounded-xl border transition group ${
        focus
          ? "border-amber-300/50 bg-white/[0.06] glow-purple"
          : "border-white/10 bg-white/[0.03] hover:border-white/20"
      } ${full ? "sm:col-span-2" : ""}`}
    >
      <span
        className={`pointer-events-none absolute left-4 transition-all ${
          labelUp ? "top-1.5 text-[10px] uppercase tracking-[0.18em] text-amber-200/80" : "top-3.5 text-sm text-foreground/55"
        }`}
      >
        {field.label}
        {field.required && labelUp && " ·"}
      </span>
      {field.type === "textarea" ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={labelUp ? field.placeholder : ""}
          rows={3}
          className="block w-full bg-transparent px-4 pt-6 pb-3 text-sm text-foreground placeholder:text-foreground/30 outline-none resize-none"
        />
      ) : (
        <input
          type={field.type || "text"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={labelUp ? field.placeholder : ""}
          className="block w-full bg-transparent px-4 pt-6 pb-2.5 text-sm text-foreground placeholder:text-foreground/30 outline-none"
        />
      )}
    </label>
  );
}

function ResultCard({ tool, data }: { tool: Tool; data: Record<string, string> }) {
  const value = tool.resultValue(data);
  const isMeter = value.endsWith("%");
  const meter = isMeter ? parseInt(value, 10) : 0;
  return (
    <div className="relative rounded-2xl glass p-6 overflow-hidden">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-500/20 via-transparent to-amber-300/20 blur-2xl" />
      <div className="relative">
        <div className="text-[10px] uppercase tracking-[0.2em] text-foreground/55">
          {tool.resultLabel}
        </div>
        <div className="mt-2 text-sm text-foreground/70">{tool.resultTitle}</div>
        <div className="mt-3 font-display text-6xl font-bold text-gradient-gold leading-none">
          {value}
        </div>

        {isMeter && (
          <div className="mt-6">
            <div className="h-2 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${meter}%` }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-300"
              />
            </div>
            <div className="mt-2 text-[11px] text-foreground/55">
              Karmic alignment · emotional · practical
            </div>
          </div>
        )}

        <div className="mt-6 rounded-xl bg-white/[0.04] p-4 text-sm text-foreground/80 border border-white/5">
          <div className="flex items-center gap-2 text-amber-200 text-xs font-medium">
            <Sparkles className="h-3.5 w-3.5" /> Preview insight
          </div>
          <p className="mt-2 leading-relaxed">{tool.insight(data)}</p>
        </div>
      </div>
    </div>
  );
}

function PremiumPreview({ tool }: { tool: Tool }) {
  return (
    <div className="relative rounded-2xl glass-strong p-6 overflow-hidden flex flex-col">
      <div className="flex items-center gap-2 text-xs text-amber-200">
        <Lock className="h-3.5 w-3.5" />
        Premium chapters · locked
      </div>
      <div className="mt-4 space-y-3 relative">
        {[
          "Personalized career & timing windows (next 12 months)",
          "Wealth attraction frequencies + remedy rituals",
          "Relationship karma map + critical compatibility dates",
          "Founder × business name resonance & rename suggestions",
        ].map((t) => (
          <div
            key={t}
            className="flex items-start gap-3 rounded-lg bg-white/[0.04] border border-white/5 p-3"
          >
            <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-amber-300/15 text-amber-200">
              <Check className="h-3 w-3" />
            </span>
            <span className="text-sm text-foreground/75">{t}</span>
          </div>
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background/90 backdrop-blur-[2px]" />
      </div>

      <a
        href="#consult"
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold bg-gradient-to-b from-amber-300 to-amber-500 text-[#1a0f2e] glow-gold hover:brightness-110 transition"
      >
        <Sparkles className="h-4 w-4" />
        {tool.unlockCta}
      </a>
      <div className="mt-3 text-center text-[11px] text-foreground/55">
        Delivered on WhatsApp within 24 hours · 100% private
      </div>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-amber-200/90">
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
        {title}
      </h2>
      {sub && <p className="mt-4 text-base text-foreground/70 leading-relaxed">{sub}</p>}
    </div>
  );
}

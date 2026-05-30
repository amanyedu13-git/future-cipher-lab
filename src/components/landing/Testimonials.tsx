import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "./Tools";

const reviews = [
  {
    name: "Riya S.",
    city: "Mumbai",
    initial: "R",
    rating: 5,
    text: "I was stuck between two job offers and the reading gave me actual clarity. Took the role they suggested — and got promoted within 4 months.",
    tag: "Career Guidance",
  },
  {
    name: "Aman & Priya",
    city: "Pune",
    initial: "A",
    rating: 5,
    text: "We did the kundli compatibility before getting engaged. The compatibility map honestly described our dynamic better than any counselor.",
    tag: "Marriage",
  },
  {
    name: "Karan M.",
    city: "Bangalore",
    initial: "K",
    rating: 5,
    text: "Renamed my D2C brand based on their numerology audit. Revenue compounded 2.3x in 6 months. Strangest, best decision I've made.",
    tag: "Business",
  },
  {
    name: "Neha T.",
    city: "Dubai",
    initial: "N",
    rating: 5,
    text: "Felt premium, private and genuine. Not the usual templated horoscope stuff. The WhatsApp consultation alone was worth it.",
    tag: "Personal",
  },
  {
    name: "Vikram R.",
    city: "Delhi",
    initial: "V",
    rating: 5,
    text: "Was skeptical, but the timing windows they predicted for my fundraise played out exactly. Will definitely come back.",
    tag: "Finance",
  },
  {
    name: "Sara J.",
    city: "London",
    initial: "S",
    rating: 5,
    text: "Beautifully run experience. Calm, modern and deeply respectful of my privacy. Highly recommended.",
    tag: "Personal",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Real seekers. Real <span className="text-gradient-gold">clarity</span>.
            </>
          }
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="group relative rounded-2xl glass p-6 hover:bg-white/[0.07] transition overflow-hidden"
            >
              <div className="absolute -top-16 -right-12 h-32 w-32 rounded-full bg-amber-300/15 blur-3xl opacity-0 group-hover:opacity-100 transition" />
              <Quote className="h-5 w-5 text-amber-300/70" />
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{r.text}</p>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-sm font-semibold">
                    {r.initial}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{r.name}</div>
                    <div className="text-[11px] text-foreground/55">{r.city} · {r.tag}</div>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, k) => (
                    <Star key={k} className="h-3.5 w-3.5 fill-amber-300 text-amber-300" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

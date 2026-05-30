import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Menu, X } from "lucide-react";
import { PathModal } from "./PathModal";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-3"
    >
      <nav
        className={`w-full max-w-6xl rounded-2xl transition-all duration-500 ${
          scrolled
            ? "glass-strong shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]"
            : "glass"
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 h-14 sm:h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 ring-gold">
              <Sparkles className="h-4 w-4 text-white" />
              <span className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              Astrow<span className="text-gradient-gold">ani</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm text-foreground/70 hover:text-foreground rounded-lg hover:bg-white/5 transition"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <PathModal>
              <button
                className="relative inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium bg-gradient-to-b from-amber-300 to-amber-500 text-[#1a0f2e] glow-gold hover:brightness-110 transition cursor-pointer"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Check Your Path
              </button>
            </PathModal>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden px-4 pb-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm text-foreground/80 rounded-lg hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <PathModal>
              <button
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium bg-gradient-to-b from-amber-300 to-amber-500 text-[#1a0f2e]"
              >
                <Sparkles className="h-4 w-4" /> Check Your Path
              </button>
            </PathModal>
          </div>
        )}
      </nav>
    </motion.header>
  );
}

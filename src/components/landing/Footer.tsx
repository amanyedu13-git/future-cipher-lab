import { Sparkles, Instagram, Youtube, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/5 mt-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
        <div>
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-700">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <span className="font-display text-lg font-semibold">
              Astrow<span className="text-gradient-gold">ani</span>
            </span>
          </a>
          <p className="mt-4 text-sm text-foreground/65 max-w-sm leading-relaxed">
            Modern numerology &amp; kundli guidance for career, relationships and business.
            Built for clarity, not noise.
          </p>

          <div className="mt-5 flex items-center gap-3">
            {[
              { icon: Instagram, href: "#" },
              { icon: Youtube, href: "#" },
              { icon: MessageCircle, href: "https://wa.me/919999999999" },
              { icon: Mail, href: "mailto:hello@astrowani.com" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg glass hover:bg-white/10 transition"
              >
                <s.icon className="h-4 w-4 text-foreground/80" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol
          title="Explore"
          links={[
            { label: "Services", href: "#services" },
            { label: "Free Tools", href: "#tools" },
            { label: "Testimonials", href: "#testimonials" },
            { label: "About", href: "#about" },
          ]}
        />
        <FooterCol
          title="Legal"
          links={[
            { label: "Privacy Policy", href: "#" },
            { label: "Terms & Conditions", href: "#" },
            { label: "Disclaimer", href: "#" },
            { label: "Refund Policy", href: "#" },
          ]}
        />
        <FooterCol
          title="Contact"
          links={[
            { label: "hello@astrowani.com", href: "mailto:hello@astrowani.com" },
            { label: "+91 99999 99999", href: "tel:+919999999999" },
            { label: "WhatsApp consult", href: "https://wa.me/919999999999" },
          ]}
        />
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-foreground/55">
          <div>© {new Date().getFullYear()} Astrowani. All rights reserved.</div>
          <div className="max-w-2xl">
            Disclaimer: Astrowani provides guidance for self-reflection. It is not a substitute
            for professional medical, legal or financial advice.
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.2em] text-foreground/55">{title}</div>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-sm text-foreground/75 hover:text-foreground transition">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

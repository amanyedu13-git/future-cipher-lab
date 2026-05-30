import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Trust } from "@/components/landing/Trust";
import { Tools } from "@/components/landing/Tools";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Services } from "@/components/landing/Services";
import { About } from "@/components/landing/About";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTASection } from "@/components/landing/CTASection";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Astrowani — Modern Numerology & Kundli Guidance" },
      {
        name: "description",
        content:
          "Discover what your numbers reveal. Premium numerology, kundli compatibility and business name analysis with private 1:1 consultations.",
      },
      { property: "og:title", content: "Astrowani — Modern Numerology & Kundli Guidance" },
      {
        property: "og:description",
        content:
          "Personalized numerology and kundli guidance for career, relationships, business success and life clarity.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Trust />
      <Tools />
      <HowItWorks />
      <Services />
      <About />
      <Testimonials />
      <CTASection />
      <FAQ />
      <Footer />
    </main>
  );
}

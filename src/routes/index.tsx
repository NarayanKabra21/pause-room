import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { IntroHero } from "@/components/site/IntroHero";
import { MainHero } from "@/components/site/MainHero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { HealingAreas } from "@/components/site/HealingAreas";
import { WhyUs } from "@/components/site/WhyUs";
import { CalmRoom } from "@/components/site/CalmRoom";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQs } from "@/components/site/FAQs";
import { Booking } from "@/components/site/Booking";
import { Contact } from "@/components/site/Contact";
import { Blog } from "@/components/site/Blog";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Pause Room — Emotional Wellness & Psychiatric Care" },
      {
        name: "description",
        content:
          "A peaceful sanctuary for psychiatric care and emotional wellness. Therapy, counseling, and a calming space to breathe, heal, and rediscover peace.",
      },
      { property: "og:title", content: "The Pause Room — A space to breathe and heal" },
      {
        property: "og:description",
        content:
          "Compassionate psychiatric care and emotional wellness in a calming, judgment-free sanctuary.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="relative">
      <Navbar />
      <IntroHero />
      <MainHero />
      <About />
      <Services />
      <HealingAreas />
      <WhyUs />
      <CalmRoom />
      <Testimonials />
      <FAQs />
      <Booking />
      <Contact />
      <Blog />
      <Footer />
      <Toaster position="bottom-center" />
    </main>
  );
}

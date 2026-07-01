import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";
import {
  serviceCategories,
  servicesHeroImage,
  type CatalogItem,
} from "@/data/servicesCatalog";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — The Pause Room" },
      {
        name: "description",
        content:
          "Professional psychological services — assessments, therapy, workshops, seminars and webinars — for individuals, families, schools and organisations.",
      },
      { property: "og:title", content: "Professional Psychological Services — The Pause Room" },
      {
        property: "og:description",
        content:
          "Evidence-based assessments, therapy, counselling, workshops, seminars and webinars — held with warmth and care.",
      },
      { property: "og:image", content: servicesHeroImage },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  useReveal();

  return (
    <main className="relative overflow-hidden animate-fade-in">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={servicesHeroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-background/30" />

        <div className="pointer-events-none absolute inset-0">
          <span className="absolute left-[12%] top-[28%] h-2 w-2 rounded-full bg-white/60 animate-float" />
          <span className="absolute left-[78%] top-[22%] h-1.5 w-1.5 rounded-full bg-white/50 animate-float-slow" />
          <span className="absolute left-[64%] top-[68%] h-2.5 w-2.5 rounded-full bg-white/40 animate-breathe" />
          <span className="absolute left-[22%] top-[72%] h-1.5 w-1.5 rounded-full bg-white/50 animate-float" />
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
          <span
            className="text-xs tracking-[0.4em] uppercase text-white/85 animate-fade-up"
            style={{ animationDelay: "60ms" }}
          >
            Our Services
          </span>
          <h1
            className="mt-5 text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] animate-fade-up"
            style={{ animationDelay: "180ms" }}
          >
            Professional <em className="not-italic" style={{ background: 'linear-gradient(135deg, oklch(0.55 0.1 230) 0%, oklch(0.35 0.11 235) 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.65))' }}>Psychological</em><br />
            Services
          </h1>
          <p
            className="mt-6 max-w-2xl text-base md:text-lg text-white/95 font-display italic animate-fade-up"
            style={{ animationDelay: "320ms", textShadow: "0 2px 16px rgba(0,0,0,0.45)" }}
          >
            Supporting individuals, children, adolescents, families, and organisations through
            evidence-based psychological assessments, therapy, counselling, and mental wellness
            programs.
          </p>

          <a
            href="#assessments"
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors animate-fade-up"
            style={{ animationDelay: "520ms" }}
          >
            <span className="text-[10px] tracking-[0.4em] uppercase">Explore</span>
            <ChevronDown size={18} className="animate-breathe" />
          </a>
        </div>
      </section>

      {serviceCategories.map((cat, idx) => (
        <section
          key={cat.slug}
          id={cat.slug}
          className={`relative py-28 md:py-36 ${idx % 2 ? "bg-gradient-sky" : ""}`}
        >
          <div className="mx-auto max-w-5xl px-6">
            <div className="reveal-on-scroll max-w-3xl">
              <span className="text-xs tracking-[0.4em] uppercase text-primary/80">
                {String(idx + 1).padStart(2, "0")} · Section
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl">{cat.title}</h2>
              <p className="mt-6 text-lg md:text-xl leading-relaxed text-foreground/80">
                {cat.description}
              </p>
            </div>

            <div className="mt-20 space-y-16 md:space-y-20">
              {cat.items.map((item, i) => (
                <ServiceEntry key={item.slug} item={item} delay={i * 60} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Closing CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-lake opacity-90" />
        <div className="relative mx-auto max-w-3xl px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl">Begin where you are</h2>
          <p className="mt-4 text-white/85">
            A quiet, confidential conversation is the only first step.
          </p>
          <Link
            to="/book"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-foreground px-7 py-3 text-sm font-medium hover:scale-105 transition-all duration-500"
          >
            Book a consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ServiceEntry({ item, delay }: { item: CatalogItem; delay: number }) {
  const Icon = item.icon;
  return (
    <article
      className="reveal-on-scroll group relative"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-5">
        <div className="hidden sm:flex shrink-0 h-12 w-12 rounded-full bg-primary/10 text-primary items-center justify-center mt-1">
          <Icon size={20} strokeWidth={1.6} />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl leading-tight">{item.title}</h3>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-foreground/75 max-w-3xl">
            {item.what}
          </p>

          {item.subsections && item.subsections.length > 0 && (
            <div className="mt-10 space-y-8 border-l border-primary/15 pl-6 md:pl-8">
              {item.subsections.map((sub) => (
                <div key={sub.title}>
                  <h4 className="text-xl md:text-2xl">{sub.title}</h4>
                  <p className="mt-3 text-base leading-relaxed text-foreground/70 max-w-3xl">
                    {sub.what}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

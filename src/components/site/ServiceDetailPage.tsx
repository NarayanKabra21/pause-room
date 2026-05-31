import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";
import type { Service } from "@/data/services";

type Props = {
  service: Service;
};

export function ServiceDetailPage({ service }: Props) {
  useReveal();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [service.slug]);

  const d = service.detail!;

  return (
    <main className="relative overflow-hidden animate-fade-in bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={d.heroImage}
          alt={d.heroAlt}
          className="absolute inset-0 h-full w-full object-cover object-center animate-ken-burns"
          loading="eager"
        />
        {/* Very soft overlay — max ~30% */}
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <span
            className="text-[11px] tracking-[0.5em] uppercase text-white/85 animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            The Pause Room
          </span>
          <h1
            className="mt-6 font-display text-white text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-5xl animate-fade-up"
            style={{ animationDelay: "220ms" }}
          >
            {service.title}
          </h1>
          <p
            className="mt-6 max-w-2xl text-lg md:text-xl text-white/90 font-display italic animate-fade-up"
            style={{ animationDelay: "360ms" }}
          >
            {d.tagline}
          </p>
        </div>
      </section>

      {/* OPENING QUOTE */}
      <section className="bg-[#f8f5f1] py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center reveal-on-scroll">
          <div className="mx-auto h-px w-16 bg-foreground/25" />
          <blockquote className="mt-10 font-display italic text-2xl md:text-3xl leading-relaxed text-[#3a3a3a]">
            “{d.openingQuote}”
          </blockquote>
          <div className="mt-10 mx-auto h-px w-16 bg-foreground/25" />
          <p className="mt-6 text-xs tracking-[0.4em] uppercase text-muted-foreground">
            — {d.openingQuoteAuthor}
          </p>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6">
          {d.sections.map((s, i) => {
            const imageRight = i % 2 === 1;
            return (
              <article
                key={s.heading}
                className="grid md:grid-cols-2 gap-12 md:gap-16 items-center py-16 md:py-24"
              >
                <div
                  className={`reveal-on-scroll ${imageRight ? "md:order-1" : "md:order-2"}`}
                >
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    loading="lazy"
                    className="w-full h-80 md:h-[26rem] object-cover rounded-2xl shadow-md"
                  />
                </div>
                <div
                  className={`reveal-on-scroll ${imageRight ? "md:order-2" : "md:order-1"}`}
                >
                  <h2 className="font-display text-2xl md:text-3xl text-[#3a3a3a] leading-tight">
                    {s.heading}
                  </h2>
                  <div className="mt-6 space-y-5 text-[#3a3a3a]/85 leading-relaxed">
                    {s.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                  {s.sideQuote && (
                    <figure className="mt-8 border-l-2 border-primary/40 pl-5 italic text-primary/90">
                      {s.sideQuote}
                    </figure>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-[#f8f5f1] py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center reveal-on-scroll">
          <p className="text-lg md:text-xl leading-relaxed text-[#3a3a3a]">
            {d.closingStatement}
          </p>
          <div className="mt-12 mx-auto h-px w-16 bg-foreground/25" />
          <blockquote className="mt-10 font-display italic text-xl md:text-2xl text-[#3a3a3a]/90">
            “{d.closingQuote}”
          </blockquote>
          <p className="mt-6 text-xs tracking-[0.4em] uppercase text-muted-foreground">
            — {d.closingQuoteAuthor}
          </p>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book"
              className="inline-flex items-center rounded-full bg-primary px-7 py-3 text-sm text-primary-foreground hover:opacity-90 transition"
            >
              Begin a gentle conversation
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
            >
              <ArrowLeft size={14} /> All services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

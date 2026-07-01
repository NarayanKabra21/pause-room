import { useState, useEffect, useCallback, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, X } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";
import {
  serviceCategories,
  servicesHeroImage,
  type CatalogItem,
  type CatalogSubsection,
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
  const [selectedItem, setSelectedItem] = useState<CatalogItem | null>(null);

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

      {/* SERVICE CATEGORIES WITH CARDS */}
      {serviceCategories.map((cat, idx) => (
        <section
          key={cat.slug}
          id={cat.slug}
          className={`relative py-28 md:py-36 ${idx % 2 ? "bg-gradient-sky" : ""}`}
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal-on-scroll max-w-3xl">
              <span className="text-xs tracking-[0.4em] uppercase text-primary/80">
                {String(idx + 1).padStart(2, "0")} · Section
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl">{cat.title}</h2>
              <p className="mt-6 text-lg md:text-xl leading-relaxed text-foreground/80">
                {cat.description}
              </p>
            </div>

            {/* CARD GRID */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-5 md:gap-6">
              {cat.items.map((item, i) => (
                <ServiceCard
                  key={item.slug}
                  item={item}
                  delay={i * 80}
                  onClick={() => setSelectedItem(item)}
                />
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

      {/* POPUP MODAL */}
      {selectedItem && (
        <ServiceModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </main>
  );
}

/* ─── Service Card ─────────────────────────────────────────────────────────── */

function ServiceCard({
  item,
  delay,
  onClick,
}: {
  item: CatalogItem;
  delay: number;
  onClick: () => void;
}) {
  const Icon = item.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className="reveal-on-scroll group relative aspect-square overflow-hidden rounded-2xl bg-muted cursor-pointer text-left focus:outline-none"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image */}
      <img
        src={item.cardImage}
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Gradient overlay — always visible at bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

      {/* Hover lift shadow — applied via group-hover on the wrapper */}
      <div className="absolute inset-0 rounded-2xl transition-shadow duration-500 group-hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.3)]" />

      {/* Icon badge */}
      <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <Icon size={14} className="text-white" strokeWidth={1.8} />
      </div>

      {/* Title at bottom */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-4">
        <h3
          className="text-sm md:text-base font-semibold text-white leading-snug"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9), 0 2px 16px rgba(0,0,0,0.6)" }}
        >
          {item.title}
        </h3>
      </div>
    </button>
  );
}

/* ─── Service Modal ────────────────────────────────────────────────────────── */

function ServiceModal({
  item,
  onClose,
}: {
  item: CatalogItem;
  onClose: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Animate in
  useEffect(() => {
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => setIsVisible(true));
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close with animation
  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(onClose, 350);
  }, [onClose]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleClose]);

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) handleClose();
  };

  const Icon = item.icon;

  return (
    <div
      ref={overlayRef}
      onClick={handleBackdropClick}
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 transition-all duration-350 ${
        isVisible
          ? "bg-black/60 backdrop-blur-sm"
          : "bg-black/0 backdrop-blur-none pointer-events-none"
      }`}
    >
      <div
        className={`relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-card border border-border/50 shadow-elevated transition-all duration-350 ease-out ${
          isVisible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
      >
        {/* Hero image in modal */}
        <div className="relative h-52 md:h-60 overflow-hidden rounded-t-3xl shrink-0">
          <img
            src={item.heroImage}
            alt={item.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/30 backdrop-blur-md text-white/90 hover:bg-black/50 hover:text-white transition-all duration-300"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 md:px-8 pb-8 pt-2">
          <h2 className="text-2xl md:text-3xl font-display leading-tight text-foreground">
            {item.title}
          </h2>

          {/* Quote */}
          <blockquote className="mt-5 pl-4 border-l-2 border-primary/30">
            <p className="text-sm italic text-foreground/60 leading-relaxed">
              "{item.quote}"
            </p>
            <cite className="mt-1 block text-xs text-primary/70 not-italic">
              — {item.quoteAuthor}
            </cite>
          </blockquote>

          {/* What */}
          <div className="mt-6">
            <h3 className="text-xs tracking-[0.3em] uppercase text-primary/80 mb-2">What it is</h3>
            <p className="text-base leading-relaxed text-foreground/80">{item.what}</p>
          </div>

          {/* Why */}
          <div className="mt-5">
            <h3 className="text-xs tracking-[0.3em] uppercase text-primary/80 mb-2">Why it matters</h3>
            <p className="text-base leading-relaxed text-foreground/80">{item.why}</p>
          </div>

          {/* Who can benefit */}
          <div className="mt-5">
            <h3 className="text-xs tracking-[0.3em] uppercase text-primary/80 mb-2">Who can benefit</h3>
            <ul className="space-y-1.5">
              {item.whoCanBenefit.map((w, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/75">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                  {w}
                </li>
              ))}
            </ul>
          </div>

          {/* Outcomes */}
          <div className="mt-5">
            <h3 className="text-xs tracking-[0.3em] uppercase text-primary/80 mb-2">Outcomes</h3>
            <ul className="space-y-1.5">
              {item.outcomes.map((o, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/75">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                  {o}
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="mt-5">
            <h3 className="text-xs tracking-[0.3em] uppercase text-primary/80 mb-3">Benefits</h3>
            <div className="grid grid-cols-2 gap-3">
              {item.benefits.map((b, i) => (
                <div key={i} className="rounded-xl bg-muted/50 border border-border/40 p-3">
                  <p className="text-sm font-medium text-foreground">{b.title}</p>
                  <p className="mt-1 text-xs text-foreground/60 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Subsections */}
          {item.subsections && item.subsections.length > 0 && (
            <div className="mt-6 border-t border-border/40 pt-6">
              <h3 className="text-xs tracking-[0.3em] uppercase text-primary/80 mb-4">Specialisations</h3>
              <div className="space-y-3">
                {item.subsections.map((sub) => (
                  <ModalSubsection key={sub.title} sub={sub} />
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-8 flex justify-center">
            <Link
              to="/book"
              onClick={handleClose}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3 text-sm font-medium shadow-soft hover:shadow-glow hover:scale-105 transition-all duration-500"
            >
              Book a consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Modal Subsection Accordion ───────────────────────────────────────────── */

function ModalSubsection({ sub }: { sub: CatalogSubsection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl border border-border/40 bg-muted/30 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-4 py-3 text-left focus:outline-none group/sub"
      >
        <h4 className="text-sm md:text-base font-medium text-foreground transition-colors group-hover/sub:text-primary">
          {sub.title}
        </h4>
        <ChevronDown
          size={16}
          className={`shrink-0 transition-transform duration-500 text-primary/50 group-hover/sub:text-primary/70 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4 space-y-3">
            <p className="text-sm leading-relaxed text-foreground/70">{sub.what}</p>
            {sub.whoCanBenefit && sub.whoCanBenefit.length > 0 && (
              <div>
                <p className="text-[11px] tracking-[0.2em] uppercase text-primary/60 mb-1.5">Who can benefit</p>
                <ul className="space-y-1">
                  {sub.whoCanBenefit.map((w, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-foreground/65">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary/30" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

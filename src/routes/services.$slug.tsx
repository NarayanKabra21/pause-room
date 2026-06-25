import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, ChevronRight, Sparkles } from "lucide-react";
import { useEffect } from "react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";
import { getCatalogItem, getAdjacent, type CatalogItem } from "@/data/servicesCatalog";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const item = getCatalogItem(params.slug);
    if (!item) throw notFound();
    const adjacent = getAdjacent(params.slug);
    return { item, adjacent };
  },
  head: ({ loaderData }) => {
    const i = loaderData?.item;
    return {
      meta: [
        { title: i ? `${i.title} — The Pause Room` : "Service" },
        { name: "description", content: i?.shortDesc ?? "" },
        { property: "og:title", content: i?.title ?? "" },
        { property: "og:description", content: i?.shortDesc ?? "" },
        { property: "og:image", content: i?.heroImage ?? "" },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  useReveal();
  const data = Route.useLoaderData();
  const item = data.item as CatalogItem;
  const adjacent = data.adjacent as { prev?: CatalogItem; next?: CatalogItem };
  const Icon = item.icon;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [item.slug]);

  return (
    <main className="relative overflow-hidden animate-fade-in">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden">
        <img
          src={item.heroImage}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-background/10 to-background/30" />

        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col justify-end px-6 pb-20 md:pb-28">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-xs tracking-widest uppercase text-white/85 animate-fade-up"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">{item.categoryLabel}</span>
          </nav>

          <div
            className="flex items-center gap-3 animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            <div className="h-11 w-11 rounded-full glass-dark flex items-center justify-center text-white">
              <Icon size={18} strokeWidth={1.6} />
            </div>
            <span className="text-xs tracking-[0.4em] uppercase text-white/85">
              {item.categoryLabel}
            </span>
          </div>

          <h1
            className="mt-5 text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] animate-fade-up"
            style={{ animationDelay: "180ms" }}
          >
            {item.title}
          </h1>
          <p
            className="mt-5 max-w-2xl text-lg md:text-xl text-white/90 font-display italic animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            {item.shortDesc}
          </p>
        </div>
      </section>

      {/* HEALING QUOTE */}
      <section className="relative py-24 md:py-32 bg-gradient-sky overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <span className="absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-primary/40 animate-float" />
          <span className="absolute right-[12%] bottom-[20%] h-2 w-2 rounded-full bg-primary/30 animate-float-slow" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 text-center reveal-on-scroll">
          <Sparkles size={22} className="mx-auto text-primary/80" strokeWidth={1.4} />
          <blockquote className="mt-6 font-display text-3xl md:text-4xl lg:text-5xl leading-snug italic text-foreground/90">
            "{item.quote}"
          </blockquote>
          <p className="mt-6 text-sm tracking-[0.3em] uppercase text-muted-foreground">
            — {item.quoteAuthor}
          </p>
        </div>
      </section>

      {/* DETAILED INFORMATION */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 space-y-20">
          <div className="reveal-on-scroll grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-2">
              <span className="text-xs tracking-[0.4em] uppercase text-primary/80">What it is</span>
              <h2 className="mt-3 text-3xl md:text-4xl">About this service</h2>
            </div>
            <p className="md:col-span-3 text-lg leading-relaxed text-foreground/85">{item.what}</p>
          </div>

          <div className="reveal-on-scroll grid md:grid-cols-5 gap-10 items-start md:[direction:rtl]">
            <div className="md:col-span-2 [direction:ltr]">
              <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Why it matters</span>
              <h2 className="mt-3 text-3xl md:text-4xl">Why this work matters</h2>
            </div>
            <p className="md:col-span-3 text-lg leading-relaxed text-foreground/85 [direction:ltr]">
              {item.why}
            </p>
          </div>


          {/* Outcomes (only when no subsections) */}
          {!item.subsections && (
            <div className="reveal-on-scroll">
              <div className="max-w-2xl">
                <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Expected outcomes</span>
                <h2 className="mt-3 text-3xl md:text-4xl">What you can expect</h2>
              </div>
              <ul className="mt-10 grid md:grid-cols-2 gap-4">
                {item.outcomes.map((o, i) => (
                  <li
                    key={i}
                    className="reveal-on-scroll flex items-start gap-3 rounded-2xl bg-secondary/40 p-5"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <Check size={18} className="mt-0.5 text-primary shrink-0" strokeWidth={2} />
                    <span className="text-foreground/85 leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* BENEFITS (only when no subsections) */}
      {!item.subsections && (
        <section className="relative py-24 md:py-32 bg-gradient-sky">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl reveal-on-scroll">
              <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Key Benefits</span>
              <h2 className="mt-3 text-3xl md:text-5xl">
                The quiet gifts of <em className="text-gradient-lake not-italic">this work</em>
              </h2>
            </div>
            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {item.benefits.map((b, i) => (
                <div
                  key={b.title}
                  className="reveal-on-scroll glass rounded-2xl p-6"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <h3 className="text-lg">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHO CAN BENEFIT (only when no subsections) */}
      {!item.subsections && (
        <section className="relative py-24 md:py-32">
          <div className="mx-auto max-w-5xl px-6">
            <div className="reveal-on-scroll max-w-2xl">
              <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Who it's for</span>
              <h2 className="mt-3 text-3xl md:text-5xl">Who can benefit</h2>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 gap-5">
              {item.whoCanBenefit.map((w, i) => (
                <div
                  key={i}
                  className="reveal-on-scroll flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-soft"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Icon size={18} strokeWidth={1.6} />
                  </div>
                  <p className="leading-relaxed text-foreground/85">{w}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SUBSECTIONS — one block per included therapy */}
      {item.subsections && (
        <section className="relative">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24 reveal-on-scroll text-center">
            <span className="text-xs tracking-[0.4em] uppercase text-primary/80">What's included</span>
            <h2 className="mt-3 text-3xl md:text-5xl">
              Therapies within <em className="text-gradient-lake not-italic">{item.title}</em>
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-foreground/75 leading-relaxed">
              Each of the focused therapies below sits within this care category. Explore the one
              that meets you where you are.
            </p>
          </div>

          {item.subsections.map((sub, sIdx) => (
            <div
              key={sub.title}
              className={`relative py-20 md:py-28 ${sIdx % 2 === 0 ? "bg-gradient-sky" : ""}`}
            >
              <div className="mx-auto max-w-5xl px-6">
                {/* Subsection header */}
                <div className="reveal-on-scroll text-center mb-16">
                  <span className="text-[10px] tracking-[0.4em] uppercase text-primary/80">
                    {String(sIdx + 1).padStart(2, "0")} · Subsection
                  </span>
                  <h3 className="mt-4 font-display text-3xl md:text-5xl">{sub.title}</h3>
                  <div className="mx-auto mt-6 h-px w-20 bg-primary/40" />
                </div>

                <div className="space-y-16">
                  {/* What it is */}
                  <div className="reveal-on-scroll grid md:grid-cols-5 gap-8 items-start">
                    <div className="md:col-span-2">
                      <span className="text-xs tracking-[0.4em] uppercase text-primary/80">What it is</span>
                      <h4 className="mt-3 text-2xl md:text-3xl">About</h4>
                    </div>
                    <p className="md:col-span-3 text-lg leading-relaxed text-foreground/85">{sub.what}</p>
                  </div>

                  {/* Why it matters */}
                  <div className="reveal-on-scroll grid md:grid-cols-5 gap-8 items-start md:[direction:rtl]">
                    <div className="md:col-span-2 [direction:ltr]">
                      <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Why it matters</span>
                      <h4 className="mt-3 text-2xl md:text-3xl">Why this work matters</h4>
                    </div>
                    <p className="md:col-span-3 text-lg leading-relaxed text-foreground/85 [direction:ltr]">
                      {sub.why}
                    </p>
                  </div>

                  {/* What you can expect */}
                  <div className="reveal-on-scroll">
                    <div className="max-w-2xl">
                      <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Expected outcomes</span>
                      <h4 className="mt-3 text-2xl md:text-3xl">What you can expect</h4>
                    </div>
                    <ul className="mt-8 grid md:grid-cols-2 gap-4">
                      {sub.outcomes.map((o, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 rounded-2xl bg-secondary/40 p-5"
                        >
                          <Check size={18} className="mt-0.5 text-primary shrink-0" strokeWidth={2} />
                          <span className="text-foreground/85 leading-relaxed">{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key benefits */}
                  <div className="reveal-on-scroll">
                    <div className="max-w-2xl">
                      <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Key Benefits</span>
                      <h4 className="mt-3 text-2xl md:text-3xl">The quiet gifts of this work</h4>
                    </div>
                    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                      {sub.benefits.map((b) => (
                        <div key={b.title} className="glass rounded-2xl p-6">
                          <h5 className="text-lg">{b.title}</h5>
                          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Who can benefit */}
                  <div className="reveal-on-scroll">
                    <div className="max-w-2xl">
                      <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Who it's for</span>
                      <h4 className="mt-3 text-2xl md:text-3xl">Who can benefit</h4>
                    </div>
                    <div className="mt-8 grid sm:grid-cols-2 gap-5">
                      {sub.whoCanBenefit.map((w, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-soft"
                        >
                          <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                            <Icon size={18} strokeWidth={1.6} />
                          </div>
                          <p className="leading-relaxed text-foreground/85">{w}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}


      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-lake opacity-90" />
        <div className="relative mx-auto max-w-3xl px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl">Ready to begin your journey?</h2>
          <Link
            to="/book"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-foreground px-7 py-3 text-sm font-medium hover:scale-105 transition-all duration-500"
          >
            Book a consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* PREV / NEXT */}
      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-2 gap-6">
          {adjacent.prev ? (
            <Link
              to="/services/$slug"
              params={{ slug: adjacent.prev.slug }}
              className="group flex items-center gap-4 rounded-2xl p-5 hover:bg-secondary/40 transition-colors"
            >
              <ArrowLeft
                size={18}
                className="text-primary transition-transform duration-500 group-hover:-translate-x-1"
              />
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
                  Previous service
                </p>
                <p className="mt-1 text-lg font-display">{adjacent.prev.title}</p>
              </div>
            </Link>
          ) : <div />}

          {adjacent.next ? (
            <Link
              to="/services/$slug"
              params={{ slug: adjacent.next.slug }}
              className="group flex items-center justify-end gap-4 rounded-2xl p-5 hover:bg-secondary/40 transition-colors text-right"
            >
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
                  Next service
                </p>
                <p className="mt-1 text-lg font-display">{adjacent.next.title}</p>
              </div>
              <ArrowRight
                size={18}
                className="text-primary transition-transform duration-500 group-hover:translate-x-1"
              />
            </Link>
          ) : <div />}
        </div>
      </section>

      <Footer />
    </main>
  );
}

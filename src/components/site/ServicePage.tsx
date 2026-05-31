import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Check, Sparkles, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";
import type { Service } from "@/data/services";
import { services } from "@/data/services";

export function ServicePage({ service }: { service: Service }) {
  useReveal();

  // ensure each navigation starts from the top with a soft feel
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [service.slug]);

  const Icon = service.icon;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <main className="relative overflow-hidden animate-fade-in">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
        <img
          src={service.hero}
          alt={service.title}
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
        {/* Softer hero treatment — keep the image as the hero, gradient is whisper-light */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/35" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/55 to-transparent" />


        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-20 md:pb-28">
          <Link
            to="/"
            hash="services"
            className="inline-flex w-fit items-center gap-2 rounded-full glass px-4 py-2 text-sm text-foreground/80 transition-all duration-500 hover:-translate-x-1 hover:text-primary animate-fade-up"
          >
            <ArrowLeft size={14} /> All services
          </Link>

          <div className="mt-6 flex items-center gap-3 animate-fade-up">
            <span className="h-10 w-10 rounded-xl bg-white/70 text-primary flex items-center justify-center backdrop-blur">
              <Icon size={20} strokeWidth={1.6} />
            </span>
            <span className="text-xs tracking-[0.4em] uppercase text-white/85">
              {service.title}
            </span>
          </div>

          <h1
            className="mt-5 max-w-4xl text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            {service.headline}
          </h1>
          <p
            className="mt-5 max-w-2xl text-lg md:text-xl text-white/90 font-display italic animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            {service.tagline}
          </p>

          <div
            className="mt-8 flex flex-wrap gap-3 animate-fade-up"
            style={{ animationDelay: "360ms" }}
          >
            <Link
              to="/"
              hash="book"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow-soft transition-all duration-500 hover:shadow-glow hover:scale-105"
            >
              Book a session <ArrowRight size={16} />
            </Link>
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm text-foreground/90 hover:text-primary transition-all duration-500"
            >
              Talk to us first
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <div className="absolute top-20 -left-20 h-80 w-80 rounded-full bg-primary/15 blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-float" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center reveal-on-scroll">
          <span className="text-xs tracking-[0.4em] uppercase text-primary/80">A gentle introduction</span>
          <p className="mt-6 text-2xl md:text-3xl font-display italic leading-relaxed text-foreground/90">
            {service.intro}
          </p>
          <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed">
            {service.story}
          </p>
        </div>
      </section>

      {/* HEALING QUOTE — RIBBON 1 */}
      <section className="relative -mt-6">
        <div className="mx-auto max-w-4xl px-6">
          <figure className="reveal-on-scroll glass rounded-3xl px-8 py-10 md:px-14 md:py-14 text-center">
            <span className="text-5xl md:text-6xl font-display text-primary/30 leading-none select-none">“</span>
            <blockquote className="mt-2 text-2xl md:text-3xl font-display italic leading-snug text-foreground/90">
              Healing takes time, and asking for help is a courageous step.
            </blockquote>
            <figcaption className="mt-4 text-xs tracking-[0.4em] uppercase text-muted-foreground">— Mariska Hargitay</figcaption>
          </figure>
        </div>
      </section>

      {/* DEEP DIVE — elaboration + why us */}
      <section className="relative py-28 md:py-32">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-3 reveal-on-scroll">
            <span className="text-xs tracking-[0.4em] uppercase text-primary/80">In depth</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl leading-tight">
              Understanding <em className="text-gradient-lake not-italic">{service.title.toLowerCase()}</em>, slowly and fully.
            </h2>
            <div className="mt-8 space-y-5 text-base md:text-[1.07rem] text-foreground/80 leading-[1.85]">
              <p>
                {service.intro} At The Pause Room, we believe that the way care is offered matters as much as the care itself. Every conversation begins with listening — not assessing, not labelling, simply being present with what you bring through the door.
              </p>
              <p>
                {service.story}
              </p>
              <p>
                We move slowly because the inner world rarely moves on schedule. Whether the work unfolds across a single careful evaluation or a long, returning rhythm of sessions, our intention is the same: that you leave each meeting feeling a little more understood, a little less alone, and a little more equipped for the days between.
              </p>
              <p>
                Our team brings together psychiatry, clinical psychology and counselling — qualified, supervised and quietly devoted to the craft of holding people well. We integrate evidence-based approaches with a deeply human warmth, so the science never becomes louder than the soul.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-2 reveal-on-scroll">
            <div className="sticky top-24 glass rounded-3xl p-8 md:p-9">
              <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Why us</span>
              <h3 className="mt-3 text-2xl md:text-3xl leading-snug">
                The care we bring to <em className="not-italic text-primary">{service.title.toLowerCase()}</em>.
              </h3>
              <ul className="mt-7 space-y-5 text-foreground/85">
                {[
                  { t: "Quietly qualified", d: "Clinicians trained at India's leading institutions, practising with humility." },
                  { t: "Held, not handled", d: "You are met as a person, not processed as a case." },
                  { t: "Evidence with warmth", d: "Validated tools and frameworks delivered through a gentle, human lens." },
                  { t: "Time that is yours", d: "Unhurried sessions, with space to breathe between every word." },
                  { t: "A whole ecosystem", d: "Assessment, therapy and aftercare under one calm roof." },
                ].map((w) => (
                  <li key={w.t} className="flex items-start gap-3">
                    <span className="mt-1 h-6 w-6 flex-shrink-0 rounded-full bg-primary/15 text-primary flex items-center justify-center">
                      <Check size={14} strokeWidth={2.2} />
                    </span>
                    <span>
                      <span className="block text-foreground">{w.t}</span>
                      <span className="block text-sm text-muted-foreground leading-relaxed mt-0.5">{w.d}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* HEALING QUOTE — RIBBON 2 (full-bleed serene) */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-dawn opacity-80" />
        <div className="absolute inset-0 pointer-events-none opacity-50">
          <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-float" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 text-center reveal-on-scroll">
          <p className="text-2xl md:text-4xl font-display italic leading-snug text-foreground/90">
            “You don't have to be positive all the time. It is perfectly okay to feel sad, angry, annoyed, frustrated, scared or anxious. Having feelings doesn't make you a negative person. It makes you human.”
          </p>
          <p className="mt-6 text-xs tracking-[0.4em] uppercase text-muted-foreground">— Lori Deschene</p>
        </div>
      </section>


      {/* BENEFITS */}
      <section className="relative py-24 bg-gradient-sky">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl reveal-on-scroll">
            <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Benefits</span>
            <h2 className="mt-4 text-4xl md:text-5xl">What slowly begins to <em className="text-gradient-lake not-italic">change</em>.</h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.benefits.map((b, i) => (
              <div
                key={b.title}
                className="reveal-on-scroll group glass rounded-2xl p-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-elevated"
                style={{ transitionDelay: `${(i % 4) * 100}ms` }}
              >
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Sparkles size={18} strokeWidth={1.6} />
                </div>
                <h3 className="text-xl">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl reveal-on-scroll">
            <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Our approach</span>
            <h2 className="mt-4 text-4xl md:text-5xl">A slow, <em className="text-gradient-lake not-italic">held</em> process.</h2>
            <p className="mt-4 text-muted-foreground">No rush. No pressure. Just a clear, compassionate path forward.</p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {service.process.map((p, i) => (
              <div
                key={p.step}
                className="reveal-on-scroll relative glass rounded-3xl p-8 transition-all duration-700 hover:shadow-elevated hover:-translate-y-1"
                style={{ transitionDelay: `${(i % 2) * 120}ms` }}
              >
                <div className="absolute -top-4 -left-2 text-6xl md:text-7xl font-display text-primary/15 select-none">
                  {p.step}
                </div>
                <h3 className="relative text-2xl">{p.title}</h3>
                <p className="relative mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO + EXPECTATIONS */}
      <section className="relative py-24 bg-gradient-dawn">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
          <div className="reveal-on-scroll glass rounded-3xl p-8 md:p-10">
            <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Who it is for</span>
            <h3 className="mt-4 text-3xl md:text-4xl">If any of this sounds like you,<br />you are welcome here.</h3>
            <ul className="mt-8 space-y-4">
              {service.forWho.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/85">
                  <span className="mt-1 h-6 w-6 flex-shrink-0 rounded-full bg-primary/15 text-primary flex items-center justify-center">
                    <Check size={14} strokeWidth={2.2} />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal-on-scroll space-y-5">
            <span className="text-xs tracking-[0.4em] uppercase text-primary/80">What to expect</span>
            <h3 className="text-3xl md:text-4xl">The shape of a session.</h3>
            <div className="mt-4 space-y-4">
              {service.expectations.map((e) => (
                <div key={e.title} className="glass rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1">
                  <h4 className="text-lg">{e.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="relative py-28">
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 h-96 w-[40rem] rounded-full bg-primary/10 blur-3xl animate-float-slow" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 text-center reveal-on-scroll">
          <span className="text-xs tracking-[0.4em] uppercase text-primary/80">A quiet word</span>
          <p className="mt-8 text-3xl md:text-4xl font-display italic leading-snug text-foreground/90">
            “{service.testimonial.quote}”
          </p>
          <p className="mt-6 text-sm tracking-widest uppercase text-muted-foreground">— {service.testimonial.author}</p>
        </div>
      </section>

      {/* HEALING QUOTES — TRIPTYCH */}
      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center reveal-on-scroll mb-12">
            <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Words to rest in</span>
            <h2 className="mt-3 text-3xl md:text-4xl">Read these slowly. Breathe between them.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { q: "What we don't need anymore, we let go of. What we still need, we make room for.", a: "Yung Pueblo" },
              { q: "You are the sky. Everything else — it's just the weather.", a: "Pema Chödrön" },
              { q: "Almost everything will work again if you unplug it for a few minutes, including you.", a: "Anne Lamott" },
            ].map((h, i) => (
              <figure
                key={h.a}
                className="reveal-on-scroll glass rounded-3xl p-8 md:p-9 text-center transition-all duration-700 hover:-translate-y-2 hover:shadow-elevated"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="text-4xl font-display text-primary/30 leading-none select-none">“</span>
                <blockquote className="mt-2 text-lg md:text-xl font-display italic leading-relaxed text-foreground/85">
                  {h.q}
                </blockquote>
                <figcaption className="mt-5 text-xs tracking-[0.35em] uppercase text-muted-foreground">— {h.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>


      {/* FAQs */}
      <section className="relative py-24 bg-gradient-sky">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center reveal-on-scroll">
            <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Gentle answers</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Things you might be <em className="text-gradient-lake not-italic">wondering</em>.</h2>
          </div>
          <div className="mt-14 space-y-4">
            {service.faqs.map((f, i) => (
              <details
                key={f.q}
                className="reveal-on-scroll group glass rounded-2xl p-6 transition-all duration-500 open:shadow-elevated"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <summary className="cursor-pointer list-none flex items-center justify-between text-lg text-foreground/90">
                  {f.q}
                  <span className="ml-4 text-primary transition-transform duration-500 group-open:rotate-45 text-2xl leading-none">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-lake" />
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-10 left-10 h-80 w-80 rounded-full bg-white/30 blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-accent/40 blur-3xl animate-float-slow" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center reveal-on-scroll">
          <span className="text-xs tracking-[0.4em] uppercase text-white/85">Begin gently</span>
          <h2 className="mt-5 text-4xl md:text-6xl text-white leading-tight">
            Your first session<br />is just a breath away.
          </h2>
          <p className="mt-6 text-lg text-white/85 max-w-xl mx-auto">
            Book a 15-minute introductory call. No commitment, no pressure — just a quiet conversation to see if we are the right fit for you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              hash="book"
              className="inline-flex items-center gap-2 rounded-full bg-white text-foreground px-8 py-4 text-sm font-medium shadow-elevated transition-all duration-500 hover:scale-105"
            >
              Book a consultation <ArrowRight size={16} />
            </Link>
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center gap-2 rounded-full glass-dark text-white px-8 py-4 text-sm transition-all duration-500 hover:scale-105"
            >
              Send us a message
            </Link>
          </div>
        </div>
      </section>

      {/* OTHERS */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between reveal-on-scroll">
            <div>
              <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Explore more</span>
              <h2 className="mt-3 text-3xl md:text-4xl">Other ways we can <em className="text-gradient-lake not-italic">hold</em> you.</h2>
            </div>
            <Link to="/" hash="services" className="hidden md:inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all duration-500">
              All services <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((s, i) => {
              const OIcon = s.icon;
              return (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="reveal-on-scroll group relative overflow-hidden rounded-3xl glass transition-all duration-700 hover:-translate-y-2 hover:shadow-elevated"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={s.hero}
                      alt={s.title}
                      loading="lazy"
                      width={1920}
                      height={1080}
                      className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <span className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <OIcon size={18} strokeWidth={1.6} />
                      </span>
                      <h3 className="text-xl">{s.title}</h3>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.card}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all duration-500">
                      Read more <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

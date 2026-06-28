import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, Sparkles, Leaf, Lock } from "lucide-react";

const values = [
  { icon: HeartHandshake, title: "Compassion first", desc: "Every interaction begins with warmth, not protocol." },
  { icon: Lock, title: "Confidentiality", desc: "What you share stays held with strict therapeutic ethics." },
  { icon: Sparkles, title: "Evidence-based care", desc: "Clinical rigour woven gently into a human-shaped experience." },
  { icon: Leaf, title: "Patient-led pace", desc: "We move at the pace of your healing — never the clock." },
];
import { PageShell } from "@/components/site/PageShell";
import { team } from "@/data/team";
import pauseImgAsset from "@/assets/pages/pause-hero.jpg.asset.json";
const pauseImg = pauseImgAsset.url;

export const Route = createFileRoute("/pause-room")({
  head: () => ({
    meta: [
      { title: "The Pause Room — Our Story & Philosophy" },
      { name: "description", content: "The story, beliefs and healing philosophy behind The Pause Room." },
      { property: "og:title", content: "The Pause Room — Our Story" },
      { property: "og:description", content: "A peaceful sanctuary built for emotional healing." },
    ],
  }),
  component: PauseRoomPage,
});

function PauseRoomPage() {
  return (
    <PageShell image={pauseImg}>
      {/* ── 1. The world we live in ── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 -right-24 h-[24rem] w-[24rem] rounded-full bg-accent/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 text-center reveal-on-scroll">
          <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Our Story</span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
            A world that celebrates <em className="text-gradient-lake not-italic">constant change</em>
          </h2>
          <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="mt-12 space-y-6 text-lg md:text-xl leading-relaxed text-foreground/80">
            <p>
              We live in a world that celebrates constant change.
            </p>
            <p>
              Move fast. Achieve more. Move faster. The cycle keeps going.
            </p>
            <p>
              Somewhere along the way, we stop noticing ourselves.
            </p>
            <p>
              Perhaps that is why the simplest thing has become the hardest thing —
            </p>
            <p className="font-display text-2xl md:text-3xl text-foreground/95">
              To <em className="italic">PAUSE</em>
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. Why we exist ── */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6 reveal-on-scroll">
          <div className="text-center">
            <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Why We Exist</span>
            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl">
              Born from a quiet <em className="text-gradient-lake not-italic">realisation</em>
            </h2>
          </div>

          <div className="mt-12 space-y-6 text-lg md:text-xl leading-relaxed text-foreground/85">
            <p>
              Not as a place that promises to fix people, because we do not believe people are meant to be fixed
            </p>
            <p>
              We believe they are meant to be <strong>understood</strong>
            </p>
            <p>
              The Pause Room was born from this very thought
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. What we believe ── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center reveal-on-scroll">
            <span className="text-xs tracking-[0.4em] uppercase text-primary/80">What We Believe</span>
            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl">
              Beneath every feeling is a <em className="text-gradient-lake not-italic">story</em>
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            <div className="reveal-on-scroll glass rounded-2xl p-8 text-center" style={{ transitionDelay: "0ms" }}>
              <p className="font-display text-4xl text-primary/60 mb-4">01</p>
              <p className="text-lg leading-relaxed text-foreground/85">
                Beneath every fear, anxiety, and worry is a story waiting to be heard.
              </p>
            </div>
            <div className="reveal-on-scroll glass rounded-2xl p-8 text-center" style={{ transitionDelay: "80ms" }}>
              <p className="font-display text-4xl text-primary/60 mb-4">02</p>
              <p className="text-lg leading-relaxed text-foreground/85">
                Beneath every self-doubt is a strength waiting to be rediscovered.
              </p>
            </div>
            <div className="reveal-on-scroll glass rounded-2xl p-8 text-center" style={{ transitionDelay: "160ms" }}>
              <p className="font-display text-4xl text-primary/60 mb-4">03</p>
              <p className="text-lg leading-relaxed text-foreground/85">
                Behind every overwhelming emotion is a human longing for kindness, acceptance, and understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Our philosophy ── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-lake opacity-90" />
        <div className="relative mx-auto max-w-4xl px-6 text-center text-white reveal-on-scroll">
          <span className="text-xs tracking-[0.4em] uppercase text-white/70">Our Philosophy</span>
          <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl">
            Sometimes the most meaningful step forward begins by simply <em className="not-italic opacity-90">pausing</em>
          </h2>
          <div className="mt-10 space-y-6 text-lg md:text-xl leading-relaxed text-white/90">
            <p>
              In conversations that are not rushed, but held with presence.
            </p>
            <p>
              In the gentle pauses where emotions begin to make sense, where thoughts find clarity, and where insight quietly unfolds and the human evolves.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. Our mission ── */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6 reveal-on-scroll">
          <div className="text-center">
            <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Our Mission</span>
            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl">
              A space to explore every part of <em className="text-gradient-lake not-italic">yourself</em>
            </h2>
          </div>

          <div className="mt-12 space-y-6 text-lg md:text-xl leading-relaxed text-foreground/85">
            <p>
              Our goal is to create a space where individuals feel safe to explore every part of themselves without judgment.
            </p>
            <p>
              Where vulnerability is not seen as weakness but as the beginning of self-discovery. Where reflection becomes a pathway to awareness, resilience, and growth.
            </p>
            <p>
              Because we believe that the most profound relationship a human will ever have is the one he builds with himself.
            </p>
            <p>
              We help create families, workplaces, and communities where emotional well-being is not an afterthought, but a way of living.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5.5 Our values ── */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl reveal-on-scroll">
            <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Our Values</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Care, held by <em className="text-gradient-lake not-italic">principles</em></h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="reveal-on-scroll glass rounded-2xl p-6" style={{ transitionDelay: `${i * 80}ms` }}>
                <Icon size={22} className="text-primary mb-4" strokeWidth={1.6} />
                <h3 className="text-lg">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. What we are ── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 reveal-on-scroll">
          <div className="text-center">
            <span className="text-xs tracking-[0.4em] uppercase text-primary/80">What We Are</span>
            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl">
              More than a clinic. An <em className="text-gradient-lake not-italic">invitation</em>
            </h2>
          </div>

          <div className="mt-12 space-y-8 text-lg md:text-xl leading-relaxed text-foreground/85 text-center">
            <p>
              The Pause Room is more than a psychological clinic. It is a wellness centre.
            </p>
            <p className="font-display text-2xl md:text-3xl text-foreground/90">
              It is an invitation.
            </p>
            <div className="space-y-2 text-foreground/80">
              <p>To pause.</p>
              <p>To reflect.</p>
              <p>To reconnect with yourself.</p>
            </div>
            <p>
              And to discover that healing doesn't always begin with finding the right answers — it often begins by giving yourself permission to stop, listen, and simply be.
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. Founder's words ── */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="mx-auto max-w-3xl px-6 reveal-on-scroll text-center">
          <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Founder's Words</span>

          <blockquote className="mt-10">
            <p className="font-display italic text-2xl md:text-3xl lg:text-4xl text-foreground/90 leading-snug">
              "Emotional well-being isn't built through conversations alone. It is built through conversations and thoughts that make space for pause."
            </p>
          </blockquote>

          <div className="mt-10">
            <p className="text-lg font-medium text-foreground">Aparna Ladha Somani</p>
            <p className="mt-1 text-sm text-muted-foreground tracking-wide uppercase">Founder</p>
          </div>
        </div>
      </section>

      {/* ── Team section (preserved) ── */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal-on-scroll max-w-3xl">
            <span className="text-xs tracking-[0.4em] uppercase text-primary/80">The People of the Room</span>
            <h2 className="mt-3 text-3xl md:text-5xl">The hands and hearts that hold this room</h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/80">
              The Pause Room is shaped, daily, by a small team of psychiatrists and psychologists
              who chose this work as a vocation. Each of them brings a different kind of
              expertise — psychiatry, trauma and adult psychotherapy, child and adolescent care — and
              the same underlying commitment: to listen carefully, move slowly, and honour every
              person who arrives. What follows is a quiet introduction to the people behind the room.
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {team.map((m, i) => (
              <article
                key={m.slug}
                className={`reveal-on-scroll grid md:grid-cols-12 gap-8 md:gap-12 items-center ${
                  i % 2 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className="md:col-span-5 [direction:ltr]">
                  <div className="overflow-hidden rounded-3xl shadow-soft">
                    <img
                      src={m.photo}
                      alt={m.name}
                      loading="lazy"
                      className="h-full w-full object-cover aspect-[4/5] transition-transform duration-[1400ms] hover:scale-105"
                    />
                  </div>
                </div>
                <div className="md:col-span-7 [direction:ltr]">
                  <span className="text-xs tracking-[0.4em] uppercase text-primary/80">{m.role}</span>
                  <h3 className="mt-2 text-3xl md:text-4xl">{m.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground italic">{m.specialization} · {m.experience}</p>
                  <div className="mt-5 space-y-3 text-foreground/85 leading-relaxed">
                    {m.bio.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                  <div className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">Qualifications</p>
                      <p className="mt-1 text-foreground/80">{m.qualifications.join(" · ")}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">Certifications</p>
                      <p className="mt-1 text-foreground/80">{m.certifications.join(" · ")}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">Expertise</p>
                      <p className="mt-1 text-foreground/80">{m.expertise.join(", ")}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">Languages</p>
                      <p className="mt-1 text-foreground/80">{m.languages.join(", ")}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="reveal-on-scroll mt-20 max-w-2xl mx-auto text-center">
            <p className="text-lg text-foreground/80 leading-relaxed italic">
              "We are a small team on purpose. It is the only way we know how to do this work — with
              presence, with patience, and with the time each person deserves."
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-lake opacity-90" />
        <div className="relative mx-auto max-w-3xl px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl">Step inside the room</h2>
          <p className="mt-4 text-white/85">A quiet, confidential conversation is the only first step.</p>
          <Link to="/book" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-foreground px-7 py-3 text-sm font-medium hover:scale-105 transition-all duration-500">
            Book a consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

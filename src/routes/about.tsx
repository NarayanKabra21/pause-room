import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, Sparkles, Leaf, Lock } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import nature from "@/assets/about-nature.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — The Pause Room" },
      { name: "description", content: "The story, mission and philosophy behind The Pause Room — a sanctuary for mental health and emotional wellness." },
      { property: "og:title", content: "About Us — The Pause Room" },
      { property: "og:description", content: "A sanctuary for the quietly tired. Our story, values and approach to care." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: HeartHandshake, title: "Compassion first", desc: "Every interaction begins with warmth, not protocol." },
  { icon: Lock, title: "Confidentiality", desc: "What you share stays held with strict therapeutic ethics." },
  { icon: Sparkles, title: "Evidence-based care", desc: "Clinical rigour woven gently into a human-shaped experience." },
  { icon: Leaf, title: "Patient-led pace", desc: "We move at the pace of your healing — never the clock." },
];

function AboutPage() {
  return (
    <PageShell
      eyebrow="About Us"
      title={<>Sometimes the pause is<br /><em className="not-italic">where healing begins.</em></>}
      intro="A sanctuary built for the quietly tired."
      image={nature}
    >
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 reveal-on-scroll space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>The Pause Room was created with one simple belief — everyone deserves a safe space to be heard without judgment.</p>
          <p>In today's fast-moving world, people silently carry anxiety, stress, emotional exhaustion, loneliness, heartbreak, burnout, and trauma while pretending everything is fine. The Pause Room exists to change that.</p>
          <p>We provide compassionate psychiatric care, therapy and emotional wellness support in a calming environment where healing feels natural, safe, and personal.</p>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-sky">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-8">
          {[
            { label: "Mission", body: "To make emotional wellness accessible, unhurried and dignified — for every person who walks through our doors." },
            { label: "Vision", body: "A world where pausing to care for your inner life is as ordinary as caring for your body." },
            { label: "Philosophy", body: "Therapy that listens before it speaks. Care that respects the wholeness of every person." },
          ].map((b) => (
            <div key={b.label} className="reveal-on-scroll glass rounded-3xl p-8">
              <span className="text-xs tracking-[0.4em] uppercase text-primary/80">{b.label}</span>
              <p className="mt-4 text-lg leading-relaxed text-foreground/85">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl reveal-on-scroll">
            <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Our Values</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Care, held by <em className="text-gradient-lake not-italic">principles</em>.</h2>
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

      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-lake opacity-90" />
        <div className="relative mx-auto max-w-3xl px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl">Begin gently.</h2>
          <p className="mt-4 text-white/85">A 15-minute intro call to see if we are the right fit for you.</p>
          <Link to="/book" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-foreground px-7 py-3 text-sm font-medium hover:scale-105 transition-all duration-500">
            Book a consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

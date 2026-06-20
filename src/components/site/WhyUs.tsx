import { Leaf, Shield, HeartHandshake, User, Globe2, Lock, Sparkles } from "lucide-react";

const points = [
  { icon: Leaf, title: "Calm-first experience", desc: "Every detail designed to soothe before it serves." },
  { icon: HeartHandshake, title: "Judgment-free space", desc: "Be exactly as you are — messy, raw, unfinished." },
  { icon: User, title: "Personalized healing", desc: "No templates. Your story shapes your care." },
  { icon: Sparkles, title: "Human-centered therapy", desc: "Warm, present clinicians — not just credentials." },
  { icon: Globe2, title: "Online & offline", desc: "Sessions that fit the texture of your life." },
  { icon: Lock, title: "Complete confidentiality", desc: "What you share stays held with us." },
  { icon: Shield, title: "Emotionally safe", desc: "A grounded environment for difficult conversations." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-3 gap-14">
          <div className="lg:sticky lg:top-32 self-start reveal-on-scroll">
            <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Why The Pause Room</span>
            <h2 className="mt-4 text-4xl md:text-5xl leading-tight">
              Trust that feels <em className="text-gradient-lake not-italic">earned</em>, not asked for
            </h2>
            <p className="mt-5 text-muted-foreground">
              We built this around the things people quietly need most — softness, safety, and time.
            </p>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {points.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="reveal-on-scroll group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-elevated hover:border-primary/40 hover:bg-card/90"
                style={{ transitionDelay: `${(i % 2) * 80}ms` }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                <Icon size={22} className="relative text-primary mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" strokeWidth={1.6} />
                <h3 className="relative text-lg transition-colors duration-500 group-hover:text-primary">{title}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight } from "lucide-react";

const posts = [
  { tag: "Anxiety", title: "Managing Anxiety Without Fighting It", read: "5 min" },
  { tag: "Heartbreak", title: "Healing After Heartbreak: A Soft Guide", read: "7 min" },
  { tag: "Students", title: "When Student Stress Becomes Something More", read: "4 min" },
  { tag: "Mind", title: "Why Overthinking Feels Productive (But Isn't)", read: "6 min" },
  { tag: "Wellness", title: "Small Rituals for Emotional Wellness", read: "5 min" },
  { tag: "Sleep", title: "Sleep, Anxiety & The Mind That Won't Quiet", read: "6 min" },
];

export function Blog() {
  return (
    <section id="blog" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 reveal-on-scroll">
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Journal</span>
            <h2 className="mt-4 text-4xl md:text-5xl">
              Words to <em className="text-gradient-lake not-italic">sit with</em>.
            </h2>
          </div>
          <a href="#" className="text-sm text-primary hover:underline">Read all stories →</a>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <article
              key={p.title}
              className="reveal-on-scroll group rounded-3xl overflow-hidden bg-card border border-border/60 transition-all duration-700 hover:-translate-y-2 hover:shadow-elevated"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <div
                  className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(${135 + i * 30}deg, oklch(0.85 0.06 ${210 + i * 8}) 0%, oklch(0.7 0.09 ${230 + i * 5}) 100%)`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute top-4 left-4 text-xs uppercase tracking-widest text-white/90 glass-dark px-3 py-1 rounded-full">
                  {p.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl leading-snug">{p.title}</h3>
                <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                  <span>{p.read} read</span>
                  <ArrowUpRight size={16} className="text-primary transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

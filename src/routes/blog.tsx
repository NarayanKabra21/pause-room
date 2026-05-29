import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { posts } from "@/data/blog";
import blogHero from "@/assets/pages/blog-hero.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — The Pause Room" },
      { name: "description", content: "Reflections on therapy, mental health, relationships and emotional wellness." },
      { property: "og:title", content: "Journal — The Pause Room" },
      { property: "og:description", content: "Words to sit with, from the clinicians at The Pause Room." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const featured = posts[0];
  const rest = posts.slice(1);
  const categories = Array.from(new Set(posts.map((p) => p.category)));

  return (
    <PageShell
      eyebrow="Journal"
      title={<>Words to <em className="not-italic">sit with</em>.</>}
      intro="Quiet writing from our clinicians."
      image={blogHero}
    >
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-2 reveal-on-scroll">
            {categories.map((c) => (
              <span key={c} className="px-4 py-1.5 rounded-full glass text-xs uppercase tracking-widest text-foreground/70">{c}</span>
            ))}
          </div>

          <Link to="/blog/$slug" params={{ slug: featured.slug }} className="reveal-on-scroll mt-10 group block glass rounded-3xl overflow-hidden hover:shadow-elevated transition-all duration-700">
            <div className="grid md:grid-cols-2">
              <div
                className="aspect-[4/3] md:aspect-auto"
                style={{ background: `linear-gradient(135deg, oklch(0.85 0.06 ${featured.hue}) 0%, oklch(0.7 0.09 ${featured.hue + 10}) 100%)` }}
              />
              <div className="p-10">
                <span className="text-xs uppercase tracking-widest text-primary/80">Featured · {featured.category}</span>
                <h2 className="mt-4 text-3xl md:text-4xl">{featured.title}</h2>
                <p className="mt-4 text-muted-foreground">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm text-primary">Read article <ArrowUpRight size={16} /></span>
              </div>
            </div>
          </Link>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p, i) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="reveal-on-scroll group rounded-3xl overflow-hidden bg-card border border-border/60 transition-all duration-700 hover:-translate-y-2 hover:shadow-elevated"
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <div
                  className="aspect-[4/3]"
                  style={{ background: `linear-gradient(${135 + i * 30}deg, oklch(0.85 0.06 ${p.hue}) 0%, oklch(0.7 0.09 ${p.hue + 10}) 100%)` }}
                />
                <div className="p-6">
                  <span className="text-xs uppercase tracking-widest text-primary/80">{p.category}</span>
                  <h3 className="mt-3 text-xl leading-snug">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{p.readTime} read</span>
                    <ArrowUpRight size={14} className="text-primary" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

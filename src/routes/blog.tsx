import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { posts } from "@/data/blog";
import blogHero from "@/assets/pages/blog-hero.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — The Pause Room" },
      {
        name: "description",
        content:
          "Original, evidence-based writing on anxiety, burnout, relationships, parenting, workplace well-being, social media, sleep and emotional resilience.",
      },
      { property: "og:title", content: "Journal — The Pause Room" },
      {
        property: "og:description",
        content:
          "Reflections from our clinicians on the mental health questions of modern life.",
      },
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
      title={
        <>
          Words to <em className="not-italic">sit with</em>
        </>
      }
      intro="Original, evidence-based writing from our clinicians on the mental health questions of modern life — anxiety, burnout, relationships, parenting, workplaces, screens, sleep and resilience."
      image={blogHero}
    >
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-2 reveal-on-scroll">
            {categories.map((c) => (
              <span
                key={c}
                className="px-4 py-1.5 rounded-full glass text-xs uppercase tracking-widest text-foreground/70"
              >
                {c}
              </span>
            ))}
          </div>

          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="reveal-on-scroll mt-10 group block glass rounded-3xl overflow-hidden hover:shadow-elevated transition-all duration-700"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] group-hover:scale-105"
                />
              </div>
              <div className="p-10 md:p-12 flex flex-col justify-center">
                <span className="text-xs uppercase tracking-widest text-primary/80">
                  Featured · {featured.category}
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl leading-tight">
                  {featured.title}
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={13} /> {featured.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={13} /> {featured.readTime} read
                  </span>
                  <span>By {featured.author}</span>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm text-primary">
                  Read article <ArrowUpRight size={16} />
                </span>
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
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs uppercase tracking-widest text-primary/80">
                    {p.category}
                  </span>
                  <h3 className="mt-3 text-xl leading-snug">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {p.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={12} /> {p.readTime}
                    </span>
                    <span>{p.date}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground/80">
                    <span>By {p.author}</span>
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

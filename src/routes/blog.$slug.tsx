import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";
import { getPost, posts } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    return {
      meta: [
        { title: p ? `${p.title} — The Pause Room Journal` : "Journal" },
        { name: "description", content: p?.excerpt ?? "" },
        { property: "og:title", content: p?.title ?? "" },
        { property: "og:description", content: p?.excerpt ?? "" },
        { property: "og:type", content: "article" },
        ...(p?.image ? [{ property: "og:image", content: p.image }] : []),
        ...(p?.image ? [{ name: "twitter:image", content: p.image }] : []),
      ],
    };
  },
  component: PostPage,
});

function PostPage() {
  useReveal();
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="relative overflow-hidden animate-fade-in">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[68vh] min-h-[460px] w-full">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />
        <div className="relative z-10 mx-auto h-full max-w-4xl px-6 flex flex-col justify-end pb-14">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm glass px-4 py-2 rounded-full w-fit text-foreground/80 hover:text-foreground transition"
          >
            <ArrowLeft size={14} /> All articles
          </Link>
          <span className="mt-6 text-xs uppercase tracking-[0.25em] text-primary">
            {post.category}
          </span>
          <h1 className="mt-3 text-4xl md:text-6xl leading-tight text-foreground">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-foreground/70">
            <span className="inline-flex items-center gap-1.5">
              <User size={14} /> {post.author}
              {post.authorRole && (
                <span className="text-foreground/50">· {post.authorRole}</span>
              )}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} /> {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} /> {post.readTime} read
            </span>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="reveal-on-scroll text-2xl md:text-3xl font-display italic leading-relaxed text-foreground/85 border-l-2 border-primary/40 pl-6">
            {post.excerpt}
          </p>

          <div className="mt-14 space-y-12">
            {post.body.map((section, i) => (
              <div key={i} className="reveal-on-scroll space-y-5">
                {section.heading && (
                  <h2 className="text-2xl md:text-3xl font-display text-foreground">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs?.map((para, j) => (
                  <p
                    key={j}
                    className="text-lg leading-relaxed text-foreground/80"
                  >
                    {para}
                  </p>
                ))}
                {section.list && (
                  <ul className="space-y-3 pl-1">
                    {section.list.map((item, k) => (
                      <li
                        key={k}
                        className="flex gap-3 text-lg leading-relaxed text-foreground/80"
                      >
                        <span className="mt-3 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.quote && (
                  <blockquote className="my-6 px-8 py-8 glass rounded-2xl border-l-4 border-primary/60">
                    <p className="text-xl md:text-2xl font-display italic leading-relaxed text-foreground/90">
                      “{section.quote}”
                    </p>
                  </blockquote>
                )}
              </div>
            ))}
          </div>

          {/* Tags */}
          {post.tags?.length > 0 && (
            <div className="mt-16 flex flex-wrap gap-2 reveal-on-scroll">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs uppercase tracking-widest glass text-foreground/70"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Author card */}
          <div className="mt-12 p-8 rounded-2xl glass reveal-on-scroll">
            <p className="text-xs uppercase tracking-widest text-primary/80">
              Written by
            </p>
            <p className="mt-2 text-xl font-display text-foreground">
              {post.author}
            </p>
            {post.authorRole && (
              <p className="text-sm text-muted-foreground">{post.authorRole}</p>
            )}
            <p className="mt-4 text-sm text-foreground/70 leading-relaxed">
              Part of a growing series from The Pause Room. If something here
              resonates, you are warmly invited to{" "}
              <Link to="/book" className="text-primary underline">
                book a session
              </Link>
              .
            </p>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-8 reveal-on-scroll">
            <h2 className="text-2xl md:text-3xl font-display">Keep reading</h2>
            <Link to="/blog" className="text-sm text-primary hover:underline">
              All articles →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((p, i) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="reveal-on-scroll group rounded-3xl overflow-hidden bg-card border border-border/60 transition-all duration-700 hover:-translate-y-2 hover:shadow-elevated"
                style={{ transitionDelay: `${i * 80}ms` }}
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
                  <h3 className="mt-3 text-lg leading-snug">{p.title}</h3>
                  <div className="mt-4 text-xs text-muted-foreground">
                    {p.date} · {p.readTime} read
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

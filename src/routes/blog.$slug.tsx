import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";
import { getPost } from "@/data/blog";

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
      ],
    };
  },
  component: PostPage,
});

function PostPage() {
  useReveal();
  const { post } = Route.useLoaderData();

  return (
    <main className="relative overflow-hidden animate-fade-in">
      <Navbar />
      <section
        className="relative h-[60vh] min-h-[400px] w-full"
        style={{ background: `linear-gradient(135deg, oklch(0.8 0.07 ${post.hue}) 0%, oklch(0.6 0.1 ${post.hue + 10}) 100%)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background/45 via-background/5 to-transparent" />
        <div className="relative z-10 mx-auto h-full max-w-4xl px-6 flex flex-col justify-end pb-16 text-white">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm glass px-4 py-2 rounded-full w-fit">
            <ArrowLeft size={14} /> All articles
          </Link>
          <span className="mt-6 text-xs uppercase tracking-widest text-white/85">{post.category} · {post.readTime} read</span>
          <h1 className="mt-3 text-4xl md:text-6xl">{post.title}</h1>
          <p className="mt-3 text-white/85">By {post.author} · {post.date}</p>
        </div>
      </section>

      <article className="py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-6 text-lg leading-relaxed text-foreground/85 reveal-on-scroll">
          <p className="text-2xl font-display italic text-foreground/90">{post.excerpt}</p>
          {post.body.map((para: string, i: number) => <p key={i}>{para}</p>)}
          <p className="pt-8 text-sm text-muted-foreground italic">This is one of a growing series. If something here resonates, you are warmly invited to <Link to="/book" className="text-primary underline">book a session</Link>.</p>
        </div>
      </article>

      <Footer />
    </main>
  );
}

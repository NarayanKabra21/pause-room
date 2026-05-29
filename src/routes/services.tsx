import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { servicesByCategory } from "@/data/services";
import nature from "@/assets/about-nature.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — The Pause Room" },
      { name: "description", content: "Assessments, therapy, classes and events — every offering at The Pause Room." },
      { property: "og:title", content: "Services — The Pause Room" },
      { property: "og:description", content: "Comprehensive psychological care, classes and assessments." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const grouped = servicesByCategory();
  const order = ["Assessments", "Therapy", "Classes & Events"] as const;

  return (
    <PageShell
      eyebrow="Services"
      title={<>Every way we can<br /><em className="not-italic">hold you.</em></>}
      intro="Assessments, therapy and classes — under one calm roof."
      image={nature}
    >
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 space-y-24">
          {order.map((cat) => (
            <div key={cat}>
              <div className="reveal-on-scroll max-w-2xl">
                <span className="text-xs tracking-[0.4em] uppercase text-primary/80">{cat}</span>
                <h2 className="mt-3 text-3xl md:text-4xl">
                  {cat === "Assessments" && <>Clarity, through <em className="text-gradient-lake not-italic">careful evaluation</em>.</>}
                  {cat === "Therapy" && <>Therapy, shaped around <em className="text-gradient-lake not-italic">you</em>.</>}
                  {cat === "Classes & Events" && <>Learning, awareness and <em className="text-gradient-lake not-italic">community</em>.</>}
                </h2>
              </div>
              <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {grouped[cat].map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <Link
                      key={s.slug}
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      preload="intent"
                      className="reveal-on-scroll group glass rounded-2xl p-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-elevated"
                      style={{ transitionDelay: `${(i % 3) * 80}ms` }}
                    >
                      <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon size={22} strokeWidth={1.6} />
                      </div>
                      <h3 className="text-xl text-foreground">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.card}</p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary opacity-0 -translate-x-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                        Explore <ArrowRight size={14} />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

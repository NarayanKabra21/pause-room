import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { team } from "@/data/team";
import nature from "@/assets/about-nature.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — The Pause Room" },
      { name: "description", content: "Meet the psychiatrists, psychologists and therapists who hold the work at The Pause Room." },
      { property: "og:title", content: "Our Team — The Pause Room" },
      { property: "og:description", content: "Clinicians who lead with compassion, rigour and unhurried care." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <PageShell
      eyebrow="Our Team"
      title={<>The hearts behind <em className="not-italic">the room.</em></>}
      intro="Clinicians who lead with warmth and quiet rigour."
      image={nature}
    >
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <Link
                key={m.slug}
                to="/team/$slug"
                params={{ slug: m.slug }}
                preload="intent"
                className="reveal-on-scroll group rounded-3xl overflow-hidden glass transition-all duration-700 hover:-translate-y-2 hover:shadow-elevated"
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={m.photo} alt={m.name} className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl">{m.name}</h3>
                  <p className="mt-1 text-sm text-primary">{m.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.shortBio}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all duration-500">
                    View profile <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

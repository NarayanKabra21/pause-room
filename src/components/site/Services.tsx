import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services, featuredServiceSlugs } from "@/data/services";

export function Services() {
  const featured = services.filter((s) => featuredServiceSlugs.includes(s.slug));

  return (
    <section id="services" className="relative py-28 md:py-36 bg-gradient-sky">
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <div className="absolute top-1/4 left-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-primary/15 blur-3xl animate-float" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 reveal-on-scroll">
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Services</span>
            <h2 className="mt-4 text-4xl md:text-5xl">
              Care, shaped around <em className="text-gradient-lake not-italic">you</em>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Assessments, therapy, and learning classes — all held in the same calm, attentive way.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all duration-500"
          >
            View all services <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map(({ slug, icon: Icon, title, card }, i) => (
            <Link
              key={slug}
              to="/services/$slug"
              params={{ slug }}
              preload="intent"
              className="reveal-on-scroll group glass rounded-2xl p-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              style={{ transitionDelay: `${(i % 4) * 80}ms` }}
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                <Icon size={22} strokeWidth={1.6} />
              </div>
              <h3 className="text-xl text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{card}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary opacity-0 -translate-x-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                Explore <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

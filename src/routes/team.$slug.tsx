import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";
import { getTeamMember, team } from "@/data/team";

export const Route = createFileRoute("/team/$slug")({
  loader: ({ params }) => {
    const member = getTeamMember(params.slug);
    if (!member) throw notFound();
    return { member };
  },
  head: ({ loaderData }) => {
    const m = loaderData?.member;
    const title = m ? `${m.name} — ${m.role} | The Pause Room` : "The Pause Room";
    return {
      meta: [
        { title },
        { name: "description", content: m?.shortBio ?? "" },
        { property: "og:title", content: title },
        { property: "og:description", content: m?.shortBio ?? "" },
        ...(m?.photo ? [{ property: "og:image", content: m.photo }] : []),
      ],
    };
  },
  component: MemberPage,
});

function MemberPage() {
  useReveal();
  const { member } = Route.useLoaderData();
  const others = team.filter((m) => m.slug !== member.slug).slice(0, 3);

  return (
    <main className="relative overflow-hidden animate-fade-in">
      <Navbar />

      <section className="relative pt-36 pb-20 md:pt-44 bg-gradient-sky">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-accent/30 blur-2xl" />
            <img src={member.photo} alt={member.name} className="relative w-full max-w-md mx-auto rounded-[2rem] shadow-elevated" />
          </div>
          <div className="reveal-on-scroll">
            <Link to="/team" className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all duration-500">
              <ArrowLeft size={14} /> All team members
            </Link>
            <h1 className="mt-5 text-4xl md:text-5xl">{member.name}</h1>
            <p className="mt-2 text-primary">{member.role}</p>
            <p className="mt-1 text-sm text-muted-foreground">{member.specialization}</p>
            <p className="mt-6 text-lg italic font-display text-foreground/85">"{member.shortBio}"</p>
            <Link to="/book" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:shadow-glow hover:scale-105 transition-all duration-500">
              Book with {member.name.split(" ")[0]} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 grid md:grid-cols-2 gap-6 reveal-on-scroll">
          {[
            { label: "Qualifications", items: member.qualifications },
            { label: "Certifications", items: member.certifications },
            { label: "Areas of expertise", items: member.expertise },
            { label: "Languages", items: member.languages },
          ].map((b) => (
            <div key={b.label} className="glass rounded-2xl p-6">
              <span className="text-xs tracking-[0.4em] uppercase text-primary/80">{b.label}</span>
              <ul className="mt-3 space-y-1.5 text-foreground/85">
                {b.items.map((it: string) => <li key={it}>· {it}</li>)}
              </ul>
            </div>
          ))}
          <div className="glass rounded-2xl p-6 md:col-span-2">
            <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Experience</span>
            <p className="mt-3 text-foreground/85">{member.experience}</p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-6 mt-16 space-y-5 text-lg leading-relaxed text-foreground/85 reveal-on-scroll">
          {member.bio.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      <section className="relative py-24 bg-gradient-sky">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl reveal-on-scroll">Meet others on the team.</h2>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {others.map((m) => (
              <Link key={m.slug} to="/team/$slug" params={{ slug: m.slug }} className="reveal-on-scroll group rounded-3xl overflow-hidden glass transition-all duration-700 hover:-translate-y-2">
                <img src={m.photo} alt={m.name} className="w-full aspect-[4/5] object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="text-xl">{m.name}</h3>
                  <p className="text-sm text-primary mt-1">{m.role}</p>
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

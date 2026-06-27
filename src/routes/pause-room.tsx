import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { team } from "@/data/team";
import pauseImgAsset from "@/assets/pages/pause-hero.jpg.asset.json";
const pauseImg = pauseImgAsset.url;

export const Route = createFileRoute("/pause-room")({
  head: () => ({
    meta: [
      { title: "The Pause Room — Our Story & Philosophy" },
      { name: "description", content: "The story, beliefs and healing philosophy behind The Pause Room." },
      { property: "og:title", content: "The Pause Room — Our Story" },
      { property: "og:description", content: "A peaceful sanctuary built for emotional healing." },
    ],
  }),
  component: PauseRoomPage,
});

const sections = [
  { eyebrow: "Our Story", title: "Born from a quiet need.", body: "The Pause Room began as a longing — for a place where mental health care felt as warm as it was rigorous. Where people could arrive as they are, and be held without performance." },
  { eyebrow: "What We Believe", title: "Healing is slow, and that's okay.", body: "We believe that real change doesn't arrive in a moment. It is built in unhurried hours, with someone who remembers your name and your story." },
  { eyebrow: "Our Healing Philosophy", title: "Listen first. Always.", body: "Every modality we use — psychiatry, psychotherapy, assessments, classes — sits inside a deeper practice of presence. We listen, and only then do we respond." },
  { eyebrow: "Emotional Wellness Approach", title: "Mind, body, and the life around it.", body: "We treat the whole person — not just the symptom. Sleep, relationships, work, body, history. Every thread matters." },
  { eyebrow: "Community Impact", title: "Carrying care into the world.", body: "Through workshops, school programmes and community seminars, we work to make mental health knowledge accessible to everyone — not just those who can afford long therapy." },
  { eyebrow: "Safe Space Commitment", title: "A room that holds.", body: "Confidentiality, dignity, and the right to be exactly as you are — these are not perks of our work. They are its foundation." },
];

function PauseRoomPage() {
  return (
    <PageShell
      eyebrow="The Pause Room"
      title={<>A peaceful digital sanctuary<br /><em className="not-italic">for emotional healing.</em></>}
      intro="The story behind the room."
      image={pauseImg}
    >
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 space-y-16">
          {sections.map((s, i) => (
            <div key={s.title} className={`reveal-on-scroll grid md:grid-cols-5 gap-8 items-start ${i % 2 ? "md:[direction:rtl]" : ""}`}>
              <div className="md:col-span-2 [direction:ltr]">
                <span className="text-xs tracking-[0.4em] uppercase text-primary/80">{s.eyebrow}</span>
                <h2 className="mt-3 text-3xl md:text-4xl">{s.title}</h2>
              </div>
              <p className="md:col-span-3 text-lg leading-relaxed text-foreground/85 [direction:ltr]">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-24 md:py-32 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal-on-scroll max-w-3xl">
            <span className="text-xs tracking-[0.4em] uppercase text-primary/80">The People of the Room</span>
            <h2 className="mt-3 text-3xl md:text-5xl">The hands and hearts that hold this room</h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/80">
              The Pause Room is shaped, daily, by a small team of psychiatrists and psychologists
              who chose this work as a vocation. Each of them brings a different kind of
              expertise — psychiatry, trauma and adult psychotherapy, child and adolescent care — and
              the same underlying commitment: to listen carefully, move slowly, and honour every
              person who arrives. What follows is a quiet introduction to the people behind the room.
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {team.map((m, i) => (
              <article
                key={m.slug}
                className={`reveal-on-scroll grid md:grid-cols-12 gap-8 md:gap-12 items-center ${
                  i % 2 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className="md:col-span-5 [direction:ltr]">
                  <div className="overflow-hidden rounded-3xl shadow-soft">
                    <img
                      src={m.photo}
                      alt={m.name}
                      loading="lazy"
                      className="h-full w-full object-cover aspect-[4/5] transition-transform duration-[1400ms] hover:scale-105"
                    />
                  </div>
                </div>
                <div className="md:col-span-7 [direction:ltr]">
                  <span className="text-xs tracking-[0.4em] uppercase text-primary/80">{m.role}</span>
                  <h3 className="mt-2 text-3xl md:text-4xl">{m.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground italic">{m.specialization} · {m.experience}</p>
                  <div className="mt-5 space-y-3 text-foreground/85 leading-relaxed">
                    {m.bio.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                  <div className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">Qualifications</p>
                      <p className="mt-1 text-foreground/80">{m.qualifications.join(" · ")}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">Certifications</p>
                      <p className="mt-1 text-foreground/80">{m.certifications.join(" · ")}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">Expertise</p>
                      <p className="mt-1 text-foreground/80">{m.expertise.join(", ")}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">Languages</p>
                      <p className="mt-1 text-foreground/80">{m.languages.join(", ")}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="reveal-on-scroll mt-20 max-w-2xl mx-auto text-center">
            <p className="text-lg text-foreground/80 leading-relaxed italic">
              "We are a small team on purpose. It is the only way we know how to do this work — with
              presence, with patience, and with the time each person deserves."
            </p>
          </div>
        </div>
      </section>



      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-lake opacity-90" />
        <div className="relative mx-auto max-w-3xl px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl">Step inside the room</h2>
          <p className="mt-4 text-white/85">A quiet, confidential conversation is the only first step.</p>
          <Link to="/book" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-foreground px-7 py-3 text-sm font-medium hover:scale-105 transition-all duration-500">
            Book a consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

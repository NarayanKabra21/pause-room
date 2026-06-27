export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 overflow-hidden">
      {/* Soft ambient backdrop */}
      <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 -right-24 h-[24rem] w-[24rem] rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="reveal-on-scroll">
          <span className="text-xs tracking-[0.4em] uppercase text-primary/80">About Us</span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1]">
            An invitation to{" "}
            <em className="text-gradient-lake">PAUSE</em>
          </h2>
          <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        <div className="mt-14 space-y-10 text-lg md:text-xl leading-relaxed text-foreground/80 reveal-on-scroll">
          <p>
            We live in a world that celebrates constant change.
            Move fast. Achieve more…Move faster …..cycle keeps going .
            Somewhere along the way, we stop noticing ourselves.
            Perhaps that is why the simplest thing has become the hardest thing—TO stay calm or TO  PAUSE .
          </p>

          <p>
            The Pause Room was born from this very thought.
            Not as a place that promises to fix people, because we do not believe people are meant to be fixed.
            We believe they are meant to be understood.
            We believe that beneath every fear/anxiety/worry is a story waiting to be heard.
            Beneath every self-doubt is a strength waiting to be rediscovered. And behind every overwhelming emotion is a HUMAN longing for a moment of kindness, acceptance, and understanding.
          </p>

          <p>
            At The Pause Room, we believe that sometimes the most meaningful step forward begins by simply pausing. In conversations that are not rushed, but held with presence. In the gentle pauses where emotions begin to make sense, where thoughts find clarity, and where insight quietly unfolds and the Human evolves .
          </p>

          <p>
            Our goal is to create a space where individuals feel safe to explore every part of themselves without judgment. Where vulnerability is not seen as weakness but as the beginning of self-discovery. Where reflection becomes a pathway to awareness, resilience, and growth.
          </p>

          <p>
            Because we believe that the most profound relationship a HUMAN will ever have is the one he  builds with himself. We help create families, workplaces, and communities where emotional well-being is not an afterthought, but a way of living.
          </p>

          <p>
            The Pause Room is more than a psychological clinic ..Its a wellness centre.
            It is an invitation.
            To pause.
            To reflect.
            To reconnect with yourself.
            And to discover that healing doesn't always begin with finding the right answers—it often begins by giving yourself permission to stop, listen, and simply be.
          </p>
        </div>

        <blockquote className="reveal-on-scroll mt-20 max-w-2xl mx-auto space-y-6">
          <p className="font-display italic text-2xl md:text-3xl text-foreground/90 leading-snug">
            "Emotional well-being isn't built through conversations alone. It is built through conversations and thoughts that make space for pause."
          </p>
          <footer className="text-sm tracking-widest uppercase text-primary/80">
            Aparna Ladha Somani — Founder
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

import aboutTherapyImage from "@/assets/about_therapy_new.png";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 overflow-hidden">
      {/* Soft ambient backdrop */}
      <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 -right-24 h-[24rem] w-[24rem] rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="reveal-on-scroll">
          <span className="text-xs tracking-[0.4em] uppercase text-primary/80">About Us</span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1]">
            A sanctuary for the{" "}
            <em className="text-gradient-lake not-italic">quietly tired</em>
          </h2>
          <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-foreground/80 reveal-on-scroll">
            <p>
              The Pause Room was created with one simple belief — everyone deserves a safe space
              to be heard without judgment.
            </p>
            <p>
              In today's fast-moving world, people silently carry anxiety, stress, emotional
              exhaustion, loneliness, heartbreak, burnout, and trauma while pretending everything
              is fine. The Pause Room exists to change that.
            </p>
            <p>
              We provide compassionate psychological care and emotional wellness support in a
              calming environment where healing feels natural, safe, and personal.
            </p>
          </div>

          <figure className="reveal-on-scroll relative mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] shadow-elevated">
            <img
              src={aboutTherapyImage}
              alt="Therapy space at The Pause Room"
              className="h-[24rem] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
          </figure>
        </div>

        <blockquote className="reveal-on-scroll mt-16 max-w-2xl mx-auto">
          <p className="font-display italic text-2xl md:text-3xl text-foreground/90 leading-snug">
            "Therapy that listens before it speaks"
          </p>
        </blockquote>
      </div>
    </section>
  );
}

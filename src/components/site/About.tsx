import natureAsset from "@/assets/about-therapy.jpg.asset.json";
const nature = natureAsset.url;

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative reveal-on-scroll">
          <div className="absolute -inset-4 rounded-[2rem] bg-accent/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-elevated">
            <img src={nature} alt="Therapy session in a warm, calming space" className="w-full h-[32rem] object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 max-w-[14rem] shadow-soft">
            <p className="text-sm italic text-foreground/80">
              "Healing begins the moment you allow yourself to feel."
            </p>
          </div>
        </div>

        <div className="reveal-on-scroll">
          <span className="text-xs tracking-[0.4em] uppercase text-primary/80">About us</span>
          <h2 className="mt-4 text-4xl md:text-5xl text-foreground leading-tight">
            A sanctuary for the <em className="text-gradient-lake not-italic">quietly tired</em>
          </h2>
          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              The Pause Room was created with one simple belief — everyone deserves a safe space to be heard
              without judgment.
            </p>
            <p>
              In today's fast-moving world, people silently carry anxiety, stress, emotional exhaustion,
              loneliness, heartbreak, burnout, and trauma while pretending everything is fine.
              The Pause Room exists to change that.
            </p>
            <p>
              We provide compassionate psychological care and emotional wellness support in a calming
              environment where healing feels natural, safe, and personal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

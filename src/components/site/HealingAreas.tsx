const areas = [
  "Anxiety", "Overthinking", "Relationship Problems", "Depression",
  "Panic Attacks", "Low Self-Esteem", "Career Pressure", "Academic Stress",
  "Trauma", "Grief", "Emotional Burnout", "Loneliness",
];

export function HealingAreas() {
  return (
    <section id="healing" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-dawn opacity-40" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-3xl animate-float-slow" />
      </div>

      <div className="mx-auto max-w-6xl px-6 text-center reveal-on-scroll">
        <span className="text-xs tracking-[0.4em] uppercase text-primary/80">What we help with</span>
        <h2 className="mt-4 text-4xl md:text-6xl leading-tight">
          You are not alone in <br />
          <em className="text-gradient-lake not-italic">what you are feeling</em>
        </h2>
        <p className="mt-5 max-w-xl mx-auto text-muted-foreground">
          Whatever you're carrying, there is a place for it here. Without explanation, without rush.
        </p>
      </div>

      <div className="mt-14 mx-auto max-w-6xl px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {areas.map((a, i) => (
          <div
            key={a}
            className="reveal-on-scroll card-hover glass rounded-2xl px-5 py-6 text-center"
            style={{ transitionDelay: `${(i % 4) * 60}ms` }}
          >
            <div className="text-foreground/90 font-medium">{a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

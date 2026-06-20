import { useEffect, useState } from "react";

const phases = ["Breathe in", "Hold", "Breathe out", "Rest"];

export function CalmRoom() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setPhase((p) => (p + 1) % phases.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="calm" className="relative py-32 md:py-44 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, oklch(0.85 0.07 225 / 0.6), transparent 55%), radial-gradient(circle at 80% 70%, oklch(0.84 0.05 165 / 0.45), transparent 50%), linear-gradient(180deg, oklch(0.97 0.015 220), oklch(0.92 0.04 230))",
          }}
        />
        {/* Floating particles */}
        {Array.from({ length: 22 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white/60 animate-float-slow"
            style={{
              width: `${4 + (i % 5) * 2}px`,
              height: `${4 + (i % 5) * 2}px`,
              top: `${(i * 41) % 100}%`,
              left: `${(i * 67) % 100}%`,
              animationDelay: `${i * 0.4}s`,
              boxShadow: "0 0 12px rgba(255,255,255,0.6)",
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="text-xs tracking-[0.4em] uppercase text-primary/80">The Calm Room</span>
        <h2 className="mt-4 text-4xl md:text-6xl leading-tight">
          Take a moment <br />
          <em className="text-gradient-lake not-italic">Breathe slowly</em>
        </h2>
        <p className="mt-5 text-muted-foreground">
          Let your mind feel lighter. Follow the circle.
        </p>

        {/* Breathing circle */}
        <div className="mt-14 flex justify-center">
          <div className="relative h-72 w-72 flex items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-primary/10 animate-ripple" />
            <span className="absolute inset-4 rounded-full bg-primary/15 animate-ripple" style={{ animationDelay: "1.2s" }} />
            <div
              className="relative h-48 w-48 rounded-full flex items-center justify-center text-primary-foreground shadow-glow animate-breathe"
              style={{ background: "var(--gradient-lake)" }}
            >
              <span className="text-sm tracking-[0.3em] uppercase font-light">{phases[phase]}</span>
            </div>
          </div>
        </div>

        <p className="mt-12 text-sm italic text-muted-foreground max-w-md mx-auto">
          You have just given yourself a small kindness. Carry it with you.
        </p>
      </div>
    </section>
  );
}

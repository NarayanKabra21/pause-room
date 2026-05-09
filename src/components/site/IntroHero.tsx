import lake from "@/assets/hero-lake.jpg";
import logo from "@/assets/logo.png";
import { ChevronDown } from "lucide-react";

export function IntroHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Cinematic background with Ken Burns motion */}
      <div className="absolute inset-0">
        <img
          src={lake}
          alt="Misty lake at sunrise"
          className="h-full w-full object-cover animate-ken-burns"
        />
      </div>

      {/* Soft blue overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.85 0.05 225 / 0.25) 0%, oklch(0.55 0.09 235 / 0.45) 60%, oklch(0.35 0.08 240 / 0.7) 100%)",
        }}
      />

      {/* Drifting mist particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white/30 blur-2xl animate-float-slow"
            style={{
              width: `${40 + (i * 13) % 90}px`,
              height: `${40 + (i * 13) % 90}px`,
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              animationDelay: `${i * 0.6}s`,
              opacity: 0.18,
            }}
          />
        ))}
      </div>

      {/* Logo */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center animate-fade-in" style={{ animationDuration: "2.4s" }}>
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full bg-white/40 blur-3xl scale-110" />
            <img
              src={logo}
              alt="The Pause Room"
              className="relative h-44 md:h-64 lg:h-72 w-auto mx-auto drop-shadow-[0_0_40px_rgba(255,255,255,0.6)]"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
          {/* breathing ripple */}
          <div className="mt-8 flex justify-center">
            <div className="relative h-3 w-3">
              <span className="absolute inset-0 rounded-full bg-white/70 animate-breathe" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/80 flex flex-col items-center gap-2 animate-float">
        <span className="text-[11px] tracking-[0.4em] uppercase">Scroll</span>
        <ChevronDown size={20} />
      </div>
    </section>
  );
}

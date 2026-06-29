import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import logoAsset from "@/assets/logo-new-transparent.png.asset.json";
import lake from "@/assets/hero-lake.jpg";
import clouds from "@/assets/intro/clouds.jpg";
import ocean from "@/assets/intro/ocean.jpg";
import forest from "@/assets/intro/forest.jpg";
import rain from "@/assets/intro/rain.jpg";

type Scene = {
  src: string;
  label: string;
  overlay: string;
};

const scenes: Scene[] = [
  {
    src: lake,
    label: "Sunrise lake",
    overlay:
      "linear-gradient(180deg, oklch(0.85 0.04 225 / 0.12) 0%, oklch(0.55 0.06 235 / 0.22) 60%, oklch(0.3 0.05 240 / 0.38) 100%)",
  },
  {
    src: clouds,
    label: "Drifting clouds",
    overlay:
      "linear-gradient(180deg, oklch(0.9 0.03 80 / 0.1) 0%, oklch(0.6 0.07 230 / 0.22) 70%, oklch(0.3 0.06 240 / 0.4) 100%)",
  },
  {
    src: ocean,
    label: "Calm ocean",
    overlay:
      "linear-gradient(180deg, oklch(0.88 0.03 230 / 0.1) 0%, oklch(0.5 0.08 235 / 0.28) 70%, oklch(0.28 0.06 240 / 0.45) 100%)",
  },
  {
    src: forest,
    label: "Forest light",
    overlay:
      "linear-gradient(180deg, oklch(0.7 0.06 180 / 0.18) 0%, oklch(0.45 0.07 200 / 0.32) 60%, oklch(0.25 0.06 230 / 0.5) 100%)",
  },
  {
    src: rain,
    label: "Rain on glass",
    overlay:
      "linear-gradient(180deg, oklch(0.5 0.05 230 / 0.25) 0%, oklch(0.35 0.06 240 / 0.4) 70%, oklch(0.22 0.05 240 / 0.55) 100%)",
  },
];

export function IntroHero() {
  // Keep the first render deterministic so SSR and client hydration match.
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((i) => (i + 1) % scenes.length),
      5200,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Cross-fading scenes */}
      <div className="absolute inset-0">
        {scenes.map((scene, i) => (
          <img
            key={scene.label}
            src={scene.src}
            alt={scene.label}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1800ms] ${
              i === current ? "opacity-100 animate-ken-burns" : "opacity-0"
            }`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>

      {/* Soft tonal overlay (also cross-fades with the scene) */}
      {scenes.map((scene, i) => (
        <div
          key={scene.label + "-overlay"}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ background: scene.overlay }}
        />
      ))}

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
              src={logoAsset.url}
              alt="The Pause Room"
              className="relative h-44 md:h-64 lg:h-72 w-auto mx-auto drop-shadow-[0_0_40px_rgba(255,255,255,0.6)]"
            />
          </div>
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

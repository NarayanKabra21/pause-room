import { useEffect, type ReactNode } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

type Props = {
  eyebrow?: string;
  title?: ReactNode;
  intro?: string;
  image: string;
  children: ReactNode;
};

export function PageShell({ eyebrow, title, intro, image, children }: Props) {
  useReveal();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <main className="relative overflow-hidden animate-fade-in">
      <Navbar />

      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center animate-ken-burns"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background/45 via-background/5 to-transparent" />

        {(eyebrow || title || intro) && (
          <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col justify-end px-6 pb-16 md:pb-24">
            {eyebrow && (
              <span className="text-xs tracking-[0.4em] uppercase text-white/85 animate-fade-up" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.35)' }}>
                {eyebrow}
              </span>
            )}
            {title && (
              <h1
                className="mt-4 text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] animate-fade-up"
                style={{ animationDelay: "120ms", textShadow: '0 2px 24px rgba(0,0,0,0.35)' }}
              >
                {title}
              </h1>
            )}
            {intro && (
              <p
                className="mt-5 max-w-2xl text-lg md:text-xl text-white/90 font-display italic animate-fade-up"
                style={{ animationDelay: "240ms", textShadow: '0 2px 16px rgba(0,0,0,0.35)' }}
              >
                {intro}
              </p>
            )}
          </div>
        )}
      </section>

      {children}

      <Footer />
    </main>
  );
}

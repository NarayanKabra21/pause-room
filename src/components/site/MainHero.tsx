import room from "@/assets/hero-room.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

export function MainHero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-sky"
    >
      {/* Floating orbs */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/15 blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl animate-float" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div className="reveal-on-scroll">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs tracking-widest uppercase text-primary/90 mb-6">
            <Sparkles size={14} /> A space to breathe
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
            In a world that <em className="text-gradient-lake not-italic">never stops</em>,
            <br /> this is your space to <em className="text-gradient-lake not-italic font-light italic">PAUSE</em>
          </h1>
          <p className="mt-7 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Professional psychological care and emotional wellness support designed
            to help you breathe, heal, and rediscover peace.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#book"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-medium shadow-soft transition-all duration-500 hover:shadow-glow hover:scale-105"
            >
              Book a Consultation
              <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
            </a>
            <a
              href="#calm"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-sm font-medium text-foreground/90 hover:bg-white/70 transition-all duration-500"
            >
              Begin Your Healing Journey
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-xs text-muted-foreground">
            <div><div className="text-2xl font-display text-foreground">10+</div>Years of care</div>
            <div className="h-10 w-px bg-border" />
            <div><div className="text-2xl font-display text-foreground">2,400</div>Lives supported</div>
            <div className="h-10 w-px bg-border" />
            <div><div className="text-2xl font-display text-foreground">100%</div>Confidential</div>
          </div>
        </div>

        <div className="relative reveal-on-scroll">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-lake opacity-30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-elevated">
            <img
              src={room}
              alt="Calm therapy room overlooking a lake"
              className="w-full h-[34rem] object-cover animate-ken-burns"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
          </div>

        </div>
      </div>
    </section>
  );
}

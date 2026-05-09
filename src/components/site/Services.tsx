import {
  HeartPulse, Wind, Users, CloudRain, ShieldCheck, GraduationCap, Flame, Video,
} from "lucide-react";

const items = [
  { icon: HeartPulse, title: "Individual Therapy", desc: "One-on-one sessions tailored to your inner world." },
  { icon: Wind, title: "Anxiety & Stress", desc: "Tools to soften racing thoughts and find your breath." },
  { icon: Users, title: "Relationship Counseling", desc: "Reconnect, communicate, and rebuild together." },
  { icon: CloudRain, title: "Depression Support", desc: "Gentle, structured care through difficult seasons." },
  { icon: ShieldCheck, title: "Trauma Therapy", desc: "Trauma-informed healing at your own safe pace." },
  { icon: GraduationCap, title: "Student Counseling", desc: "Support for academic pressure and identity." },
  { icon: Flame, title: "Burnout Recovery", desc: "Restore energy and reclaim a sustainable rhythm." },
  { icon: Video, title: "Online Consultation", desc: "Care that meets you, wherever you are." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36 bg-gradient-sky">
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <div className="absolute top-1/4 left-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-primary/15 blur-3xl animate-float" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl reveal-on-scroll">
          <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Services</span>
          <h2 className="mt-4 text-4xl md:text-5xl">
            Care, shaped around <em className="text-gradient-lake not-italic">you</em>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every offering is designed to feel less like a clinical service, more like a quiet hand on your shoulder.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="reveal-on-scroll group glass rounded-2xl p-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-elevated"
              style={{ transitionDelay: `${(i % 4) * 80}ms` }}
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                <Icon size={22} strokeWidth={1.6} />
              </div>
              <h3 className="text-xl text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

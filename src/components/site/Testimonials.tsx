import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  { quote: "For the first time in years, I felt heard without being judged.", name: "Aanya R.", role: "Therapy client" },
  { quote: "The environment itself feels healing. I leave lighter every single time.", name: "Karan M.", role: "Anxiety support" },
  { quote: "The Pause Room helped me emotionally reconnect with myself.", name: "Sneha P.", role: "Burnout recovery" },
  { quote: "Soft, slow, and deeply human. Exactly what I didn't know I needed.", name: "Rohan D.", role: "Online sessions" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="relative py-28 md:py-36 bg-gradient-sky">
      <div className="mx-auto max-w-5xl px-6 text-center reveal-on-scroll">
        <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Voices</span>
        <h2 className="mt-4 text-4xl md:text-5xl">
          Stories of <em className="text-gradient-lake not-italic">quiet healing</em>
        </h2>
      </div>

      <div className="mt-14 mx-auto max-w-3xl px-6">
        <div className="relative glass rounded-3xl p-10 md:p-14 shadow-soft min-h-[16rem]">
          <Quote className="absolute top-6 left-6 text-primary/30" size={42} />
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`transition-all duration-1000 ${
                idx === i ? "opacity-100 relative" : "opacity-0 absolute inset-10"
              }`}
            >
              <p className="text-xl md:text-2xl font-display italic text-foreground/90 leading-relaxed text-center">
                "{t.quote}"
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-lake flex items-center justify-center text-primary-foreground font-medium">
                  {t.name.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === i ? "bg-primary w-8" : "bg-primary/30 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

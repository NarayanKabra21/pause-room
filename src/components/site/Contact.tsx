import { MapPin, Phone, Mail, AlertCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36 bg-gradient-sky">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-start">
        <div className="reveal-on-scroll">
          <span className="text-xs tracking-[0.4em] uppercase text-primary/80">Contact</span>
          <h2 className="mt-4 text-4xl md:text-5xl">
            Let's <em className="text-gradient-lake not-italic">Connect</em>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Walk in, write to us, or call — we are here when you're ready.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { icon: MapPin, label: "Address", val: "P-43, Niharika building, E.M Bypass Metropolitan, Dhapa, S.O South 24 Parganas, West Bengal- 700105" },
              { icon: Phone, label: "Phone", val: "+91 74396 80766" },
              { icon: Mail, label: "Email", val: "info.pauseroom@gmail.com" },
            ].map(({ icon: Icon, label, val }) => (
              <div key={label} className="flex items-start gap-4 glass rounded-2xl p-5">
                <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
                  <div className="mt-1 text-foreground">{val}</div>
                </div>
              </div>
            ))}

            <div className="flex items-start gap-4 rounded-2xl p-5 border border-destructive/20 bg-destructive/5">
              <AlertCircle size={20} className="text-destructive mt-0.5" />
              <div>
                <div className="text-sm font-medium text-destructive">Emergency Support</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  For immediate mental health support, please contact Tele-MANAS, the Government of India's national mental health helpline. This service is operated independently by the Government of India and is not associated with The Pause Room.
                </div>
                <div className="mt-2 text-sm">
                  <span className="text-muted-foreground">Tele-MANAS Helpline: </span>
                  <a href="tel:18008914416" className="text-foreground font-semibold hover:text-destructive transition-colors">1-800-891-4416</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal-on-scroll">
          <div className="overflow-hidden rounded-3xl shadow-elevated h-[28rem] glass">
            <iframe
              title="Map"
              src="https://maps.google.com/maps?q=P-43%2C+Niharika+building%2C+E.M+Bypass+Metropolitan%2C+Dhapa%2C+South+24+Parganas%2C+West+Bengal+700105&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

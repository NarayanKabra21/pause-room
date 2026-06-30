import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import logoAsset from "@/assets/logo-pause-room.png.asset.json";

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 bg-gradient-to-b from-transparent to-primary/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <img src={logoAsset.url} alt="The Pause Room" className="h-16 mx-auto" />
          <p className="mt-6 text-lg md:text-xl font-display italic text-foreground/80">
            "Healing takes time. And you do not have to do it alone."
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-10 text-sm">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Explore</h4>
            <ul className="mt-4 space-y-2">
              
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/pause-room" className="hover:text-primary transition-colors">The Pause Room</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">In Action</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Care</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/book" className="hover:text-primary transition-colors">Book a Consultation</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="tel:+917439680766" className="hover:text-primary transition-colors">+91 74396 80766</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Reach us</h4>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li><a href="mailto:info.pauseroom@gmail.com" className="hover:text-primary transition-colors">info.pauseroom@gmail.com</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Stay close</h4>
            <p className="mt-4 text-muted-foreground">A quiet community for slow, intentional well-being.</p>
            <div className="mt-4 flex gap-3">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/thepause.room/?hl=en", label: "Instagram" },
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/the-pause-room06/", label: "LinkedIn" },
                { Icon: WhatsAppIcon, href: "https://wa.me/917439680766", label: "WhatsApp" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="h-9 w-9 rounded-full glass flex items-center justify-center text-foreground/70 hover:text-primary hover:scale-110 transition-all duration-500"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border/60 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} The Pause Room. Held with care.
        </div>
      </div>
    </footer>
  );
}

import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 bg-gradient-to-b from-transparent to-primary/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <img src={logo} alt="The Pause Room" className="h-16 mx-auto" />
          <p className="mt-6 text-lg md:text-xl font-display italic text-foreground/80">
            "Healing takes time. And you do not have to do it alone."
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-10 text-sm">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Explore</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/pause-room" className="hover:text-primary transition-colors">The Pause Room</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Journal</Link></li>
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
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Youtube, href: "#", label: "YouTube" },
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

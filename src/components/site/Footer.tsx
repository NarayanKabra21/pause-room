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
              <li><a href="/#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="/#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="/#calm" className="hover:text-primary transition-colors">The Calm Room</a></li>
              <li><a href="/#blog" className="hover:text-primary transition-colors">Journal</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Care</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="/#book" className="hover:text-primary transition-colors">Book a session</a></li>
              <li><a href="/#faqs" className="hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="/#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="/#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="/#" className="hover:text-primary transition-colors">Confidentiality</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Reach us</h4>
            <p className="mt-4 text-muted-foreground">Lakeside Avenue, Bengaluru</p>
            <p className="text-muted-foreground">hello@thepauseroom.in</p>
            <div className="mt-4 flex gap-3">
              {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="/#"
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

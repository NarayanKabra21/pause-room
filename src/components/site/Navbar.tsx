import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/pause-room", label: "The Pause Room" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const threshold = isHome ? window.innerHeight * 0.6 : 0;
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    if (!isHome) setScrolled(true);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <div className="mx-auto mt-4 max-w-7xl px-4">
        <nav className="glass rounded-full px-5 py-3 shadow-soft flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="The Pause Room" className="h-9 w-auto" />
          </Link>

          <ul className="hidden lg:flex items-center gap-6 text-sm text-foreground/80">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "text-primary" }}
                  className="relative py-1 transition-colors hover:text-primary after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-500 hover:after:w-full"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/book"
            className="hidden md:inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium shadow-soft transition-all duration-500 hover:shadow-glow hover:scale-105"
          >
            Book Consultation
          </Link>

          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-foreground/80"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-3xl p-4 shadow-soft animate-fade-up">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm hover:bg-white/50 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/book"
                  onClick={() => setOpen(false)}
                  className="block mt-2 rounded-full bg-primary text-primary-foreground text-center px-5 py-3 text-sm font-medium"
                >
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

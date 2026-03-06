import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Expertises", href: "#expertises" },
  { label: "Projets", href: "#projets" },
  { label: "Méthode", href: "#methode" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-white ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <a href="#hero" className="flex flex-col leading-tight">
          <span className="font-bold text-lg" style={{ color: "hsl(var(--navy))" }}>
            Alexandre Dupont
          </span>
          <span className="text-xs font-medium" style={{ color: "hsl(var(--performance-blue))" }}>
            Data Scientist · ML & Risques
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-blue-700"
              style={{ color: "hsl(var(--surface-foreground))" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-perf-blue text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity"
          >
            Discuter de vos enjeux
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium py-2"
              style={{ color: "hsl(var(--surface-foreground))" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-perf-blue text-white text-sm font-semibold px-5 py-3 rounded-md text-center hover:opacity-90 transition-opacity"
            onClick={() => setMenuOpen(false)}
          >
            Discuter de vos enjeux
          </a>
        </div>
      )}
    </header>
  );
}

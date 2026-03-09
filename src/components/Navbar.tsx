import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Expertises", href: "#expertises" },
  { label: "Projets", href: "#projets" },
  { label: "Méthode", href: "#methode" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);

    const targetId = href.replace("#", "");

    if (location.pathname !== "/") {
      // If we are not on the homepage (e.g. mentions légales), redirect first then scroll
      navigate("/");
      // Wait for homepage to mount before scrolling
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If we are already on homepage, just scroll
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

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
        {/* Logo / Name + Photo */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-3 leading-tight"
        >
          <img
            src="/yann-pham-van.webp"
            alt="Yann Pham-Van, Data Scientist Freelance"
            loading="lazy"
            className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover flex-shrink-0"
          />
          <div className="flex flex-col">
            <span className="font-bold text-lg" style={{ color: "hsl(var(--navy))" }}>
              Yann Pham-Van
            </span>
            <span className="text-xs font-medium" style={{ color: "hsl(var(--performance-blue))" }}>
              Data Scientist · Scoring &amp; Anomalies
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium transition-colors hover:text-blue-700"
              style={{ color: "hsl(var(--surface-foreground))" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
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
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-base font-medium py-2"
              style={{ color: "hsl(var(--surface-foreground))" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="bg-perf-blue text-white text-base font-semibold px-5 py-3 rounded-md text-center hover:opacity-90 transition-opacity"
          >
            Discuter de vos enjeux
          </a>
        </div>
      )}
    </header>
  );
}

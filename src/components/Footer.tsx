import { Linkedin, Mail, Github } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const quickLinks = [
  { label: "Expertises", href: "#expertises" },
  { label: "Projets", href: "#projets" },
  { label: "Méthode", href: "#methode" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    const targetId = href.replace("#", "");

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <footer className="section-navy pt-14 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="font-bold text-white text-lg mb-1">Yann Pham-Van</p>
            <p className="text-sm mb-4" style={{ color: "hsl(var(--navy-foreground) / 0.55)" }}>
              Data Scientist Freelance<br />
              Scoring · Détection d'anomalies · Prévisions · MLOps
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/chasseur2valeurs/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ backgroundColor: "hsl(var(--performance-blue) / 0.25)" }}
                aria-label="LinkedIn"
              >
                <Linkedin size={17} className="text-white" />
              </a>
              <a
                href="https://github.com/YannPhamVan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ backgroundColor: "hsl(var(--performance-blue) / 0.25)" }}
                aria-label="GitHub"
              >
                <Github size={17} className="text-white" />
              </a>
              <a
                href="https://www.malt.fr/profile/yannphamvan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ backgroundColor: "hsl(var(--performance-blue) / 0.25)" }}
                aria-label="Malt"
              >
                <svg width="17" height="17" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white w-[17px] h-[17px]">
                  <path d="m408.4 103.8c-32.5-32.4-67.1-11.4-88.8 10.2L114.8 318.8c-21.7 21.7-44.4 54.7-10.2 88.8c34.1 34.1 67 11.4 88.7-10.3l204.8-204.8c21.7-21.6 42.7-56.3 10.3-88.7zm-195.7-8.4 43.4 43.4 44.1-44.2c3-3 6-5.8 9.1-8.4c-4.6-23.3-17.9-44.4-53.3-44.4c-35.4 0-48.7 21.2-53.2 44.5c3.3 2.9 6.6 5.8 9.9 9.1zm87.5 322.1-44.1-44.1-43.4 43.3c-3.3 3.3-6.5 6.4-9.8 9.2c5 23.8 19 45.5 53.1 45.5c34.2 0 48.3-21.9 53.2-45.7c-3-2.6-6-5.2-9-8.2zm-105.9-217h-83.6c-30.7 0-70 9.7-70 55.5c0 34.3 21.9 48.3 45.8 53.2c2.8-3.2 107.8-108.7 107.8-108.7zm231.5 2.3c-2.6 3-107.9 108.8-107.9 108.8h82.4c30.7 0 70-7.3 70-55.6c0-35.3-21.1-48.6-44.5-53.2zm-204.1-29.7 14.9-14.9-43.3-43.4c-21.7-21.7-54.6-44.4-88.8-10.2c-25 25-19.4 49.4-6.2 69.1c4.1-.3 123.4-.6 123.4-.6zm68.7 165.9-15 15 44.2 44.1c21.7 21.7 56.3 42.7 88.7 10.3c24.2-24.2 18.7-49.7 5.3-70c-4.3.3-123.2.6-123.2.6z" fill="currentColor" />
                </svg>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ backgroundColor: "hsl(var(--performance-blue) / 0.25)" }}
                aria-label="Email"
              >
                <Mail size={17} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-semibold text-white text-sm mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => handleNavClick(e, l.href)}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "hsl(var(--navy-foreground) / 0.55)" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertises */}
          <div>
            <p className="font-semibold text-white text-sm mb-4">Expertises</p>
            <ul className="space-y-2.5">
              {["Détection d'anomalies", "Scoring crédit & risque", "Industrialisation ML / MLOps", "Finance prédictive", "Maintenance prédictive"].map((e) => (
                <li key={e}>
                  <span className="text-sm" style={{ color: "hsl(var(--navy-foreground) / 0.55)" }}>
                    {e}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderColor: "hsl(var(--navy-foreground) / 0.1)", color: "hsl(var(--navy-foreground) / 0.65)" }}
        >
          <p>© {new Date().getFullYear()} Yann Pham-Van — Data Scientist Freelance. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link to="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

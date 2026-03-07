import { Linkedin, Mail, Github } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Expertises", href: "#expertises" },
  { label: "Projets", href: "#projets" },
  { label: "Méthode", href: "#methode" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
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
                href="#contact"
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
          style={{ borderColor: "hsl(var(--navy-foreground) / 0.1)", color: "hsl(var(--navy-foreground) / 0.4)" }}
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

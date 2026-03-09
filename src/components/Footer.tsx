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
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white w-[17px] h-[17px]">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.0001 21.0538L16.2731 16.7806C16.9038 16.1501 17.5855 16.1966 18.2721 16.8833C18.9587 17.5701 19.5543 18.2566 18.9236 18.8872L14.6506 23.1604C14.0199 23.7911 13.3382 23.7431 12.6515 23.0565C12.3168 22.7218 12.1584 22.3872 12.0001 21.0538ZM11.9996 11.2343L16.2731 6.96106C16.904 6.3302 17.5856 6.37691 18.2721 7.06371C18.9587 7.75051 19.5544 8.43719 18.9234 9.06821L14.6501 13.3414C14.0193 13.9723 13.3377 13.9255 12.6511 13.2387C12.3164 12.904 12.158 12.5694 11.9996 11.2343ZM11.9996 2.94635L7.72622 7.21953C7.09544 7.85023 6.41372 7.80344 5.72727 7.11663C5.04084 6.42984 4.44521 5.74325 5.07606 5.11269L9.34947 0.839504C9.98024 0.208803 10.662 0.255598 11.3484 0.942398C11.6831 1.27712 11.8415 1.61199 11.9996 2.94635ZM11.9996 12.7656L7.72661 17.0387C7.0959 17.6695 6.41417 17.6226 5.72771 16.9358C5.04126 16.249 4.44565 15.5623 5.07636 14.9315L9.34935 10.6583C9.98006 10.0275 10.6618 10.0743 11.3482 10.7611C11.6829 11.0958 11.8413 11.4305 11.9996 12.7656Z" fill="currentColor"/>
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

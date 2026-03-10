import { ArrowRight, ShieldCheck, TrendingUp, Zap } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const pillars = [
  { icon: ShieldCheck, text: "Réduction du risque" },
  { icon: TrendingUp, text: "Optimisation des coûts" },
  { icon: Zap, text: "Meilleure anticipation" },
];

export default function HeroSection() {
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
    <section
      id="hero"
      className="section-navy min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-6"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 mb-8 text-sm text-white/70">
          <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: "hsl(var(--performance-green-on-dark))" }}></span>
          Data Scientist Freelance · Finance & Industrie
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Anticipez les risques et détectez les{" "}
          <span style={{ color: "hsl(var(--performance-green-on-dark))" }}>
            opportunités
          </span>{" "}
          dans vos données.
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed">
          Spécialisé en maintenance prédictive et scoring des risques via la{" "}
          <span style={{ color: "hsl(var(--performance-green-on-dark))" }}>
            détection d’anomalies
          </span>,{" "}
          je vous aide à exploiter vos données pour{" "}
          <span style={{ color: "hsl(var(--performance-green-on-dark))" }}>
            améliorer vos décisions
          </span>{" "}
          grâce au Machine Learning.
        </p>

        {/* Pillars */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.text} className="flex items-center gap-2">
                <Icon size={18} className="flex-shrink-0" style={{ color: "hsl(var(--performance-green-on-dark))" }} />
                <span className="text-base text-white/80 font-medium">{p.text}</span>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="inline-flex items-center justify-center gap-2 bg-perf-blue text-white font-semibold px-8 py-4 rounded-md hover:opacity-90 transition-opacity text-base"
          >
            Discuter de votre projet
            <ArrowRight size={18} />
          </a>
          <a
            href="#projets"
            onClick={(e) => handleNavClick(e, "#projets")}
            className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium px-8 py-4 rounded-md hover:bg-white/10 transition-colors text-base"
          >
            Voir les projets
          </a>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, ShieldCheck, TrendingDown, Lightbulb } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Réduction du risque",
    desc: "Modèles éprouvés en production",
  },
  {
    icon: TrendingDown,
    title: "Optimisation des coûts",
    desc: "ROI mesurable dès les premières semaines",
  },
  {
    icon: Lightbulb,
    title: "Meilleure anticipation",
    desc: "Décisions proactives, non réactives",
  },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="section-navy min-h-screen flex flex-col justify-center pt-24 pb-20 px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 mb-8 text-sm text-white/70">
          <span className="w-2 h-2 rounded-full bg-perf-blue inline-block" style={{ backgroundColor: "hsl(var(--performance-green))" }}></span>
          Data Scientist Freelance · Finance & Industrie
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mb-6">
          Transformez vos données en{" "}
          <span style={{ color: "hsl(var(--performance-green))" }}>
            décisions prédictives
          </span>{" "}
          rentables
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed">
          Data Scientist freelance spécialisé en{" "}
          <strong className="text-white/90">détection d'anomalies</strong>,{" "}
          <strong className="text-white/90">scoring de risque</strong> et{" "}
          <strong className="text-white/90">industrialisation de modèles</strong> pour la
          finance et l'industrie.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-perf-blue text-white font-semibold px-8 py-4 rounded-md hover:opacity-90 transition-opacity text-base"
          >
            Discuter de vos enjeux
            <ArrowRight size={18} />
          </a>
          <a
            href="#projets"
            className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium px-8 py-4 rounded-md hover:bg-white/10 transition-colors text-base"
          >
            Voir les projets
          </a>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-12">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="flex items-start gap-4">
                <div
                  className="mt-0.5 p-2.5 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: "hsl(var(--performance-blue) / 0.2)" }}
                >
                  <Icon size={20} style={{ color: "hsl(var(--performance-green))" }} />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{p.title}</p>
                  <p className="text-white/60 text-sm mt-0.5">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

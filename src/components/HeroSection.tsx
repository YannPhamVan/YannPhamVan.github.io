import { ArrowRight, ShieldCheck, TrendingUp, Zap } from "lucide-react";

const pillars = [
  { icon: ShieldCheck, text: "Réduction du risque" },
  { icon: TrendingUp, text: "Optimisation des coûts" },
  { icon: Zap, text: "Meilleure anticipation" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="section-navy min-h-screen flex flex-col justify-center pt-24 pb-20 px-6"
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 mb-8 text-sm text-white/70">
          <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: "hsl(var(--performance-green))" }}></span>
          Data Scientist Freelance · Finance & Industrie
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Transformez vos données en{" "}
          <span style={{ color: "hsl(var(--performance-green))" }}>
            décisions stratégiques
          </span>{" "}
          mesurables
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          J'aide les entreprises financières et industrielles à exploiter leurs données pour{" "}
          <strong className="text-white/90">réduire le risque</strong>,{" "}
          <strong className="text-white/90">anticiper les dérives</strong> et{" "}
          <strong className="text-white/90">augmenter la performance opérationnelle à l'échelle</strong>.
        </p>

        {/* Pillars */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.text} className="flex items-center gap-2">
                <Icon size={18} className="flex-shrink-0" style={{ color: "hsl(var(--performance-green))" }} />
                <span className="text-base text-white/80 font-medium">{p.text}</span>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-perf-blue text-white font-semibold px-8 py-4 rounded-md hover:opacity-90 transition-opacity text-base"
          >
            Discuter de votre projet
            <ArrowRight size={18} />
          </a>
          <a
            href="#projets"
            className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium px-8 py-4 rounded-md hover:bg-white/10 transition-colors text-base"
          >
            Voir les projets
          </a>
        </div>
      </div>
    </section>
  );
}

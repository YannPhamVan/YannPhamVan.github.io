import { ArrowRight, AlertCircle, TrendingDown, Cpu } from "lucide-react";

const benefits = [
  {
    icon: AlertCircle,
    text: "Détection précoce des anomalies financières ou opérationnelles",
  },
  {
    icon: TrendingDown,
    text: "Anticipation des défauts de paiement et des pannes",
  },
  {
    icon: Cpu,
    text: "Modèles de Machine Learning réellement déployés en production",
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
          <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: "hsl(var(--performance-green))" }}></span>
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
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-8 leading-relaxed">
          J'aide les entreprises financières et industrielles à exploiter leurs données pour{" "}
          <strong className="text-white/90">détecter les anomalies</strong>,{" "}
          <strong className="text-white/90">anticiper les défauts</strong> et{" "}
          <strong className="text-white/90">déployer des modèles fiables en production</strong>.
        </p>

        {/* Benefits list */}
        <ul className="space-y-3 mb-10 max-w-xl">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <li key={b.text} className="flex items-start gap-3">
                <Icon size={18} className="mt-0.5 flex-shrink-0" style={{ color: "hsl(var(--performance-green))" }} />
                <span className="text-base text-white/80 leading-snug">{b.text}</span>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
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

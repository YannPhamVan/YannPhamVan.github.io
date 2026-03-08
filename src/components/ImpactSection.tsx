import { useEffect, useRef, useState } from "react";
import { LineChart, ShieldCheck, BrainCircuit, TrendingUp } from "lucide-react";

const messages = [
  {
    icon: LineChart,
    title: "Décisions basées sur la donnée",
    desc: "Remplacez les intuitions et les règles statiques par des signaux quantifiés et des indicateurs avancés.",
  },
  {
    icon: ShieldCheck,
    title: "Détection plus rapide des anomalies",
    desc: "Identifiez les irrégularités financières ou opérationnelles avant qu'elles génèrent des pertes.",
  },
  {
    icon: BrainCircuit,
    title: "Anticipation des risques",
    desc: "Agissez avant que les défauts, pannes ou dérives ne deviennent critiques pour votre activité.",
  },
  {
    icon: TrendingUp,
    title: "Modèles réellement utilisables",
    desc: "Des livrables opérationnels, documentés et pris en main par vos équipes métiers dès le premier jour.",
  },
];

export default function ImpactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-navy py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "hsl(var(--performance-green-on-dark))" }}
          >
            Ce que vous gagnez concrètement
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-3xl mx-auto">
            Des modèles qui créent un{" "}
            <span style={{ color: "hsl(var(--performance-green-on-dark))" }}>
              avantage compétitif mesurable
            </span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base">
            Chaque engagement est orienté vers un résultat business concret, pas seulement une performance technique.
          </p>
        </div>

        {/* Value blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {messages.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className={`flex flex-col items-start gap-4 p-6 rounded-xl border border-white/10 transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{
                  transitionDelay: `${i * 120}ms`,
                  backgroundColor: "hsl(var(--performance-blue) / 0.1)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "hsl(var(--performance-blue) / 0.25)" }}
                >
                  <Icon size={22} style={{ color: "hsl(var(--performance-green))" }} />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base mb-2">{v.title}</h3>
                  <p className="text-base text-white/65 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

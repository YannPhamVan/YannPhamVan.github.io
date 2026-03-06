import { useEffect, useRef, useState } from "react";
import { LineChart, ShieldCheck, BrainCircuit, TrendingUp } from "lucide-react";

const stats = [
  { value: "−40%", label: "de pertes sur portefeuilles risqués", suffix: "" },
  { value: "+35%", label: "de précision dans les prévisions", suffix: "" },
  { value: "< 48h", label: "pour un premier prototype opérationnel", suffix: "" },
  { value: "3×", label: "retour sur investissement moyen constaté", suffix: "" },
];

const values = [
  {
    icon: LineChart,
    title: "Pilotage par la donnée",
    desc: "Remplacez les intuitions par des signaux quantifiés et des indicateurs avancés.",
  },
  {
    icon: ShieldCheck,
    title: "Réduction du risque",
    desc: "Anticipez les défaillances avant qu'elles se produisent et limitez l'exposition.",
  },
  {
    icon: BrainCircuit,
    title: "Décisions éclairées",
    desc: "Des modèles interprétables qui renforcent la confiance des décideurs.",
  },
  {
    icon: TrendingUp,
    title: "ROI mesurable",
    desc: "Des objectifs définis en amont et des résultats suivis tout au long du projet.",
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
            style={{ color: "hsl(var(--performance-green))" }}
          >
            Impact & Performance
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-3xl mx-auto">
            Des modèles qui créent un{" "}
            <span style={{ color: "hsl(var(--performance-green))" }}>
              avantage compétitif mesurable
            </span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Des résultats concrets sur des environnements de production réels, avec des méthodologies validées.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center p-6 rounded-xl border border-white/10 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: `${i * 120}ms`,
                backgroundColor: "hsl(var(--performance-blue) / 0.12)",
              }}
            >
              <p
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: "hsl(var(--performance-green))" }}
              >
                {s.value}
              </p>
              <p className="text-sm text-white/60 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Value blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="flex flex-col items-start gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "hsl(var(--performance-blue) / 0.2)" }}
                >
                  <Icon size={20} style={{ color: "hsl(var(--performance-green))" }} />
                </div>
                <h3 className="font-semibold text-white text-sm">{v.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

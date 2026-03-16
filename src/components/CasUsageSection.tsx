import { ShieldAlert, Wrench, ShieldQuestion, Search, Users } from "lucide-react";

const usecases = [
  {
    icon: ShieldAlert,
    title: "Détection d’anomalies",
    description: "Identifier automatiquement des comportements inhabituels dans des données financières ou industrielles.",
  },
  {
    icon: Wrench,
    title: "Maintenance prédictive",
    description: "Anticiper les pannes d’équipements grâce à l’analyse des données opérationnelles.",
  },
  {
    icon: ShieldQuestion,
    title: "Scoring de risque",
    description: "Évaluer automatiquement le risque associé à des transactions, clients ou opérations.",
  },
  {
    icon: Search,
    title: "Détection de fraude",
    description: "Repérer des transactions suspectes dans des volumes importants de données.",
  },
  {
    icon: Users,
    title: "Segmentation client",
    description: "Identifier des groupes de clients aux comportements similaires pour améliorer les stratégies marketing.",
  },
];

export default function CasUsageSection() {
  return (
    <section id="usecases" className="bg-white py-24 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(var(--performance-blue))" }}>
            Cas d’usage
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "hsl(var(--navy))" }}>
            Exemples de problématiques que le Machine Learning peut résoudre.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usecases.map((uc, index) => {
            const Icon = uc.icon || Users; // Fallback to a general icon if needed
            // To make the 5th card center properly on large screens where grid has 3 columns:
            // The first 3 take the first row, the last 2 take the second row.
            // Using col-span classes to center the last 2 items on lg screens would break spacing,
            // so letting the natural CSS Grid layout handle the wrap is the safest and most standard
            // way without modifying the existing layout techniques of the site.
            return (
               <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-border flex flex-col items-start hover:shadow-md transition-shadow"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: "hsl(var(--surface))" }}
                  >
                    <Icon size={22} style={{ color: "hsl(var(--performance-blue))" }} />
                  </div>
                  <h3 className="font-semibold text-lg mb-3 leading-snug" style={{ color: "hsl(var(--navy))" }}>
                    {uc.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed flex-1">
                    {uc.description}
                  </p>
                </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

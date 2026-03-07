import { AlertTriangle, CreditCard, Wrench, PackageX } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Détection tardive des anomalies financières",
    desc: "Les irrégularités sont identifiées après coup, lorsque les pertes sont déjà réalisées.",
  },
  {
    icon: CreditCard,
    title: "Défauts de paiement imprévisibles",
    desc: "L'évaluation du risque crédit repose sur des règles statiques qui ne capturent pas la réalité.",
  },
  {
    icon: Wrench,
    title: "Pannes coûteuses non anticipées",
    desc: "La maintenance curative génère des arrêts imprévus et des coûts opérationnels élevés.",
  },
  {
    icon: PackageX,
    title: "Modèles non industrialisés",
    desc: "Des POC prometteurs qui restent dans des notebooks, sans jamais créer de valeur en production.",
  },
];

export default function ProblematiquesSection() {
  return (
    <section className="bg-surface py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(var(--performance-blue))" }}>
            Enjeux métiers
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "hsl(var(--navy))" }}>
            Ces enjeux vous sont peut-être familiers…
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            La donnée existe. Les équipes travaillent. Mais les décisions restent réactives, coûteuses et incertaines.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "hsl(var(--surface))" }}
                >
                  <Icon size={22} style={{ color: "hsl(var(--performance-blue))" }} />
                </div>
                <h3 className="font-semibold text-base mb-2 leading-snug" style={{ color: "hsl(var(--navy))" }}>
                  {p.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Transition phrase */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-border rounded-xl px-6 py-4 shadow-sm">
            <div
              className="w-2 h-8 rounded-full"
              style={{ backgroundColor: "hsl(var(--performance-green))" }}
            />
            <p className="text-base font-semibold" style={{ color: "hsl(var(--navy))" }}>
              Le Machine Learning transforme ces vulnérabilités en{" "}
              <span style={{ color: "hsl(var(--performance-blue))" }}>avantages compétitifs mesurables</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

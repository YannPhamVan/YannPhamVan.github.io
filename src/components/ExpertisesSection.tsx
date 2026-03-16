import { ScanSearch, BarChart3, Rocket } from "lucide-react";

const expertises = [
  {
    icon: ScanSearch,
    title: "Détection d'anomalies",
    subtitle: "Finance & Industrie",
    desc: "Identification en temps quasi-réel des comportements atypiques dans les transactions financières, les flux opérationnels et les données de capteurs industriels.",
    techs: ["Isolation Forest", "Autoencoder", "LSTM", "Python", "Kafka"],
    impact: {
      label: "Impact mesurable",
      items: [
        "Réduction des pertes liées aux fraudes",
        "Détection précoce des dérives processus",
        "Alertes métier exploitables",
      ],
    },
  },
  {
    icon: BarChart3,
    title: "Scoring crédit & risque",
    subtitle: "Établissements financiers & Assurances",
    desc: "Modèles prédictifs de probabilité de défaut, scoring comportemental et segmentation de portefeuilles risqués, conformes aux exigences réglementaires.",
    techs: ["XGBoost", "LightGBM", "SHAP", "Scorecard", "FastAPI"],
    impact: {
      label: "Impact mesurable",
      items: [
        "Amélioration du cash-flow",
        "Meilleure sélection des contreparties",
        "Justifiabilité réglementaire (RGPD, Bâle)",
      ],
    },
  },
  {
    icon: Rocket,
    title: "Industrialisation ML / MLOps",
    subtitle: "Finance, Industrie & Services",
    desc: "Déploiement, monitoring et maintien en conditions opérationnelles de modèles ML en production. Du POC au système robuste, scalable et supervisé.",
    techs: ["MLflow", "Docker", "CI/CD", "FastAPI", "Grafana"],
    impact: {
      label: "Impact mesurable",
      items: [
        "Maîtrise opérationnelle complète",
        "Modèles en production durables",
        "Détection du drift et retraining automatisé",
      ],
    },
  },
];

export default function ExpertisesSection() {
  return (
    <section id="expertises" className="bg-surface py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(var(--performance-blue))" }}>
            Expertises
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "hsl(var(--navy))" }}>
            Des compétences directement applicables à vos enjeux
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            Chaque domaine d'expertise est ancré dans des cas d'usage réels et orienté vers des résultats business concrets.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {expertises.map((ex) => {
            const Icon = ex.icon;
            return (
              <div
                key={ex.title}
                className="rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                {/* Card header */}
                <div className="px-6 py-5" style={{ backgroundColor: "hsl(var(--navy))" }}>
                  <div className="flex items-center gap-3 mb-1">
                    <Icon size={22} style={{ color: "hsl(var(--performance-green))" }} />
                    <h3 className="font-bold text-lg text-white">{ex.title}</h3>
                  </div>
                  <p className="text-sm" style={{ color: "hsl(var(--navy-foreground) / 0.6)" }}>
                    {ex.subtitle}
                  </p>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1 bg-white">
                  <p className="text-base text-muted-foreground leading-relaxed mb-5">{ex.desc}</p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {ex.techs.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium px-2.5 py-1 rounded-md border"
                        style={{
                          borderColor: "hsl(var(--border))",
                          color: "hsl(var(--surface-foreground))",
                          backgroundColor: "hsl(var(--surface))",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Impact */}
                  <div className="mt-auto pt-4 border-t border-border">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "hsl(var(--performance-green))" }}>
                      {ex.impact.label}
                    </p>
                    <ul className="space-y-1.5">
                      {ex.impact.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-base">
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: "hsl(var(--performance-green))" }}
                          />
                          <span style={{ color: "hsl(var(--surface-foreground))" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

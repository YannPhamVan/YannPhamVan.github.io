import { CheckCircle2, FlaskConical } from "lucide-react";

const projects = [
  {
    badge: "real",
    category: "Scoring & Risque",
    title: "API de scoring crédit déployée en production",
    context: "Établissement de crédit à la consommation — portefeuille de 50 000 dossiers/mois",
    problem: "L'évaluation du risque reposait sur des règles statiques, générant trop de refus injustifiés et des défauts non anticipés.",
    solution: "Modèle XGBoost calibré avec feature engineering comportemental, interprétabilité SHAP et exposition via API REST FastAPI dockerisée.",
    impact: [
      { label: "Réduction des défauts", value: "−35%" },
      { label: "Précision du modèle (AUC)", value: "0.91" },
    ],
    stack: ["Python", "XGBoost", "SHAP", "FastAPI", "Docker", "PostgreSQL"],
  },
  {
    badge: "real",
    category: "Détection d'anomalies",
    title: "Système de détection d'anomalies financières",
    context: "Groupe industriel — surveillance des transactions inter-entités en temps quasi-réel",
    problem: "Les fraudes et irrégularités n'étaient détectées qu'après clôture comptable, avec un taux de faux positifs élevé paralysant les équipes.",
    solution: "Pipeline hybride supervisé/non supervisé (Isolation Forest + LSTM) avec streaming Kafka et système d'alerte paramétrable par les métiers.",
    impact: [
      { label: "Fraudes détectées (rappel)", value: "+42%" },
      { label: "Faux positifs réduits", value: "−60%" },
    ],
    stack: ["Python", "Isolation Forest", "LSTM", "Kafka", "Elasticsearch"],
  },
  {
    badge: "demo",
    category: "MLOps",
    title: "Pipeline ML industrialisé avec monitoring continu",
    context: "Fintech — modèles de scoring en production avec supervision et retraining automatisé",
    problem: "Les modèles dérivaient silencieusement sans détection, nécessitant des interventions manuelles coûteuses et des indisponibilités non planifiées.",
    solution: "Mise en place de MLflow, pipeline CI/CD GitHub Actions, monitoring Grafana avec détection automatique du data drift et retraining déclenché par seuils.",
    impact: [
      { label: "Disponibilité du système", value: "99.8%" },
      { label: "Temps de retraining", value: "< 2h" },
    ],
    stack: ["MLflow", "Airflow", "Docker", "Grafana", "GitHub Actions"],
  },
];

export default function ProjetsSection() {
  return (
    <section id="projets" className="bg-surface py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(var(--performance-blue))" }}>
            Projets représentatifs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "hsl(var(--navy))" }}>
            De la modélisation à la valeur en production
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            Chaque projet illustre un cycle complet : compréhension du besoin, modélisation rigoureuse et déploiement opérationnel.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden"
            >
              {/* Top bar */}
              <div className="px-6 pt-5 pb-4">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: "hsl(var(--surface))",
                      color: "hsl(var(--performance-blue))",
                    }}
                  >
                    {p.category}
                  </span>
                  {p.badge === "real" ? (
                    <span
                      className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
                      style={{
                        backgroundColor: "hsl(var(--performance-green) / 0.12)",
                        color: "hsl(var(--performance-green))",
                      }}
                    >
                      <CheckCircle2 size={12} />
                      Projet réel
                    </span>
                  ) : (
                    <span
                      className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
                      style={{
                        backgroundColor: "hsl(var(--performance-blue) / 0.08)",
                        color: "hsl(var(--performance-blue))",
                      }}
                    >
                      <FlaskConical size={12} />
                      Démo avancée
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-base leading-snug mb-1.5" style={{ color: "hsl(var(--navy))" }}>
                  {p.title}
                </h3>
                <p className="text-base text-muted-foreground">{p.context}</p>
              </div>

              {/* Problem / Solution */}
              <div className="px-6 mb-4 flex-1 space-y-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "hsl(var(--navy))" }}>
                    Problème métier
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">{p.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "hsl(var(--navy))" }}>
                    Solution
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">{p.solution}</p>
                </div>
              </div>

              {/* Metrics */}
              <div
                className="mx-6 rounded-lg px-4 py-3 grid grid-cols-2 gap-3 mb-4"
                style={{ backgroundColor: "hsl(var(--surface))" }}
              >
                {p.impact.map((m) => (
                  <div key={m.label}>
                    <p className="text-lg font-bold" style={{ color: "hsl(var(--performance-green))" }}>
                      {m.value}
                    </p>
                    <p className="text-sm text-muted-foreground leading-tight">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Stack tags */}
              <div className="px-6 pb-6">
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-1 rounded border font-medium"
                      style={{
                        borderColor: "hsl(var(--border))",
                        color: "hsl(var(--surface-foreground))",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

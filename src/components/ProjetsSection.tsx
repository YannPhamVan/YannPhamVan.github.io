import { CheckCircle2, ExternalLink } from "lucide-react";

const projects = [
  {
    category: "Scoring & Risque",
    title: "API de scoring crédit déployée en production",
    context: "Établissement de crédit à la consommation — portefeuille de 50 000 dossiers/mois",
    metrics: [
      { label: "Réduction des défauts", value: "−35%" },
      { label: "Précision du modèle (AUC)", value: "0.91" },
    ],
    methodologie: "Collecte et enrichissement des données comportementales, feature engineering, modèle XGBoost avec calibration, interprétabilité SHAP, API REST FastAPI dockerisée.",
    stack: ["Python", "XGBoost", "SHAP", "FastAPI", "Docker", "PostgreSQL"],
    production: true,
  },
  {
    category: "Détection d'anomalies",
    title: "Système de détection d'anomalies financières",
    context: "Groupe industriel — surveillance des transactions inter-entités en temps quasi-réel",
    metrics: [
      { label: "Fraudes détectées (rappel)", value: "+42%" },
      { label: "Faux positifs réduits", value: "−60%" },
    ],
    methodologie: "Analyse exploratoire des patterns transactionnels, modèles hybrides supervisés/non supervisés (Isolation Forest + LSTM), pipeline de streaming et système d'alerte.",
    stack: ["Python", "Isolation Forest", "LSTM", "Kafka", "Elasticsearch"],
    production: true,
  },
  {
    category: "MLOps",
    title: "Pipeline ML industrialisé avec monitoring continu",
    context: "Fintech — modèles de scoring en production avec supervision et retraining automatisé",
    metrics: [
      { label: "Disponibilité du système", value: "99.8%" },
      { label: "Temps de retraining", value: "< 2h" },
    ],
    methodologie: "Mise en place de MLflow pour le tracking d'expériences, pipeline CI/CD, monitoring des métriques et détection du data drift, retraining automatisé avec validation avant déploiement.",
    stack: ["MLflow", "Airflow", "Docker", "Grafana", "GitHub Actions"],
    production: true,
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
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
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
                  {p.production && (
                    <span
                      className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
                      style={{
                        backgroundColor: "hsl(var(--performance-green) / 0.12)",
                        color: "hsl(var(--performance-green))",
                      }}
                    >
                      <CheckCircle2 size={12} />
                      En production
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-base leading-snug mb-2" style={{ color: "hsl(var(--navy))" }}>
                  {p.title}
                </h3>
                <p className="text-xs text-muted-foreground">{p.context}</p>
              </div>

              {/* Metrics */}
              <div
                className="mx-6 rounded-lg px-4 py-3 grid grid-cols-2 gap-3 mb-4"
                style={{ backgroundColor: "hsl(var(--surface))" }}
              >
                {p.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-lg font-bold" style={{ color: "hsl(var(--performance-green))" }}>
                      {m.value}
                    </p>
                    <p className="text-xs text-muted-foreground leading-tight">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Methodology */}
              <div className="px-6 mb-4 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "hsl(var(--navy))" }}>
                  Méthodologie
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.methodologie}</p>
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

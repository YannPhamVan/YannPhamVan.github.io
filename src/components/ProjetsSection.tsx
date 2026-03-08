import { CheckCircle2 } from "lucide-react";

const projects = [
  {
    badge: "real",
    category: "Scoring & Risque",
    title: "Scoring crédit pour une fintech",
    description:
      "Modélisation et déploiement d'un score de remboursement permettant d'évaluer le risque d'une demande de crédit.",
    contributions: [
      "Développement d'un modèle supervisé avec gestion du déséquilibre de classes",
      "Optimisation du seuil métier pour la prise de décision",
      "Suivi des performances avec MLflow",
      "Détection de dérive des données avec Evidently",
      "Déploiement d'une API FastAPI pour exposer le modèle",
      "Dashboard Streamlit pour simuler des demandes de crédit",
    ],
    objective: "Illustrer la mise en production complète d'un modèle de scoring.",
    stack: ["Python", "XGBoost", "FastAPI", "MLflow", "Evidently", "Streamlit", "Docker"],
  },
  {
    badge: "real",
    category: "MLOps",
    title: "Industrialisation d'un pipeline Machine Learning",
    description:
      "Mise en place d'un pipeline complet pour entraîner, versionner et déployer un modèle de prédiction.",
    contributions: [
      "Orchestration du pipeline de données avec Prefect",
      "Entraînement et gestion des versions de modèles avec MLflow",
      "Mise en place de tests et validation de données",
      "Déploiement d'une API FastAPI",
      "Monitoring du modèle avec Evidently",
      "Automatisation CI/CD via GitHub Actions",
      "Préparation d'un déploiement cloud avec Terraform et LocalStack",
    ],
    objective: "Illustrer les bonnes pratiques d'industrialisation ML (MLOps).",
    stack: ["Python", "Prefect", "MLflow", "FastAPI", "Evidently", "GitHub Actions", "Terraform", "Docker"],
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                  <span
                    className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 border"
                    style={{
                      borderColor: "hsl(var(--performance-green))",
                      color: "hsl(var(--performance-green))",
                      backgroundColor: "transparent",
                    }}
                  >
                    <CheckCircle2 size={12} />
                    Projet réel
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug mb-2" style={{ color: "hsl(var(--navy))" }}>
                  {p.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">{p.description}</p>
              </div>

              {/* Contributions */}
              <div className="px-6 pb-4 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "hsl(var(--navy))" }}>
                  Principales contributions
                </p>
                <ul className="space-y-1.5">
                  {p.contributions.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-base text-muted-foreground">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "hsl(var(--performance-blue))" }}
                      />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Objective */}
              <div
                className="mx-6 rounded-lg px-4 py-3 mb-4"
                style={{ backgroundColor: "hsl(var(--surface))" }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "hsl(var(--navy))" }}>
                  Objectif
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">{p.objective}</p>
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

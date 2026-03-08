import { CheckCircle2 } from "lucide-react";

const projects = [
  {
    badge: "real",
    category: "Scoring & Risque",
    title: "Scoring crédit pour une fintech",
    context: "Une fintech avait besoin d'évaluer automatiquement le risque de remboursement de chaque demande de crédit, sans dépendre de règles métier figées.",
    description:
      "Développement et déploiement d'un modèle de scoring supervisé, exposé via une API REST et piloté depuis un dashboard interactif.",
    contributions: [
      "Modèle supervisé avec gestion du déséquilibre de classes",
      "Optimisation du seuil de décision adapté au contexte métier",
      "Suivi des performances et détection de dérive avec MLflow & Evidently",
      "API FastAPI pour intégration dans les systèmes existants",
      "Dashboard Streamlit pour simuler et explorer les décisions crédit",
    ],
    value: "Meilleure prise de décision crédit, intégration continue dans les outils métier, surveillance active du modèle en production.",
    stack: ["Python", "XGBoost", "FastAPI", "MLflow", "Evidently", "Streamlit", "Docker"],
  },
  {
    badge: "real",
    category: "MLOps",
    title: "Industrialisation d'un pipeline Machine Learning",
    context: "Une équipe data souhaitait passer d'expérimentations isolées à un pipeline ML robuste, reproductible et déployable en production.",
    description:
      "Mise en place d'un pipeline complet automatisé, du traitement de la donnée jusqu'au monitoring du modèle déployé.",
    contributions: [
      "Orchestration du pipeline de données avec Prefect",
      "Versionnement des modèles et suivi des expériences avec MLflow",
      "Tests automatisés et validation de la qualité des données",
      "API FastAPI pour exposer les prédictions",
      "Monitoring de la dérive des données avec Evidently",
      "CI/CD via GitHub Actions pour des livraisons fiables",
      "Infrastructure cloud préparée avec Terraform et LocalStack",
    ],
    value: "Industrialisation fiable du cycle ML, automatisation des livraisons, traçabilité complète des expériences et des modèles.",
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
                {/* Context */}
                <p className="text-xs font-semibold uppercase tracking-wider mb-1 mt-3" style={{ color: "hsl(var(--performance-blue))" }}>
                  Contexte
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-2">{p.context}</p>
                {/* Solution */}
                <p className="text-xs font-semibold uppercase tracking-wider mb-1 mt-2" style={{ color: "hsl(var(--performance-blue))" }}>
                  Solution
                </p>
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

              {/* Value */}
              <div
                className="mx-6 rounded-lg px-4 py-3 mb-4"
                style={{ backgroundColor: "hsl(var(--surface))" }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "hsl(var(--navy))" }}>
                  Valeur apportée
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">{p.value}</p>
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

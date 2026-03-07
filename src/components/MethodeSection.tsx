import { Building2, Database, BrainCircuit, FlaskConical, Rocket, Activity } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Building2,
    title: "Compréhension métier",
    desc: "Analyse approfondie des enjeux, des contraintes réglementaires et de la définition du succès avec les parties prenantes.",
  },
  {
    number: "02",
    icon: Database,
    title: "Analyse des données",
    desc: "Exploration, nettoyage, détection des biais et ingénierie des variables pour maximiser le signal prédictif.",
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "Modélisation",
    desc: "Sélection et entraînement des algorithmes adaptés au problème, avec validation croisée et optimisation des hyperparamètres.",
  },
  {
    number: "04",
    icon: FlaskConical,
    title: "Validation rigoureuse",
    desc: "Tests sur données hors-échantillon, analyse de robustesse, explainability SHAP et validation métier des résultats.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Déploiement",
    desc: "Intégration API, containerisation Docker, mise en production progressive et documentation technique complète.",
  },
  {
    number: "06",
    icon: Activity,
    title: "Monitoring continu",
    desc: "Surveillance des métriques de performance, détection du data drift et retraining planifié pour maintenir la précision.",
  },
];

export default function MethodeSection() {
  return (
    <section id="methode" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(var(--performance-blue))" }}>
            Méthode
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "hsl(var(--navy))" }}>
            Un cycle complet, de la donnée à la valeur
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Une approche structurée qui garantit la fiabilité des livrables et la création de valeur dès les premières semaines.
          </p>
        </div>

        {/* Steps — horizontal connector on desktop */}
        <div className="relative">
          {/* Horizontal line desktop */}
          <div className="hidden lg:block absolute top-8 left-[calc(1/12*100%)] right-[calc(1/12*100%)] h-0.5" style={{ backgroundColor: "hsl(var(--border))" }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex flex-col items-start lg:items-center lg:text-center relative">
                  {/* Icon bubble */}
                  <div
                    className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 bg-white flex-shrink-0"
                    style={{ borderColor: "hsl(var(--performance-blue))" }}
                  >
                    <Icon size={24} style={{ color: "hsl(var(--performance-blue))" }} />
                  </div>

                  {/* Step number */}
                  <span
                    className="text-xs font-bold mb-1.5"
                    style={{ color: "hsl(var(--performance-blue))" }}
                  >
                    Étape {step.number}
                  </span>

                  <h3
                    className="font-semibold text-sm mb-1.5 leading-snug"
                    style={{ color: "hsl(var(--navy))" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-14 text-center">
          <div
            className="inline-block rounded-xl px-8 py-4 border"
            style={{
              backgroundColor: "hsl(var(--surface))",
              borderColor: "hsl(var(--border))",
            }}
          >
            <p className="text-sm font-medium" style={{ color: "hsl(var(--surface-foreground))" }}>
              Chaque engagement inclut une{" "}
              <strong style={{ color: "hsl(var(--navy))" }}>documentation complète</strong> et un{" "}
              <strong style={{ color: "hsl(var(--navy))" }}>transfert de compétences</strong> aux équipes internes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

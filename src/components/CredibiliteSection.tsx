import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Rapide et efficace comme à chaque mission ! Un plaisir de travailler avec toi.",
    author: "Aurore A.",
    role: "Dirigeante",
    company: "ELITE BEES",
    date: "septembre 2025",
    initials: "AA",
  },
  {
    text: "Voici ce que je peux recommander de Yann : maîtrise technique, capacité à résoudre des problèmes métiers, communication claire, rigueur, autonomie, adaptabilité, très réactif. Merci pour ton aide sur ce projet !",
    author: "Aurore A.",
    role: "Dirigeante",
    company: "ELITE BEES",
    date: "janvier 2025",
    initials: "AA",
  },
  {
    text: "J'ai eu le plaisir de superviser un projet de Data Science réalisé par Yann. Son travail témoigne d'une bonne maîtrise des différents aspects du projet : FastAPI pour les API, MLflow pour le suivi des modèles et Pytest pour les tests. Il a également démontré d'excellentes compétences de communication.",
    author: "Zied J.",
    role: "Consultant freelance",
    company: "",
    date: "janvier 2024",
    initials: "ZJ",
  },
  {
    text: "Yann a démontré sa capacité à mener des projets de Data Science complets. Les projets ont été réalisés avec succès et livrés en avance sur le planning estimé. Je recommande vivement de collaborer avec lui.",
    author: "Aurélien M.",
    role: "ML Engineer",
    company: "Arval BNP Paribas",
    date: "décembre 2023",
    initials: "AM",
  },
  {
    text: "Yann a géré avec succès un projet Big Data dans le cloud. Le code est fonctionnel, les opérations parallélisées avec PySpark et le déploiement cloud parfaitement maîtrisé. La démonstration et la présentation étaient claires et convaincantes.",
    author: "Dan S.",
    role: "Data & AI Manager",
    company: "Accenture",
    date: "novembre 2023",
    initials: "DS",
  },
  {
    text: "Projet complexe de clustering exécuté avec rigueur. Yann a su produire des livrables clairs et analytiques, avec une interprétation précise des clusters. La présentation était professionnelle, démontrant sa capacité à contextualiser les résultats pour des décisions métier.",
    author: "Alexandre G.",
    role: "Senior Technical Consultant Data / IA / NLP",
    company: "NORMA (Freelance)",
    date: "juin 2023",
    initials: "AG",
  },
  {
    text: "Yann a livré un projet complet et parfaitement documenté. Le notebook et les analyses statistiques sont clairs, reproductibles et pertinents pour la sélection des pays candidats. La présentation était structurée et dynamique, facilitant la compréhension des conclusions.",
    author: "Amosse E.",
    role: "Freelance",
    company: "",
    date: "avril 2023",
    initials: "AE",
  },
];

export default function CredibiliteSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(var(--performance-blue))" }}>
            Témoignages
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "hsl(var(--navy))" }}>
            Ils m'ont fait confiance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-xl p-6 border border-border relative flex flex-col"
              style={{ backgroundColor: "hsl(var(--surface))" }}
            >
              <Quote
                size={28}
                className="mb-3 opacity-25 flex-shrink-0"
                style={{ color: "hsl(var(--performance-blue))" }}
              />
              <blockquote className="text-base leading-relaxed italic mb-5 flex-1" style={{ color: "hsl(var(--surface-foreground))" }}>
                "{t.text}"
              </blockquote>
              <div className="flex items-center justify-between gap-3 pt-4 border-t" style={{ borderColor: "hsl(var(--border))" }}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-xs flex-shrink-0"
                    style={{ backgroundColor: "hsl(var(--performance-blue))" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "hsl(var(--navy))" }}>{t.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.role}{t.company ? ` — ${t.company}` : ""}
                    </p>
                  </div>
                </div>
                <time className="text-xs text-muted-foreground flex-shrink-0">{t.date}</time>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

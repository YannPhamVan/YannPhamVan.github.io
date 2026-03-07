import { Quote, Award } from "lucide-react";

const certifications = [
  { label: "Data Scientist", org: "OpenClassrooms" },
  { label: "MLOps Zoomcamp", org: "DataTalks.Club" },
  { label: "Machine Learning & Data Engineering", org: "DataTalks.Club" },
];

export default function CredibiliteSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(var(--performance-blue))" }}>
            Crédibilité
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "hsl(var(--navy))" }}>
            Ils m'ont fait confiance
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Testimonial */}
          <div
            className="rounded-xl p-8 border border-border relative"
            style={{ backgroundColor: "hsl(var(--surface))" }}
          >
            <Quote
              size={36}
              className="mb-4 opacity-20"
              style={{ color: "hsl(var(--performance-blue))" }}
            />
            <blockquote className="text-lg leading-relaxed italic mb-6" style={{ color: "hsl(var(--surface-foreground))" }}>
              "Rapide et efficace comme à chaque mission ! Un plaisir de travailler avec toi."
            </blockquote>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
                style={{ backgroundColor: "hsl(var(--performance-blue))" }}
              >
                A
              </div>
              <div>
                <p className="font-semibold text-base" style={{ color: "hsl(var(--navy))" }}>Aurore</p>
                <p className="text-sm text-muted-foreground">ELITE BEES</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award size={20} style={{ color: "hsl(var(--performance-blue))" }} />
              <h3 className="font-bold text-lg" style={{ color: "hsl(var(--navy))" }}>
                Certifications
              </h3>
            </div>
            <ul className="space-y-4">
              {certifications.map((c) => (
                <li
                  key={c.label}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border bg-white hover:shadow-sm transition-shadow"
                >
                  <div
                    className="w-2 h-10 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "hsl(var(--performance-green))" }}
                  />
                  <div>
                    <p className="font-semibold text-base" style={{ color: "hsl(var(--navy))" }}>
                      {c.label}
                    </p>
                    <p className="text-sm text-muted-foreground">{c.org}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

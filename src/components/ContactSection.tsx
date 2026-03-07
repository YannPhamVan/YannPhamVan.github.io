import { useState } from "react";
import { Send, Clock, Lock } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ nom: "", societe: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-surface py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left — copy */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(var(--performance-blue))" }}>
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: "hsl(var(--navy))" }}>
              Parlons de votre problématique
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed text-base">
              Vous souhaitez exploiter vos données pour mieux anticiper les risques ou améliorer vos décisions ?{" "}
              Décrivez-moi votre contexte et je vous répondrai rapidement.
            </p>

            {/* Trust signals */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "hsl(var(--performance-green) / 0.1)" }}>
                  <Clock size={18} style={{ color: "hsl(var(--performance-green))" }} />
                </div>
                <div>
                  <p className="font-semibold text-base" style={{ color: "hsl(var(--navy))" }}>Réponse sous 24h</p>
                  <p className="text-sm text-muted-foreground">En jours ouvrés</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "hsl(var(--performance-green) / 0.1)" }}>
                  <Lock size={18} style={{ color: "hsl(var(--performance-green))" }} />
                </div>
                <div>
                  <p className="font-semibold text-base" style={{ color: "hsl(var(--navy))" }}>Confidentialité garantie</p>
                  <p className="text-sm text-muted-foreground">NDA disponible sur demande</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "hsl(var(--performance-green) / 0.1)" }}>
                  <Send size={18} style={{ color: "hsl(var(--performance-green))" }} />
                </div>
                <div>
                  <p className="font-semibold text-base" style={{ color: "hsl(var(--navy))" }}>Premier échange sans engagement</p>
                  <p className="text-sm text-muted-foreground">Diagnostic de faisabilité gratuit</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-xl shadow-sm border border-border p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "hsl(var(--performance-green) / 0.12)" }}
                >
                  <Send size={26} style={{ color: "hsl(var(--performance-green))" }} />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "hsl(var(--navy))" }}>
                  Message envoyé !
                </h3>
                <p className="text-muted-foreground text-base">
                  Merci pour votre message. Je vous contacterai dans les 24h.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "hsl(var(--navy))" }}>
                      Nom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nom"
                      required
                      value={form.nom}
                      onChange={handleChange}
                      placeholder="Jean Martin"
                      className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "hsl(var(--navy))" }}>
                      Société <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="societe"
                      required
                      value={form.societe}
                      onChange={handleChange}
                      placeholder="Votre entreprise"
                      className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "hsl(var(--navy))" }}>
                    Email professionnel <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="j.martin@entreprise.fr"
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "hsl(var(--navy))" }}>
                    Décrivez votre problématique <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Contexte de votre projet, problématique principale, périmètre envisagé, délais…"
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-perf-blue text-white font-semibold py-3.5 px-6 rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-base"
                >
                  <Send size={16} />
                  Échanger sur votre projet
                </button>

                <p className="text-sm text-center text-muted-foreground">
                  Vos données sont traitées de manière confidentielle et ne sont jamais partagées.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

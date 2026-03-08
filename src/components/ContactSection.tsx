import { useState } from "react";
import { Send, Clock, Lock } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/xgonvgaa", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ nom: form.nom, email: form.email, message: form.message }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setError(data?.errors?.[0]?.message || "Une erreur est survenue. Veuillez réessayer.");
      }
    } catch {
      setError("Impossible d'envoyer le message. Vérifiez votre connexion et réessayez.");
    } finally {
      setIsLoading(false);
    }
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
                  Merci ! Votre message a bien été envoyé. Je vous répondrai sous 24h.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
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
                    Votre message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre contexte, votre problématique principale, le périmètre envisagé…"
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition resize-none"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-500 text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-perf-blue text-white font-semibold py-3.5 px-6 rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-base disabled:opacity-60"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Envoi en cours…
                    </span>
                  ) : (
                    <>
                      <Send size={16} />
                      Envoyer mon message
                    </>
                  )}
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

import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium mb-10 hover:opacity-80 transition-opacity"
          style={{ color: "hsl(var(--performance-blue))" }}
        >
          <ArrowLeft size={16} />
          Retour au site
        </Link>

        <h1 className="text-3xl font-bold mb-2" style={{ color: "hsl(var(--navy))" }}>
          Politique de confidentialité
        </h1>
        <p className="text-sm text-muted-foreground mb-10">Dernière mise à jour : mars 2025</p>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "hsl(var(--navy))" }}>Responsable du traitement</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Yann Pham-Van, Data Scientist Freelance. Contact via le formulaire de contact du site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "hsl(var(--navy))" }}>Données collectées</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Ce site collecte uniquement les données que vous fournissez volontairement via le formulaire de contact :
              nom, société, adresse email et message. Aucune autre donnée personnelle n'est collectée automatiquement
              (pas de cookies de tracking, pas d'analyse comportementale).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "hsl(var(--navy))" }}>Finalité du traitement</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Les données transmises via le formulaire sont utilisées <strong>uniquement pour répondre à votre demande</strong> de
              contact ou d'information sur mes services. Elles ne font l'objet d'aucun traitement commercial ou marketing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "hsl(var(--navy))" }}>Conservation des données</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Les données sont conservées uniquement le temps nécessaire au traitement de votre demande et aux
              échanges qui en découlent. Elles sont ensuite supprimées.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "hsl(var(--navy))" }}>Partage et revente</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Vos données personnelles ne sont <strong>jamais vendues, louées ou partagées</strong> avec des tiers à des
              fins commerciales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "hsl(var(--navy))" }}>Hébergement</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Ce site est hébergé par GitHub Pages (GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA).
              Les données transitant via le formulaire de contact peuvent être traitées sur des serveurs situés aux États-Unis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "hsl(var(--navy))" }}>Vos droits</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
              Pour exercer ces droits, contactez-moi via le formulaire de contact du site.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

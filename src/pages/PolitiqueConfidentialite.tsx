import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PolitiqueConfidentialite() {
  return (
    <>
      <meta name="robots" content="noindex, nofollow" />
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
                Yann Pham-Van, Data Scientist Freelance — 21800 Quetigny, France.<br />
                Contact :{" "}
                <a
                  href="mailto:yann.pham-van+portfolio@gadz.org"
                  className="underline hover:opacity-80 transition-opacity"
                  style={{ color: "hsl(var(--performance-blue))" }}
                >
                  yann.pham-van+portfolio@gadz.org
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3" style={{ color: "hsl(var(--navy))" }}>Données collectées</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Ce site collecte uniquement les données que vous fournissez volontairement via le formulaire de contact :
                nom, société, adresse email et message. Aucune autre donnée personnelle n'est collectée automatiquement.
                Il n'y a pas de cookies de suivi, pas d'analytics comportemental et aucun outil de pistage tiers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3" style={{ color: "hsl(var(--navy))" }}>Finalité du traitement</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Les données transmises via le formulaire sont utilisées <strong>uniquement pour répondre à votre demande</strong> de
                contact ou d'information sur les services proposés. Elles ne font l'objet d'aucun traitement commercial ou marketing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3" style={{ color: "hsl(var(--navy))" }}>Durée de conservation</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Les données sont conservées uniquement le temps nécessaire au traitement de votre demande et aux
                échanges qui en découlent, puis supprimées. Aucune base de données n'est constituée à partir des soumissions du formulaire.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3" style={{ color: "hsl(var(--navy))" }}>Partage et revente</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Vos données personnelles ne sont <strong>jamais vendues, louées ou partagées</strong> avec des tiers à des
                fins commerciales ou autres. Elles restent strictement confidentielles et ne sont accessibles qu'au
                responsable du site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3" style={{ color: "hsl(var(--navy))" }}>Cookies et outils tiers</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Ce site n'utilise pas de cookies de tracking, de publicité ou d'analytics. Aucun outil tiers de mesure
                d'audience n'est intégré (pas de Google Analytics, pas de Hotjar, etc.).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3" style={{ color: "hsl(var(--navy))" }}>Hébergement</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Ce site est hébergé par <strong>GitHub Pages</strong> (GitHub, Inc., 88 Colin P Kelly Jr St,
                San Francisco, CA 94107, USA). Les données transmises via le formulaire de contact transitent par des
                serveurs pouvant être situés aux États-Unis. GitHub Inc. est soumis au cadre du RGPD pour les
                utilisateurs européens.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3" style={{ color: "hsl(var(--navy))" }}>Vos droits (RGPD)</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679), vous disposez des droits suivants :
              </p>
              <ul className="mt-3 space-y-1.5 text-base text-muted-foreground list-disc list-inside leading-relaxed">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification des informations inexactes</li>
                <li>Droit à l'effacement ("droit à l'oubli")</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit d'opposition au traitement</li>
                <li>Droit à la portabilité des données</li>
              </ul>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                Pour exercer ces droits, contactez-moi via le formulaire de contact du site ou à l'adresse email
                indiquée dans les mentions légales. Vous avez également le droit d'introduire une réclamation auprès de la{" "}
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: "hsl(var(--performance-blue))" }}
                >
                  CNIL
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

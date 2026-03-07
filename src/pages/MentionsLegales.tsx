import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function MentionsLegales() {
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
          Mentions légales
        </h1>
        <p className="text-sm text-muted-foreground mb-10">Dernière mise à jour : mars 2025</p>

        <div className="prose prose-slate max-w-none space-y-10">
          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "hsl(var(--navy))" }}>Éditeur du site</h2>
            <div className="text-base text-muted-foreground leading-relaxed space-y-1">
              <p><strong className="text-foreground">Nom :</strong> Yann Pham-Van</p>
              <p><strong className="text-foreground">Activité :</strong> Data Scientist Freelance</p>
              <p><strong className="text-foreground">Contact :</strong> Via le formulaire de contact disponible sur ce site</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "hsl(var(--navy))" }}>Hébergement</h2>
            <div className="text-base text-muted-foreground leading-relaxed space-y-1">
              <p><strong className="text-foreground">Hébergeur :</strong> Lovable / GitHub Pages</p>
              <p><strong className="text-foreground">Société :</strong> GitHub, Inc.</p>
              <p><strong className="text-foreground">Adresse :</strong> 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA</p>
              <p><strong className="text-foreground">Site :</strong>{" "}
                <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer" className="underline">
                  pages.github.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "hsl(var(--navy))" }}>Propriété intellectuelle</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              L'ensemble du contenu de ce site (textes, images, structure) est la propriété exclusive de Yann Pham-Van.
              Toute reproduction, même partielle, est interdite sans autorisation préalable et écrite.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "hsl(var(--navy))" }}>Responsabilité</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Les informations présentes sur ce site sont fournies à titre indicatif. Yann Pham-Van s'efforce de maintenir
              ces informations à jour mais ne saurait être tenu responsable des éventuelles inexactitudes ou omissions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

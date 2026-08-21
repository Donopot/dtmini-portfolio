import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/legal/privacy" },
  title: "Mentions légales & Politique de confidentialité",
  description:
    "Mentions légales et politique de confidentialité du site portfolio de Donovan Beaulavon (dtmini.com). Conformité RGPD.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-extrabold sm:text-4xl">
          Mentions légales & Politique de confidentialité
        </h1>
        <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
          Dernière mise à jour : août 2026
        </p>

        <div className="mt-10 space-y-10 text-sm leading-relaxed">
          {/* Éditeur */}
          <section>
            <h2 className="text-xl font-bold">1. Éditeur du site</h2>
            <div className="mt-3 space-y-1">
              <p>
                <strong>Donovan Beaulavon</strong>
              </p>
              <p>Entrepreneur individuel</p>
              <p>Email : donovan@dtmini.com</p>
              <p>Site web : dtmini.com</p>
              <p>Hébergement : serveur auto-hébergé (France), déployé via Docker.</p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-xl font-bold">2. Propriété intellectuelle</h2>
            <p className="mt-3">
              L&apos;ensemble du contenu de ce site (textes, images, code source, design)
              est la propriété exclusive de Donovan Beaulavon, sauf mention contraire.
              Toute reproduction, distribution ou utilisation sans autorisation est interdite.
            </p>
            <p className="mt-2">
              Les projets open-source mentionnés sur ce site sont disponibles sur GitHub
              sous leurs licences respectives (MIT, Apache 2.0).
            </p>
          </section>

          {/* Données personnelles */}
          <section>
            <h2 className="text-xl font-bold">
              3. Collecte des données personnelles
            </h2>
            <p className="mt-3">
              Conformément au Règlement Général sur la Protection des Données (RGPD),
              les informations collectées via le formulaire de contact (nom, entreprise,
              email, type de demande, message, consentement) sont strictement utilisées
              pour répondre à votre demande. L&apos;envoi est traité via un service
              d&apos;emailing (Resend).
            </p>
            <p className="mt-2">
              Aucune adresse IP n&apos;est stockée ni journalisée. À des fins de protection
              contre les abus, l&apos;adresse IP peut être utilisée temporairement sous une
              forme pseudonymisée (empreinte non réversible) pour limiter le nombre de
              soumissions, puis écartée. Ce site ne collecte aucune donnée de navigation
              ni statistique nominative.
            </p>
            <h3 className="mt-4 font-semibold">Finalités :</h3>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Répondre aux demandes de contact</li>
              <li>Échanger sur vos projets d&apos;automatisation, développement ou IA</li>
            </ul>
            <h3 className="mt-4 font-semibold">Durée de conservation :</h3>
            <p className="mt-2">
              Les données sont conservées pendant une durée maximale de 2 ans après le
              dernier échange, sauf demande de suppression anticipée.
            </p>
          </section>

          {/* Vos droits */}
          <section>
            <h2 className="text-xl font-bold">4. Vos droits</h2>
            <p className="mt-3">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li><strong>Droit d&apos;accès</strong> : obtenir une copie de vos données</li>
              <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
              <li><strong>Droit à l&apos;effacement</strong> : demander la suppression de vos données</li>
              <li><strong>Droit d&apos;opposition</strong> : vous opposer au traitement de vos données</li>
              <li><strong>Droit à la portabilité</strong> : récupérer vos données dans un format structuré</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-moi à :{" "}
              <a
                href="mailto:donovan@dtmini.com"
                className="underline hover:opacity-70"
                style={{ color: "var(--accent-strong)" }}
              >
                donovan@dtmini.com
              </a>
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl font-bold">5. Cookies</h2>
            <p className="mt-3">
              Ce site n&apos;utilise <strong>aucun cookie de tracking</strong> ou de
              publicité. Seuls des cookies techniques essentiels au fonctionnement du
              site peuvent être déposés (session, préférences de langue).
            </p>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="text-xl font-bold">6. Limitation de responsabilité</h2>
            <p className="mt-3">
              Les informations présentes sur ce site sont fournies à titre indicatif.
              Je m&apos;efforce de les maintenir à jour mais ne peux garantir leur
              exactitude absolue. Les liens externes (GitHub, LinkedIn) sont fournis
              pour référence, je ne suis pas responsable de leur contenu.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-bold">7. Contact</h2>
            <p className="mt-3">
              Pour toute question relative à ces mentions légales ou à la protection
              de vos données :{" "}
              <a
                href="mailto:donovan@dtmini.com"
                className="underline hover:opacity-70"
                style={{ color: "var(--accent-strong)" }}
              >
                donovan@dtmini.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="text-sm underline hover:opacity-70"
            style={{ color: "var(--accent-strong)" }}
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/temoignages" },
  robots: { index: false, follow: true },
  title: "Témoignages",
  description:
    "Ce que disent mes collaborateurs et clients sur mon travail en automatisation, déploiement et IA.",
  openGraph: {
    title: "Témoignages — Donovan Beaulavon",
    description: "Retours de collaborateurs et clients.",
  },
};

export default function TemoignagesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-[48rem] mx-auto">
        <span
          className="text-xs font-semibold uppercase tracking-[0.15em] mb-3 block"
          style={{ color: "var(--accent-strong)" }}
        >
          Témoignages
        </span>
        <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4 dark:font-mono transition-colors">
          Ce qu&apos;ils disent
        </h1>
        <p
          className="text-lg mb-12 leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          Des retours de collaborateurs avec qui j&apos;ai travaillé sur des
          projets d&apos;automatisation, de déploiement et d&apos;IA.
        </p>

        {/* pendingValidation — témoignages masqués tant que l'identité et
            l'autorisation des auteurs ne sont pas confirmées. */}
        <div
          className="rounded-2xl p-8 border text-center"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Les témoignages sont actuellement en cours de vérification
            (confirmation de l&apos;identité et de l&apos;autorisation des
            auteurs). Ils seront publiés prochainement.
          </p>
        </div>

        <div className="mt-16 text-center">
          <p
            className="text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            Vous avez travaillé avec moi ?{" "}
            <a
              href="mailto:donovan@dtmini.com"
              className="underline font-medium hover:opacity-70"
              style={{ color: "var(--accent-strong)" }}
            >
              Envoyez-moi votre témoignage
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

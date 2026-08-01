import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Témoignages — Donovan Beaulavon",
  description:
    "Ce que disent mes collaborateurs et clients sur mon travail en automatisation, déploiement et IA.",
  openGraph: {
    title: "Témoignages — Donovan Beaulavon",
    description: "Retours de collaborateurs et clients.",
  },
};

const testimonials = [
  {
    quote:
      "Donovan a transformé notre façon de travailler. En 6 mois, il a automatisé des processus qui prenaient des heures chaque semaine. Résultat : 73% de tâches manuelles en moins, et une équipe qui peut enfin se concentrer sur l'essentiel.",
    author: "Responsable Équipe Partenariats",
    company: "ChangeNOW",
    context: "Pipeline d'automatisation Airtable → Make → API",
  },
  {
    quote:
      "J'ai rarement vu quelqu'un d'aussi polyvalent. Il comprend les besoins métier, conçoit la solution technique, et la déploie lui-même. Du tableur au dashboard en production, tout est documenté et maintenable.",
    author: "Directeur Technique",
    company: "ChangeNOW",
    context: "Standardisation des processus data",
  },
  {
    quote:
      "Un vrai couteau suisse. Donovan a déployé notre infrastructure complète — Docker, reverse proxy, CI/CD — en une semaine. Depuis, zéro incident. Il documente tout, ce qui est rare.",
    author: "Lead Developer",
    company: "Projet SaaS DnD",
    context: "Déploiement full-stack Docker + Caddy",
  },
];

export default function TemoignagesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-[48rem] mx-auto">
        <span
          className="text-xs font-semibold uppercase tracking-[0.15em] mb-3 block"
          style={{ color: "var(--color-light-accent)" }}
        >
          Témoignages
        </span>
        <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4 dark:font-mono transition-colors">
          Ce qu&apos;ils disent
        </h1>
        <p
          className="text-lg mb-12 leading-relaxed"
          style={{ color: "var(--color-light-text-secondary)" }}
        >
          Des retours de collaborateurs avec qui j&apos;ai travaillé sur des
          projets d&apos;automatisation, de déploiement et d&apos;IA.
        </p>

        <div className="space-y-8">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="rounded-2xl p-8 border relative"
              style={{
                backgroundColor: "var(--color-light-card)",
                borderColor: "var(--color-light-border)",
              }}
            >
              {/* Quote mark */}
              <span
                className="absolute -top-4 -left-2 text-6xl leading-none font-serif select-none"
                style={{ color: "var(--color-light-accent)", opacity: 0.3 }}
              >
                &ldquo;
              </span>

              <p
                className="text-base leading-relaxed mb-6 italic relative z-10"
                style={{ color: "var(--color-light-text)" }}
              >
                {t.quote}
              </p>

              <footer className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{
                    backgroundColor: "var(--color-light-accent)",
                    color: "#fff",
                  }}
                >
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.author}</p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--color-light-text-secondary)" }}
                  >
                    {t.company} — {t.context}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p
            className="text-sm"
            style={{ color: "var(--color-light-text-secondary)" }}
          >
            Vous avez travaillé avec moi ?{" "}
            <a
              href="mailto:donovan@dtmini.com"
              className="underline font-medium hover:opacity-70"
              style={{ color: "var(--color-light-accent)" }}
            >
              Envoyez-moi votre témoignage
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { testimonials } from "@/data/content";

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

        <div className="space-y-8">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="rounded-2xl p-8 border relative"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <span
                className="absolute -top-4 -left-2 text-6xl leading-none font-serif select-none"
                style={{ color: "var(--accent-strong)", opacity: 0.3 }}
              >
                &ldquo;
              </span>

              <p
                className="text-base leading-relaxed mb-6 italic relative z-10"
                style={{ color: "var(--text)" }}
              >
                {t.quote}
              </p>

              <footer className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{
                    backgroundColor: "var(--accent-strong)",
                    color: "var(--background)",
                  }}
                >
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                    {t.author}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {t.company} — {t.context}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
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

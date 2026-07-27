import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/content";

export const metadata: Metadata = {
  title: "Projets — Donovan Beaulavon",
  description:
    "Pipeline d'automatisation, RAG documentaire, prévision énergétique, agents IA — découvrez mes réalisations techniques.",
  openGraph: {
    title: "Projets — Donovan Beaulavon",
    description: "Pipeline d'automatisation, RAG documentaire, agents IA.",
  },
};

export default function ProjetsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-[72rem] mx-auto">
        <span
          className="text-xs font-semibold uppercase tracking-[0.15em] mb-3 block"
          style={{ color: "var(--color-light-accent)" }}
        >
          Projets
        </span>
        <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4 dark:font-mono transition-colors">
          Sélection de travaux
        </h1>
        <p
          className="text-lg max-w-2xl mb-12 leading-relaxed"
          style={{ color: "var(--color-light-text-secondary)" }}
        >
          Chaque projet répond à un besoin concret identifié sur le terrain.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Link
              key={p.id}
              href={`/projets/${p.id}`}
              className="rounded-2xl p-6 border block no-underline transition-all duration-400 hover:-translate-y-1 group"
              style={{
                backgroundColor: "var(--color-light-card)",
                borderColor: "var(--color-light-border)",
              }}
            >
              <div
                className="h-32 rounded-xl mb-4 flex items-center justify-center font-mono text-3xl"
                style={{
                  backgroundColor: "var(--color-light-bg-alt)",
                  color: "var(--color-light-accent)",
                }}
              >
                {p.tags[0] === "Python" ? "🐍" : p.tags[0] === "LangChain" ? "🧠" : p.tags[0] === "Next.js" ? "▲" : "⚡"}
              </div>
              <h2 className="font-display dark:font-mono text-lg font-bold mb-2 group-hover:opacity-70 transition-opacity">
                {p.name}
              </h2>
              <p
                className="text-sm leading-relaxed mb-3"
                style={{ color: "var(--color-light-text-secondary)" }}
              >
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-xs font-medium border"
                    style={{
                      borderColor: "var(--color-light-border)",
                      color: "var(--color-light-text-secondary)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

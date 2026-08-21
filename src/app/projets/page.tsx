import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/content";

export const metadata: Metadata = {
  alternates: { canonical: "/projets" },
  title: "Projets",
  description:
    "Pipeline d'automatisation, RAG documentaire, prévision énergétique, agents IA — découvrez mes réalisations techniques.",
  openGraph: {
    title: "Projets — Donovan Beaulavon",
    description: "Pipeline d'automatisation, RAG documentaire, agents IA.",
  },
};

const emojiMap: Record<string, string> = {
  Python: "🐍",
  LangChain: "🧠",
  "Next.js": "▲",
  Docker: "🐳",
  Discord: "💬",
  TypeScript: "🔷",
};

function getEmoji(tags: string[]): string {
  for (const t of tags) {
    if (emojiMap[t]) return emojiMap[t];
  }
  return "⚡";
}

export default function ProjetsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-[72rem] mx-auto">
        <span
          className="text-xs font-semibold uppercase tracking-[0.15em] mb-3 block"
          style={{ color: "var(--accent-strong)" }}
        >
          Projets
        </span>
        <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4 dark:font-mono transition-colors">
          Sélection de travaux
        </h1>
        <p
          className="text-lg max-w-2xl mb-12 leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          Chaque projet répond à un besoin concret, du prototype au déploiement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl p-6 border transition-all duration-400 hover:-translate-y-1 group flex flex-col"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              {/* Icon */}
              <div
                className="h-32 rounded-xl mb-4 flex items-center justify-center font-mono text-3xl"
                style={{
                  backgroundColor: "var(--background-alt)",
                  color: "var(--accent-strong)",
                }}
              >
                {getEmoji(p.tags)}
              </div>

              {/* Title + Category */}
              <span
                className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] mb-1"
                style={{ color: "var(--accent-strong)" }}
              >
                {p.category}
              </span>
              <h2 className="font-display dark:font-mono text-lg font-bold mb-2">
                {p.slug ? (
                  <Link
                    href={`/projets/${p.slug}`}
                    className="transition-colors hover:opacity-70"
                  >
                    {p.name}
                  </Link>
                ) : (
                  p.name
                )}
              </h2>

              {/* Badge */}
              {p.badge && (
                <p
                  className="text-xs mb-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  {p.badge}
                </p>
              )}

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-4 flex-grow"
                style={{ color: "var(--text-muted)" }}
              >
                {p.description}
              </p>

              {/* Results */}
              {p.results && p.results.length > 0 && (
                <ul className="mb-4 space-y-1">
                  {p.results.map((r, i) => (
                    <li
                      key={i}
                      className="text-xs flex items-start gap-2"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span style={{ color: "var(--accent-strong)" }}>▸</span>
                      {r}
                    </li>
                  ))}
                </ul>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-xs font-medium border"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 mt-auto">
                {p.slug && (
                  <Link
                    href={`/projets/${p.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
                    style={{ color: "var(--accent-strong)" }}
                  >
                    Voir le détail →
                  </Link>
                )}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
                    style={{ color: "var(--text-muted)" }}
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

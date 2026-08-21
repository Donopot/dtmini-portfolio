import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/projets/rag-documentaire" },
  robots: { index: false, follow: true },
  title: "RAG documentaire multi-sources",
  description:
    "Contribution sur un fork open source : moteur de recherche documentaire combinant recherche lexicale, recherche vectorielle et reranking.",
};

export default function RagDocumentairePage() {
  return (
    <main className="min-h-screen">
      <article className="mx-auto max-w-4xl px-6 py-12 sm:py-20">
        <Link
          href="/projets"
          className="text-sm underline hover:opacity-70"
          style={{ color: "var(--accent-strong)" }}
        >
          ← Retour aux projets
        </Link>

        <header className="mt-6">
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              backgroundColor: "var(--background-alt)",
              color: "var(--accent-strong)",
            }}
          >
            Contribution open source
          </span>
          <h1
            className="mt-4 font-display dark:font-mono text-3xl font-bold sm:text-5xl"
          >
            RAG documentaire multi-sources
          </h1>
          <p
            className="mt-3 text-lg leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Contribution à un moteur de recherche documentaire combinant
            recherche lexicale, recherche vectorielle et reranking.
          </p>
        </header>

        {/* Contexte */}
        <Section title="Contexte">
          <p>
            Contribution sur un <strong>fork open source</strong> d&apos;un système
            de recherche documentaire basé sur le paradigme RAG
            (Retrieval-Augmented Generation). Le périmètre présenté ici se
            limite aux contributions confirmées par les commits du dépôt.
          </p>
        </Section>

        {/* Problème */}
        <Section title="Problème">
          <p>
            Améliorer la pertinence d&apos;un moteur de recherche documentaire :
            une recherche purement vectorielle ou purement lexicale a des
            limites. Combiner les deux approches et réordonner les résultats
            permet de retrouver les passages réellement pertinents dans un grand
            corpus.
          </p>
        </Section>

        {/* Rôle */}
        <Section title="Rôle exact">
          <p>
            Contributeur sur un fork open source. Contributions apportées :
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>Recherche hybride BM25 + dense</li>
            <li>Fusion RRF (Reciprocal Rank Fusion)</li>
            <li>Reranking des résultats</li>
            <li>Cache Streamlit</li>
            <li>Amélioration de l&apos;interface conversationnelle</li>
          </ul>
        </Section>

        {/* Solution */}
        <Section title="Solution">
          <p>
            Un pipeline RAG combinant une base vectorielle, une recherche
            lexicale, une fusion hybride et une étape de reranking, exposé à
            travers une interface de chat en langage naturel avec réponses
            sourcées.
          </p>
        </Section>

        {/* Fonctionnalités */}
        <Section title="Fonctionnalités vérifiées">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Ingestion de documents (parquet) et indexation vectorielle</li>
            <li>Recherche hybride : BM25 (lexicale) + dense (vectorielle)</li>
            <li>Fusion RRF et reranking des résultats</li>
            <li>Interface conversationnelle Streamlit</li>
          </ul>
        </Section>

        {/* Stack */}
        <Section title="Stack réelle">
          <div className="flex flex-wrap gap-2">
            {[
              "Python",
              "LangChain",
              "ChromaDB",
              "Streamlit",
              "Ollama",
              "Groq / OpenRouter",
              "sentence-transformers (BGE)",
              "rank_bm25",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border px-3 py-1 text-xs font-medium"
                style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </Section>

        {/* Résultat observable */}
        <Section title="Résultat observable">
          <p>
            Un moteur de recherche documentaire fonctionnel, avec une recherche
            hybride et un reranking qui améliorent la pertinence des réponses,
            consultable dans le dépôt public.
          </p>
        </Section>

        {/* Limites & statut */}
        <Section title="Limites & statut">
          <p>
            Il s&apos;agit d&apos;une <strong>contribution sur un fork</strong> : le
            socle du projet n&apos;a pas été développé par Donovan. Aucune
            métrique de performance n&apos;est publiée, car aucune n&apos;a été mesurée
            de façon reproductible. Le sujet du corpus original étant sensible,
            aucune capture issue de données réelles n&apos;est affichée.
          </p>
        </Section>

        {/* CTA */}
        <Cta
          text="Un corpus de documents à explorer ou un assistant IA documentaire à construire ?"
          href="/contact"
          label="Discuter de mon besoin"
        />
      </article>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2
        className="text-xl font-bold"
        style={{ color: "var(--text)" }}
      >
        {title}
      </h2>
      <div
        className="mt-3 leading-relaxed"
        style={{ color: "var(--text-muted)" }}
      >
        {children}
      </div>
    </section>
  );
}

function Cta({
  text,
  href,
  label,
}: {
  text: string;
  href: string;
  label: string;
}) {
  return (
    <div
      className="mt-12 rounded-2xl border p-8 text-center"
      style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
    >
      <p className="text-lg font-semibold">{text}</p>
      <Link
        href={href}
        className="mt-5 inline-block rounded-full px-8 py-3 text-sm font-semibold transition hover:opacity-90"
        style={{ backgroundColor: "var(--cta-bg)", color: "var(--cta-text)" }}
      >
        {label}
      </Link>
    </div>
  );
}

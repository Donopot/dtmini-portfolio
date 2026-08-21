import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/projets/prevision-energetique" },
  robots: { index: false, follow: true },
  title: "Analyse et prévision de la consommation énergétique",
  description:
    "Projet d'étude DataScientest / Mines PSL (2023–2024) : exploration de données énergétiques françaises et comparaison de modèles de prévision (SARIMA, XGBoost).",
};

export default function PrevisionEnergetiquePage() {
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
            Projet d&apos;étude · DataScientest / Mines PSL · 2023–2024
          </span>
          <h1
            className="mt-4 font-display dark:font-mono text-3xl font-bold sm:text-5xl"
          >
            Analyse et prévision de la consommation énergétique
          </h1>
          <p
            className="mt-3 text-lg leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Projet d&apos;étude terminé, réalisé sous forme de notebooks Jupyter.
          </p>
        </header>

        {/* Contexte */}
        <Section title="Contexte">
          <p>
            Projet d&apos;étude réalisé dans le cadre de la formation DataScientest /
            Mines Paris – PSL (2023–2024). Objectif : analyser et prévoir la
            consommation énergétique française à partir de données publiques.
          </p>
        </Section>

        {/* Problème */}
        <Section title="Problème">
          <p>
            Comprendre les dynamiques de la consommation énergétique française :
            quels facteurs l&apos;influencent (température, saisonnalité), et comment
            la modéliser pour anticiper les évolutions.
          </p>
        </Section>

        {/* Rôle */}
        <Section title="Rôle exact">
          <p>
            Réalisation complète du projet d&apos;étude : collecte et préparation des
            données, analyse exploratoire, modélisation et interprétation des
            résultats.
          </p>
        </Section>

        {/* Solution / méthode */}
        <Section title="Solution">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Exploration de données énergétiques françaises</li>
            <li>Préparation et analyse de données publiques</li>
            <li>Étude des corrélations entre température, consommation et saisonnalité</li>
            <li>Comparaison de modèles de régression et de séries temporelles</li>
            <li>Utilisation de SARIMA et XGBoost</li>
            <li>Réalisation sous forme de notebooks Jupyter</li>
          </ul>
        </Section>

        {/* Fonctionnalités / livrables */}
        <Section title="Livrables vérifiés">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Notebooks Jupyter reproductibles (versions itératives)</li>
            <li>Analyse de corrélation (matrice, heatmap)</li>
            <li>Modélisation séries temporelles et régressions</li>
            <li>Données sources : RTE Eco2mix, Visual Crossing</li>
          </ul>
        </Section>

        {/* Stack */}
        <Section title="Stack réelle">
          <div className="flex flex-wrap gap-2">
            {[
              "Python",
              "Pandas",
              "Scikit-learn",
              "XGBoost",
              "SARIMA",
              "Jupyter",
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
            Une analyse documentée des corrélations température / consommation et
            une comparaison de plusieurs approches de prévision, consultables
            dans le dépôt public. Les graphiques produits (évolution et
            saisonnalité de la consommation, corrélation température/consommation,
            comparaison valeurs réelles / prévisions, heatmaps) proviennent du
            projet d&apos;étude.
          </p>
        </Section>

        {/* Limites & statut */}
        <Section title="Limites & statut">
          <p>
            Statut : <strong>projet d&apos;étude terminé</strong>. Ce n&apos;est ni un
            produit en production, ni une application déployée. Aucune métrique
            de performance n&apos;est mise en avant : seuls les résultats
            reproductibles depuis les notebooks sont présentés.
          </p>
        </Section>

        {/* CTA */}
        <Cta
          text="Un besoin d'analyse de données ou de modélisation sur mesure ?"
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

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/projets/automatisation-operations" },
  robots: { index: true, follow: true },
  title: "Structuration et automatisation d'opérations événementielles",
  description:
    "Expérience interne réalisée chez ChangeNOW dans le cadre d'un poste de Tool & IT Coordinator : structuration de données, automatisation de tâches répétitives et création d'outils internes.",
};

export default function AutomatisationOperationsPage() {
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
            Expérience interne
          </span>
          <h1
            className="mt-4 font-display dark:font-mono text-3xl font-bold sm:text-5xl"
          >
            Structuration et automatisation d&apos;opérations événementielles
          </h1>
          <p
            className="mt-3 text-lg leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Expérience interne réalisée chez ChangeNOW dans le cadre de mon poste
            de Tool &amp; IT Coordinator.
          </p>
        </header>

        {/* 1. Contexte général */}
        <Section title="Contexte général">
          <p>
            Dans le cadre d&apos;un poste interne de Tool &amp; IT Coordinator, j&apos;ai
            accompagné les équipes opérationnelles d&apos;une organisation
            événementielle sur la structuration de leurs données et
            l&apos;automatisation de leurs processus récurrents.
          </p>
        </Section>

        {/* 2. Problèmes rencontrés */}
        <Section title="Problèmes rencontrés par les équipes">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Données dispersées entre plusieurs outils et fichiers</li>
            <li>Doubles saisies et ressaisies manuelles sources d&apos;erreurs</li>
            <li>Tâches répétitives qui mobilisaient du temps sans valeur ajoutée</li>
            <li>Processus peu documentés, difficiles à transmettre</li>
          </ul>
        </Section>

        {/* 3. Responsabilité exacte */}
        <Section title="Responsabilité exacte">
          <p>
            Identification des besoins, structuration et synchronisation des
            données, automatisation des tâches répétitives et création
            d&apos;outils internes. Cette expérience a été réalisée en tant
            qu&apos;employé, dans le périmètre de mon poste — et non en tant que
            mission freelance.
          </p>
        </Section>

        {/* 4. Types de processus */}
        <Section title="Types de processus structurés ou automatisés">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Structuration et synchronisation de données entre équipes</li>
            <li>Automatisation de tâches répétitives</li>
            <li>Création d&apos;outils internes de suivi et de pilotage</li>
            <li>Documentation et transmission des processus</li>
          </ul>
        </Section>

        {/* 5. Méthode employée */}
        <Section title="Méthode employée">
          <p>
            Une approche pragmatique : cartographier le flux de données, repérer
            les goulots d&apos;étranglement, prototyper rapidement, puis stabiliser
            et documenter la solution pour qu&apos;elle reste maintenable par
            l&apos;équipe.
          </p>
        </Section>

        {/* 6. Livrables factuels */}
        <Section title="Livrables factuels">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Processus structurés et synchronisés</li>
            <li>Automatisations opérationnelles en place</li>
            <li>Outils internes utilisés par les équipes</li>
            <li>Documentation des processus</li>
          </ul>
        </Section>

        {/* 7. Accompagnement et transmission */}
        <Section title="Accompagnement et transmission aux équipes">
          <p>
            Formation et accompagnement des équipes pour qu&apos;elles soient
            autonomes dans l&apos;utilisation des outils mis en place, avec une
            documentation claire et transmissible.
          </p>
        </Section>

        {/* 8. Limites liées à la confidentialité */}
        <Section title="Limites liées à la confidentialité">
          <p>
            Cette réalisation est présentée sans chiffre, sans capture interne
            et sans détail opérationnel, afin de respecter la confidentialité de
            l&apos;organisation. Le nom « ChangeNOW » est cité uniquement comme
            employeur et contexte d&apos;expérience professionnelle interne.
          </p>
        </Section>

        {/* 9. CTA */}
        <Cta
          text="Un processus à automatiser ou des données à structurer ?"
          href="/contact"
          label="Parler de mon besoin"
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

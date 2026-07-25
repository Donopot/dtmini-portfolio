import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos — Donovan Beaulavon",
  description:
    "De l'école de commerce au développement full-stack et à l'IA agentique : le parcours atypique de Donovan Beaulavon, passionné par l'automatisation et la tech.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 to-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
            À propos de moi
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Le parcours d&apos;un passionné qui a transformé sa curiosité tech
            en expertise professionnelle.
          </p>
        </div>
      </section>

      {/* Photo + Bio */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
            {/* Photo placeholder */}
            <div className="flex h-48 w-48 flex-shrink-0 items-center justify-center rounded-2xl bg-gray-200 text-sm text-gray-400">
              [Photo Donovan Beaulavon]
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Donovan Beaulavon
              </h2>
              <p className="mt-1 text-brand-700 font-medium">
                Automatisation & IA · Full-stack & IA agentique
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Paris, France · Disponible en freelance ou CDI
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://github.com/Donopot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-gray-700"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/donovan-beaulavon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-gray-300 px-4 py-2 text-xs font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narration */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900">Mon parcours</h2>
          <div className="mt-6 space-y-6 text-gray-700 leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-brand-700">
                🎓 Du commerce à la data
              </h3>
              <p className="mt-2 text-sm">
                Mon parcours commence dans une école de commerce. Très vite, je réalise
                que la donnée est partout et que ceux qui savent l&apos;exploiter prennent
                une longueur d&apos;avance. Je me forme à l&apos;analyse de données : Excel
                avancé, SQL, puis Python. Ma première alternance chez ChangeNOW me permet
                de mettre ces compétences en pratique sur des problématiques réelles.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brand-700">
                ⚙️ La révélation no-code et automatisation
              </h3>
              <p className="mt-2 text-sm">
                Chez ChangeNOW, je découvre la puissance des outils no-code : Airtable,
                Zapier, puis n8n. Je passe de l&apos;analyse de données à la
                <strong> construction de systèmes</strong>. J&apos;automatise des dizaines
                de processus, je connecte des APIs, je construis des dashboards. Je deviens
                le référent automatisation de l&apos;entreprise.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brand-700">
                💻 Le saut vers le full-stack
              </h3>
              <p className="mt-2 text-sm">
                Les limites du no-code me poussent à apprendre le développement web.
                Je plonge dans React, Next.js, TypeScript, FastAPI. Je construis mes
                premiers projets full-stack : un SaaS de génération de contenu, un
                moteur de recherche documentaire RAG. Le code devient mon outil principal.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brand-700">
                🤖 L&apos;IA agentique, la nouvelle frontière
              </h3>
              <p className="mt-2 text-sm">
                Aujourd&apos;hui, je combine mes deux expertises : le développement
                full-stack et l&apos;IA. Je construis des systèmes agentiques capables
                de raisonner, de chercher, d&apos;agir. Des chatbots RAG aux assistants
                autonomes, je crée les outils de demain. Mon objectif : rendre l&apos;IA
                utile, concrète et accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900">Ce qui me motive</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                emoji: "🎯",
                title: "Impact concret",
                desc: "Je construis des solutions qui font gagner du temps et de l'argent, pas des POC qui finissent dans un tiroir.",
              },
              {
                emoji: "🧠",
                title: "Apprentissage continu",
                desc: "La tech évolue vite. Je passe mes soirées à explorer de nouveaux paradigmes : agents, RAG, fine-tuning.",
              },
              {
                emoji: "🤝",
                title: "Transmission",
                desc: "J'aime former les équipes, vulgariser les concepts complexes et rendre l'IA accessible à tous.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center"
              >
                <div className="text-3xl">{v.emoji}</div>
                <h3 className="mt-3 font-semibold text-gray-900">{v.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-700 px-6 py-16 text-center text-white">
        <h2 className="text-2xl font-bold sm:text-3xl">Travaillons ensemble</h2>
        <p className="mx-auto mt-2 max-w-lg text-brand-100">
          Vous avez un projet d&apos;automatisation, de développement ou d&apos;IA ?
          Parlons-en.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-brand-700 transition hover:bg-gray-100"
          >
            Me contacter
          </Link>
          <Link
            href="/"
            className="rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            Accueil
          </Link>
        </div>
      </section>

      <div className="text-center pb-8">
        <Link href="/" className="text-sm text-gray-500 hover:text-brand-600 underline">
          ← Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}

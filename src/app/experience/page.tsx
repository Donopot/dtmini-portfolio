import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Expérience — Donovan Beaulavon",
  description:
    "Parcours professionnel : 3 ans chez ChangeNOW (alternance Data & Automatisation puis CDD Chargé de projet IA). Formation en commerce, data et développement.",
};

interface Experience {
  period: string;
  title: string;
  company: string;
  type: "Alternance" | "CDD" | "Formation";
  description: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    period: "Octobre 2023 – Décembre 2025",
    title: "Chargé de projet IA & Automatisation",
    company: "ChangeNOW",
    type: "CDD",
    description: [
      "Pilotage de la stratégie d'automatisation interne : identification des processus à fort ROI, conception de workflows n8n et Zapier couvrant les ventes, les opérations et les RH.",
      "Déploiement d'un assistant IA documentaire (RAG) réduisant le temps d'onboarding de 2 semaines à 3 jours.",
      "Création d'un pipeline de qualification des leads (n8n + OpenAI + Airtable) réduisant le temps de traitement de 15h à 2h/semaine.",
      "Mise en place de dashboards temps réel pour le CODIR via Airtable Interfaces et scripts Python.",
      "Formation des équipes (20+ collaborateurs) aux outils no-code et à l'utilisation des assistants IA.",
    ],
    skills: ["n8n", "Zapier", "Make", "Python", "OpenAI API", "Airtable", "RAG", "LangChain"],
  },
  {
    period: "Septembre 2021 – Août 2023",
    title: "Alternance Data & Automatisation",
    company: "ChangeNOW",
    type: "Alternance",
    description: [
      "Automatisation des processus CRM : synchronisation HubSpot ↔ Airtable, relances automatiques, scoring des partenaires.",
      "Création de dashboards de suivi pour les équipes partenariats et programmation.",
      "Développement de scripts Python pour le nettoyage et l'enrichissement de bases de données.",
      "Gestion du pipeline de données événementielles : collecte, validation, reporting.",
      "Support technique aux équipes sur les outils internes (Airtable, Notion, Zapier).",
    ],
    skills: ["Python", "Airtable", "Zapier", "HubSpot", "Notion", "Google Sheets"],
  },
];

const formations = [
  {
    period: "2021 – 2023",
    title: "Master Management & Data",
    school: "École de commerce & management",
    description:
      "Double compétence commerce/data : analyse de données, gestion de projet, automatisation des processus métier.",
  },
  {
    period: "2019 – 2021",
    title: "Bachelor Commerce & Entrepreneuriat",
    school: "École de commerce",
    description:
      "Fondamentaux du commerce, marketing digital, entrepreneuriat — stage en startup.",
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 to-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Mon expérience
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            3 ans à transformer les processus chez ChangeNOW, le sommet mondial
            de l&apos;innovation pour la planète.
          </p>
        </div>
      </section>

      {/* Expériences */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">ChangeNOW</h2>
          <p className="mt-1 text-sm text-gray-500">
            Sommet international — 30 000+ participants — Paris
          </p>

          <div className="relative mt-10 border-l-2 border-brand-200 pl-8 ml-4">
            {experiences.map((exp, i) => (
              <div key={i} className="mb-12 last:mb-0">
                <div className="absolute -left-[37px] flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-white text-xs font-bold ring-4 ring-white">
                  {i + 1}
                </div>
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                  {exp.period}
                </span>
                <h3 className="mt-1 text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                <p className="text-sm text-gray-500">
                  {exp.company} ·{" "}
                  <span
                    className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${
                      exp.type === "CDD"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {exp.type}
                  </span>
                </p>

                <ul className="mt-4 space-y-2">
                  {exp.description.map((desc, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-200">{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formations */}
      <section className="bg-gray-50 dark:bg-gray-800 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Formation</h2>
          <div className="mt-8 space-y-8">
            {formations.map((f, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-white dark:bg-gray-900 p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                  {f.period}
                </span>
                <h3 className="mt-1 font-bold text-gray-900 dark:text-white">{f.title}</h3>
                <p className="text-sm text-gray-500">{f.school}</p>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 text-center">
        <Link
          href="/about"
          className="rounded-full bg-brand-700 px-8 py-3 text-sm font-semibold text-white shadow transition hover:bg-brand-700"
        >
          En savoir plus sur mon parcours
        </Link>
      </section>

      <div className="text-center pb-8">
        <Link href="/" className="text-sm text-gray-500 hover:text-brand-700 underline">
          ← Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}

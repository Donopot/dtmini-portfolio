import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CV Automatisation & IA — Donovan Beaulavon",
  description:
    "Aperçu du CV de Donovan Beaulavon orienté Automatisation & IA métier. Workflows n8n/Zapier, intégrations API, RAG, Python.",
};

export default function CvAutomationPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        {/* CV Header */}
        <div className="rounded-2xl bg-white dark:bg-gray-900 p-8 shadow-sm sm:p-12">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">Donovan Beaulavon</h1>
          <p className="mt-2 text-lg font-semibold text-brand-700">
            Automatisation & IA métier
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
            <span>📍 Paris, France</span>
            <span>📧 donovan@dtmini.com</span>
            <span>🔗 dtmini.com</span>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* Résumé */}
          <section>
            <h2 className="text-lg font-bold uppercase tracking-wide text-gray-800 dark:text-gray-100">
              Résumé
            </h2>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
              Expert en automatisation des processus métier avec 3 ans d&apos;expérience
              chez ChangeNOW. Spécialisé dans la conception de workflows intelligents
              (n8n, Zapier, Make), l&apos;intégration d&apos;IA générative (LLM, RAG) et
              l&apos;optimisation des opérations. 50+ workflows déployés, 500+ heures
              économisées par an.
            </p>
          </section>

          {/* Compétences */}
          <section className="mt-8">
            <h2 className="text-lg font-bold uppercase tracking-wide text-gray-800 dark:text-gray-100">
              Compétences
            </h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                { cat: "Automatisation", items: "n8n, Zapier, Make, Airtable Automations" },
                { cat: "IA & LLM", items: "OpenAI API, RAG, LangChain, Prompt Engineering" },
                { cat: "Intégrations", items: "API REST, Webhooks, Slack, HubSpot, Notion" },
                { cat: "Analyse de données", items: "Python, Pandas, SQL, Airtable, Google Sheets" },
              ].map((s) => (
                <div key={s.cat}>
                  <h3 className="text-sm font-semibold text-brand-700">{s.cat}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300">{s.items}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Expérience */}
          <section className="mt-8">
            <h2 className="text-lg font-bold uppercase tracking-wide text-gray-800 dark:text-gray-100">
              Expérience
            </h2>
            <div className="mt-3 space-y-6">
              <div>
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Chargé de projet IA & Automatisation
                  </h3>
                  <span className="text-xs text-gray-500">2023 – 2025</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">ChangeNOW · CDD</p>
                <ul className="mt-1 list-disc pl-4 text-xs text-gray-700 dark:text-gray-200 space-y-0.5">
                  <li>Déploiement de 30+ workflows n8n/Zapier (ventes, ops, RH)</li>
                  <li>Assistant IA documentaire RAG réduisant l&apos;onboarding de 2 semaines à 3 jours</li>
                  <li>Pipeline de qualification des leads : 15h → 2h/semaine</li>
                  <li>Dashboards temps réel CODIR (Airtable + Python)</li>
                  <li>Formation de 20+ collaborateurs aux outils no-code</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Alternance Data & Automatisation
                  </h3>
                  <span className="text-xs text-gray-500">2021 – 2023</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">ChangeNOW · Alternance</p>
                <ul className="mt-1 list-disc pl-4 text-xs text-gray-700 dark:text-gray-200 space-y-0.5">
                  <li>Automatisation CRM (HubSpot ↔ Airtable)</li>
                  <li>Scripts Python pour nettoyage et enrichissement de données</li>
                  <li>Dashboards de suivi pour équipes partenariats</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Formation */}
          <section className="mt-8">
            <h2 className="text-lg font-bold uppercase tracking-wide text-gray-800 dark:text-gray-100">
              Formation
            </h2>
            <div className="mt-3 space-y-3">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Master Management & Data</h3>
                  <span className="text-xs text-gray-500">2021 – 2023</span>
                </div>
                <p className="text-xs text-gray-500">École de commerce & management</p>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Bachelor Commerce & Entrepreneuriat</h3>
                  <span className="text-xs text-gray-500">2019 – 2021</span>
                </div>
                <p className="text-xs text-gray-500">École de commerce</p>
              </div>
            </div>
          </section>

          {/* Langues */}
          <section className="mt-8">
            <h2 className="text-lg font-bold uppercase tracking-wide text-gray-800 dark:text-gray-100">
              Langues
            </h2>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">
              🇫🇷 Français (natif) · 🇬🇧 Anglais (professionnel)
            </p>
          </section>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/automation"
            className="rounded-full border border-gray-300 bg-white dark:bg-gray-900 px-6 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 transition hover:bg-gray-50 dark:bg-gray-800"
          >
            ← Parcours Automatisation
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-brand-700 px-6 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </main>
  );
}

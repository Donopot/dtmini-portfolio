import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export default function AutomatisationPage() {
  return (
    <div className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Automatisation de processus
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            J&apos;analyse vos processus existants, je connecte vos outils (Airtable, Make, n8n,
            Google Workspace) et j&apos;automatise les tâches répétitives sans perturber vos
            opérations.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Ce que je fais</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Cartographie et analyse des processus existants</li>
              <li>Connexion d&apos;outils via API, webhooks et scripts</li>
              <li>Workflows automatisés avec Make, n8n et Apps Script</li>
              <li>Documentation, tests et transfert aux équipes</li>
            </ul>
            <p>
              <Link href="/contact" className="text-brand-700 dark:text-brand-400 underline font-medium">
                Décrivez-moi votre besoin →
              </Link>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

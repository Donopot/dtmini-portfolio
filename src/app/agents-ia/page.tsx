import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/agents-ia" },
  title: "Agents IA & RAG",
  description:
    "Intégration d'IA : RAG documentaire, classification automatique, recherche sémantique et orchestration d'agents.",
};

export default function AgentsIAPage() {
  return (
    <div className="py-16 sm:py-20 bg-brand-50 dark:bg-brand-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-950 dark:text-brand-50 mb-6">
            Agents IA & RAG
          </h1>
          <p className="text-lg text-brand-700 dark:text-brand-500 leading-relaxed mb-8">
            J&apos;intègre l&apos;IA là où elle apporte une vraie valeur : extraction
            documentaire, classification automatique, recherche sémantique, synthèse et
            orchestration d&apos;agents.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-6 text-brand-700 dark:text-brand-500 leading-relaxed">
            <h2 className="text-xl font-semibold text-brand-950 dark:text-brand-50">Ce que je fais</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>RAG documentaire : recherche et réponse sur vos bases internes</li>
              <li>Transcription, classification et enrichissement automatique</li>
              <li>Agents IA avec outils, garde-fous et supervision humaine</li>
              <li>Prompts système, évaluation et itération</li>
              <li>LLMs locaux (Ollama) ou cloud (Groq, OpenRouter)</li>
            </ul>
            <p>
              <Link href="/contact" className="text-brand-700 dark:text-brand-400 underline font-medium">
                Discutons de votre projet IA →
              </Link>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

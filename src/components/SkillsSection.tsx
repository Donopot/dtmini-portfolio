"use client";

import AnimatedSection from "./AnimatedSection";

const skillGroups = [
  {
    title: "Automatisation & outils",
    skills: ["Airtable", "Make", "n8n", "Fillout", "Softr", "Notion", "Google Workspace", "API REST", "Webhooks", "Google Apps Script"],
  },
  {
    title: "Développement",
    skills: ["React", "TypeScript", "Vite", "Python", "FastAPI", "HTML", "CSS", "API REST", "WebSocket", "Streamlit"],
  },
  {
    title: "Data & infrastructure",
    skills: ["PostgreSQL", "Redis", "MinIO / S3", "Docker Compose", "Caddy", "Nginx", "Git", "CI/CD", "Pandas", "Power BI"],
  },
  {
    title: "IA & agents",
    skills: ["RAG", "Embeddings", "LangChain", "ChromaDB", "Ollama", "Groq", "OpenRouter", "Agents IA", "Prompts système"],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Compétences
          </h2>
          <p className="mt-3 text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Stack technique et outils maîtrisés, regroupés par domaine
          </p>
        </div>

        <AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-6">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 transition-all hover:border-brand-200 dark:hover:border-brand-800 hover:shadow-md"
              >
                <h3 className="text-sm font-semibold text-brand-700 dark:text-brand-400 mb-4 uppercase tracking-wider">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-lg bg-white dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-brand-300 dark:hover:border-brand-700 hover:text-brand-700 dark:hover:text-brand-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[calc(100vh-3.5rem)] items-center bg-gradient-to-br from-brand-50 via-white to-brand-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-700 mb-3">
            Donovan Beaulavon
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-950 dark:text-brand-50 max-w-3xl">
            Automatisation,{" "}
            <span className="text-brand-700">Full-stack &amp; IA</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-brand-700 dark:text-brand-400 leading-relaxed">
            J&apos;aide les entreprises à automatiser leurs processus métier, intégrer
            l&apos;IA et construire des applications full-stack modernes avec Python,
            React, FastAPI et les systèmes agentiques.
          </p>
        </div>
      </section>

      {/* Automatisation & IA */}
      <Section id="automatisation-ia" title="Automatisation & IA" className="bg-brand-100 dark:bg-brand-900">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <CaseStudyCard
            title="Extraction automatisée de données"
            contexte="Traitement manuel de 200+ documents par jour, erreurs fréquentes."
            intervention="Pipeline RAG avec OCR + LLM pour extraction structurée, déploiement API."
            resultat="Gain de 15h/semaine, taux d'erreur réduit de 98%."
          />
          <CaseStudyCard
            title="Chatbot support interne"
            contexte="Équipe support saturée, temps de réponse &gt; 4h."
            intervention="Agent conversationnel RAG sur base documentaire interne, intégration Slack."
            resultat="70% des tickets résolus en self-service, temps de réponse &lt; 5min."
          />
          <CaseStudyCard
            title="Workflow approbation factures"
            contexte="Circuit papier avec 4 niveaux de validation, délai moyen 8 jours."
            intervention="Automatisation n8n + webhooks, notifications email/Slack, dashboard."
            resultat="Délai réduit à 1,5 jours, visibilité temps réel."
          />
        </div>
      </Section>

      {/* Full-stack & IA */}
      <Section id="fullstack-ia" title="Full-stack & IA">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Dashboard Analytics"
            description="Dashboard temps réel pour le suivi des KPIs métier avec visualisations interactives."
            stack={["React", "FastAPI", "PostgreSQL", "WebSocket"]}
            githubUrl="#"
            demoUrl="#"
          />
          <ProjectCard
            title="API d'extraction documentaire"
            description="API REST documentée qui extrait et structure les données de PDFs, images et scans."
            stack={["FastAPI", "Tesseract", "OpenAI", "Docker"]}
            githubUrl="#"
          />
          <ProjectCard
            title="Plateforme e-learning IA"
            description="LMS avec génération automatique de quiz et feedback personnalisé par IA."
            stack={["Next.js", "Python", "LangChain", "MongoDB"]}
            githubUrl="#"
            demoUrl="#"
          />
        </div>
      </Section>

      {/* Projets */}
      <Section id="projets" title="Projets" className="bg-brand-100 dark:bg-brand-900">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Agent de veille automatisée"
            description="Agent IA qui surveille les sources, résume et classe l'information par pertinence."
            stack={["Python", "LangChain", "ChromaDB", "Slack API"]}
            githubUrl="#"
          />
          <ProjectCard
            title="Site e-commerce headless"
            description="Frontend Next.js connecté à une API headless avec recherche full-text."
            stack={["Next.js", "TypeScript", "Stripe", "Meilisearch"]}
            githubUrl="#"
            demoUrl="#"
          />
          <ProjectCard
            title="CLI de scaffolding de projet"
            description="Outil en ligne de commande pour générer des squelettes de projet standardisés."
            stack={["Python", "Click", "Jinja2", "Pydantic"]}
            githubUrl="#"
          />
        </div>
      </Section>

      {/* Expérience */}
      <Section id="experience" title="Expérience">
        <div className="space-y-10 max-w-3xl">
          {[
            {
              date: "2023 — Aujourd'hui",
              role: "Développeur Full-stack & IA freelance",
              company: "DTMini",
              description:
                "Conception et déploiement de solutions d'automatisation sur mesure : pipelines RAG, agents conversationnels, APIs documentaires, dashboards analytiques. Stack Python, React, FastAPI, LLMs.",
            },
            {
              date: "2021 — 2023",
              role: "Développeur Python / Automatisation",
              company: "Entreprise",
              description:
                "Automatisation de processus métier (ETL, reporting, notifications). Migration de batchs legacy vers des pipelines modernes. Mise en place de CI/CD.",
            },
            {
              date: "2019 — 2021",
              role: "Développeur Web Full-stack",
              company: "Agence web",
              description:
                "Développement d'applications web React et APIs Node.js/Python pour des clients PME. Intégration de paiements, authentification, dashboards.",
            },
          ].map((exp) => (
            <div key={exp.date} className="relative pl-8 border-l-2 border-brand-200">
              <div className="absolute left-0 top-0 -translate-x-1/2 h-3 w-3 rounded-full bg-brand-600 ring-4 ring-white" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                {exp.date}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-brand-950 dark:text-brand-50">
                {exp.role}{" "}
                <span className="text-brand-700 font-normal">— {exp.company}</span>
              </h3>
              <p className="mt-2 text-sm text-brand-700 dark:text-brand-400 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* À propos */}
      <Section id="a-propos" title="À propos" className="bg-brand-100 dark:bg-brand-900">
        <div className="max-w-3xl space-y-4 text-brand-700 dark:text-brand-400 leading-relaxed">
          <p>
            Développeur full-stack passionné par l&apos;intersection entre le
            développement logiciel et l&apos;intelligence artificielle. Je conçois des
            solutions qui automatisent le répétitif pour libérer l&apos;humain vers des
            tâches à plus forte valeur ajoutée.
          </p>
          <p>
            Mon approche combine une expertise technique solide (Python, TypeScript,
            React, FastAPI, Docker) avec une compréhension approfondie des LLMs, du
            Retrieval-Augmented Generation (RAG) et des systèmes agentiques.
          </p>
          <p>
            Basé en France, je collabore avec des PME et startups pour transformer
            leurs processus métier grâce à l&apos;automatisation intelligente.
          </p>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <p className="max-w-xl text-brand-700 dark:text-brand-400 leading-relaxed mb-8">
          Une idée de projet, une question ou simplement envie d&apos;échanger ?
          N&apos;hésitez pas à me contacter.
        </p>
        <a
          href="mailto:donovan@dtmini.com"
          className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-600 transition-colors shadow-sm"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          donovan@dtmini.com
        </a>
      </Section>

      {/* CTA */}
      <CTASection
        title="Prêt à automatiser votre prochain projet ?"
        description="Discutons de vos besoins et voyons comment l'automatisation et l'IA peuvent transformer vos processus."
        buttons={[
          { label: "Me contacter", href: "mailto:donovan@dtmini.com", variant: "primary" },
          { label: "Voir mes projets", href: "/#projets", variant: "secondary" },
        ]}
      />
    </>
  );
}

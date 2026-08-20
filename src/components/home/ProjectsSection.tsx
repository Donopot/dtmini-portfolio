import Link from "next/link";
import type { Project } from "@/types/projects";

interface Props {
  projects: Project[];
}

export function ProjectsSection({ projects }: Props) {
  return (
    <section className="max-w-[72rem] mx-auto px-6 py-24 relative z-10">
      <span
        className="text-xs font-semibold uppercase tracking-[0.15em] mb-3 block"
        style={{ color: "var(--color-light-accent-text)" }}
      >
        Projets
      </span>
      <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-bold mb-12 dark:font-mono">
        Sélection de travaux
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
        {/* Intro */}
        <div>
          <h3 className="font-display dark:font-mono text-2xl font-bold mb-3 transition-colors">
            Des solutions
            <br />
            sur mesure
          </h3>
          <p
            className="text-base mb-6 leading-relaxed"
            style={{ color: "var(--color-light-text-secondary)" }}
          >
            Chaque projet répond à un besoin métier concret identifié sur le terrain.
            De l&apos;automatisation Airtable au déploiement d&apos;agents IA.
          </p>
          <Link
            href="/projets"
            className="font-mono text-sm no-underline border-b pb-0.5 transition-opacity hover:opacity-70"
            style={{
              color: "var(--color-light-accent-text)",
              borderColor: "var(--color-light-accent)",
            }}
          >
            Tous les projets →
          </Link>
        </div>

        {/* Previews grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((p) => (
            <ProjectPreview key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div
      className="rounded-xl overflow-hidden border transition-all duration-400 hover:-translate-y-1 cursor-pointer"
      style={{
        backgroundColor: "var(--color-light-card)",
        borderColor: "var(--color-light-border)",
      }}
    >
      <div
        className="h-24 flex items-center justify-center font-mono text-xs"
        style={{
          backgroundColor: "var(--color-light-bg-alt)",
          color: "var(--color-light-text-secondary)",
        }}
      >
        {project.tags[0]}
      </div>
      <div
        className="p-3 border-t"
        style={{ borderColor: "var(--color-light-border)" }}
      >
        <div className="text-sm font-semibold">{project.name}</div>
        <div
          className="text-xs mt-0.5"
          style={{ color: "var(--color-light-text-secondary)" }}
        >
          {project.tags.slice(0, 2).join(" · ")}
        </div>
      </div>
    </div>
  );
}

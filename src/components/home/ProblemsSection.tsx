import { problems } from "@/data/content";

export function ProblemsSection() {
  return (
    <section className="max-w-[72rem] mx-auto px-6 py-24 relative z-10">
      <span
        className="text-xs font-semibold uppercase tracking-[0.15em] mb-3 block"
        style={{ color: "var(--accent-strong)" }}
      >
        Problèmes rencontrés
      </span>
      <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-bold mb-12 dark:font-mono">
        Ces situations vous parlent ?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {problems.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl p-6 border"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <h3 className="font-display dark:font-mono text-lg font-bold mb-2">
              {p.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

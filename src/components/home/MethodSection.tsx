import { method } from "@/data/content";

export function MethodSection() {
  return (
    <section className="max-w-[72rem] mx-auto px-6 py-24 relative z-10">
      <span
        className="text-xs font-semibold uppercase tracking-[0.15em] mb-3 block"
        style={{ color: "var(--accent-strong)" }}
      >
        Méthode
      </span>
      <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-bold mb-12 dark:font-mono">
        Comment on travaille ensemble
      </h2>

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {method.map((m) => (
          <li
            key={m.step}
            className="rounded-2xl p-6 border"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <span className="font-mono text-sm" style={{ color: "var(--accent-strong)" }}>
              {m.step}
            </span>
            <h3 className="font-display dark:font-mono text-lg font-bold mt-2 mb-2">
              {m.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {m.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

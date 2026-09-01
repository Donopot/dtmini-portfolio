import type { Metric } from "@/data/content";

export function MetricGrid({ metrics }: { metrics: Metric[] }) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {metrics.map((m, i) => (
        <div
          key={i}
          className="rounded-xl border p-4"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          <div
            className="font-mono text-2xl sm:text-3xl font-bold tracking-tight"
            style={{ color: "var(--accent-strong)" }}
          >
            {m.value}
          </div>
          <div
            className="mt-1.5 text-xs leading-snug"
            style={{ color: "var(--text-muted)" }}
          >
            {m.label}
          </div>
        </div>
      ))}
    </div>
  );
}

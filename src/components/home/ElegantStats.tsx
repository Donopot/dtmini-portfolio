import { heroData } from "@/data/content";

export function ElegantStats() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 my-10 py-8 border-y"
      style={{ borderColor: "var(--border)" }}
    >
      {heroData.stats.map((s) => (
        <div key={s.label} className="text-center">
          <div
            className="font-display text-2xl sm:text-[2rem] lg:text-[2.5rem] font-bold break-words"
            style={{ color: "var(--accent-strong)" }}
          >
            {s.value}
          </div>
          <div
            className="text-sm mt-1"
            style={{ color: "var(--text-muted)" }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

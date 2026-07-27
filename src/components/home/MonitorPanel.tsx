import { heroData } from "@/data/content";

export function MonitorPanel() {
  const metrics = heroData.metrics;

  return (
    <div
      className="rounded-xl overflow-hidden flex flex-col border"
      style={{
        backgroundColor: "rgba(8, 19, 23, 0.95)",
        borderColor: "var(--color-dark-border)",
      }}
    >
      <div
        className="px-4 py-2.5 border-b font-mono text-xs tracking-widest"
        style={{
          backgroundColor: "rgba(19, 47, 53, 0.5)",
          borderColor: "var(--color-dark-border)",
          color: "var(--color-dark-accent)",
        }}
      >
        📡 SYSTEM STATUS
      </div>

      <div className="flex-1 p-4 flex flex-col gap-3">
        {/* CPU */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--color-dark-text-secondary)" }}>CPU</span>
          <span className="font-mono text-sm font-bold" style={{ color: "var(--color-dark-accent-green)" }}>23%</span>
        </div>
        <div className="h-1 rounded-full" style={{ backgroundColor: "var(--color-dark-border)" }}>
          <div className="h-full rounded-full w-[23%]" style={{ backgroundColor: "var(--color-dark-accent-green)" }} />
        </div>

        {/* Memory */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--color-dark-text-secondary)" }}>Memory</span>
          <span className="font-mono text-sm font-bold" style={{ color: "var(--color-dark-accent)" }}>5.2 / 16 GB</span>
        </div>
        <div className="h-1 rounded-full" style={{ backgroundColor: "var(--color-dark-border)" }}>
          <div className="h-full rounded-full w-[32%]" style={{ backgroundColor: "var(--color-dark-accent)" }} />
        </div>

        {/* Requests with mini chart */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--color-dark-text-secondary)" }}>Requests</span>
          <span className="font-mono text-sm font-bold" style={{ color: "var(--color-dark-accent-green)" }}>1.2k/min</span>
        </div>
        <div className="flex items-end gap-0.5 h-8">
          {[40, 60, 35, 85, 50, 75, 45, 65, 90, 55, 40, 80].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                backgroundColor: "var(--color-dark-accent)",
                opacity: h >= 75 ? 0.7 : 0.4,
              }}
            />
          ))}
        </div>

        {/* Uptime */}
        <div className="flex items-center justify-between mt-auto">
          <span className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--color-dark-text-secondary)" }}>Uptime</span>
          <span className="font-mono text-sm font-bold" style={{ color: "var(--color-dark-accent-green)" }}>99.97%</span>
        </div>
      </div>
    </div>
  );
}

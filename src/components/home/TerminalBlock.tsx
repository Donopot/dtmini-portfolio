import { terminalProfile } from "@/data/content";

export function TerminalBlock() {
  return (
    <div
      className="rounded-xl overflow-hidden font-mono text-sm border"
      style={{
        backgroundColor: "rgba(8, 19, 23, 0.9)",
        borderColor: "var(--color-dark-border)",
      }}
    >
      {/* Terminal header dots */}
      <div
        className="flex items-center gap-2 px-4 py-2.5 border-b"
        style={{
          backgroundColor: "rgba(19, 47, 53, 0.5)",
          borderColor: "var(--color-dark-border)",
        }}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27CA40]" />
        <span
          className="ml-2 text-xs"
          style={{ color: "var(--color-dark-text-secondary)" }}
        >
          portfolio.json — zsh
        </span>
      </div>

      {/* Terminal body */}
      <div className="p-5 leading-7">
        <div>
          <span style={{ color: "var(--color-dark-accent-green)" }}>donopot@portfolio:~$</span>{" "}
          <span>cat profile.json</span>
        </div>
        <pre className="mt-1 whitespace-pre-wrap" style={{ color: "var(--color-dark-text-secondary)" }}>
          {terminalProfile}
        </pre>
        <div className="mt-3">
          <span style={{ color: "var(--color-dark-accent-green)" }}>donopot@portfolio:~$</span>{" "}
          <span className="cursor-blink" />
        </div>
      </div>
    </div>
  );
}

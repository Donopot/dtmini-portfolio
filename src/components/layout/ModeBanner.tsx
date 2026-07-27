"use client";

import { useTheme } from "@/components/ThemeProvider";
import type { Theme } from "@/types/theme";

export function ModeBanner() {
  const { theme, setTheme } = useTheme();

  const switchTo = (t: Theme) => setTheme(t);

  return (
    <div className="flex items-center justify-center gap-6 flex-wrap px-4 py-2 text-sm tracking-wider font-sans"
      style={{ backgroundColor: "var(--color-outer-bg)", color: "var(--color-outer-gold)" }}>
      <span className="font-display text-base font-semibold" style={{ color: "var(--color-outer-gold)" }}>
        Donovan Beaulavon
      </span>
      <span className="opacity-50 hidden sm:inline">—</span>
      <div className="flex rounded-full overflow-hidden border" style={{ borderColor: "#3D2E24" }}>
        <button
          onClick={() => switchTo("light")}
          className={`px-4 py-1 text-xs font-medium transition-colors ${
            theme === "light"
              ? "text-[#181316]"
              : "text-[#8B7B6E] hover:text-[#C89B67]"
          }`}
          style={theme === "light" ? { backgroundColor: "#C89B67" } : { background: "transparent" }}
        >
          ☀️ Mode clair
        </button>
        <button
          onClick={() => switchTo("dark")}
          className={`px-4 py-1 text-xs font-medium transition-colors ${
            theme === "dark"
              ? "text-[#181316]"
              : "text-[#8B7B6E] hover:text-[#C89B67]"
          }`}
          style={theme === "dark" ? { backgroundColor: "#C89B67" } : { background: "transparent" }}
        >
          🌙 Mode sombre
        </button>
      </div>
    </div>
  );
}

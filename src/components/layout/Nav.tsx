"use client";

import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { navItems } from "@/data/content";

export function Nav() {
  const { theme, toggle } = useTheme();

  return (
    <nav
      className="fixed top-8 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors"
      style={{
        backgroundColor: `color-mix(in srgb, ${theme === "dark" ? "var(--color-dark-bg)" : "var(--color-light-bg)"} 88%, transparent)`,
        borderColor: theme === "dark" ? "var(--color-dark-border)" : "var(--color-light-border)",
      }}
    >
      <div className="max-w-[72rem] mx-auto px-6 flex items-center justify-between h-14">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-wider no-underline transition-colors hover:opacity-70"
          style={{ color: theme === "dark" ? "var(--color-dark-accent)" : "var(--color-light-accent)" }}
        >
          DB
        </Link>

        <div className="flex gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium no-underline transition-colors ${
                theme === "dark" ? "font-mono text-xs tracking-wider" : "font-sans"
              }`}
              style={{
                color: theme === "dark" ? "var(--color-dark-text-secondary)" : "var(--color-light-text-secondary)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = theme === "dark" ? "var(--color-dark-accent)" : "var(--color-light-accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = theme === "dark" ? "var(--color-dark-text-secondary)" : "var(--color-light-text-secondary)";
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          onClick={toggle}
          className="w-10 h-10 rounded-full border flex items-center justify-center text-lg cursor-pointer transition-colors hover:opacity-80"
          style={{
            borderColor: theme === "dark" ? "var(--color-dark-border)" : "var(--color-light-border)",
            backgroundColor: theme === "dark" ? "var(--color-dark-card)" : "var(--color-light-card)",
          }}
          aria-label="Changer de mode"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}

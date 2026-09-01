"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { navItems } from "@/data/content";

export function Nav() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  const linkClasses = `px-4 py-2 rounded-lg text-sm font-medium no-underline transition-colors ${
    theme === "dark" ? "font-mono text-xs tracking-wider" : "font-sans"
  }`;

  return (
    <nav
      className="fixed top-8 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors"
      style={{
        backgroundColor: `color-mix(in srgb, var(--background) 88%, transparent)`,
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-[72rem] mx-auto px-4 md:px-6 flex items-center justify-between h-14 gap-2">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-wider no-underline transition-colors hover:opacity-70 shrink-0"
          style={{ color: "var(--accent-strong)" }}
          onClick={() => setOpen(false)}
        >
          DB
        </Link>

        {/* Liens desktop */}
        <div className="hidden md:flex gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClasses}
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent-strong)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {/* Bouton de thème — toujours accessible */}
          <button
            onClick={toggle}
            className="w-10 h-10 rounded-full border flex items-center justify-center text-lg cursor-pointer transition-colors hover:opacity-80"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--surface)",
            }}
            aria-label="Changer de mode"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          {/* Bouton burger — mobile uniquement */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer transition-colors hover:opacity-80"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--surface)",
            }}
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="nav-mobile"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ color: "var(--text-muted)" }}
            >
              {open ? (
                <path d="M5 5l10 10M15 5L5 15" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {open && (
        <div
          id="nav-mobile"
          className="md:hidden border-t"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          <div className="px-4 py-2 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-sm font-medium no-underline transition-colors hover:opacity-70"
                style={{ color: "var(--text-muted)" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

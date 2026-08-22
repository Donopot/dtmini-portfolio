"use client";

import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { footerColumns } from "@/data/content";

export function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer
      className="border-t z-10 relative px-6 pt-16 pb-8 transition-colors"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-[72rem] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h2
                className={`mb-4 font-bold transition-colors ${
                  isDark
                    ? "font-mono text-xs uppercase tracking-widest"
                    : "font-display text-base"
                }`}
                style={{ color: "var(--accent-strong)" }}
              >
                {col.title}
              </h2>
              {col.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-1 text-sm no-underline transition-colors hover:opacity-70"
                  style={{ color: "var(--text-muted)" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div
          className="flex items-center justify-between pt-8 border-t text-sm transition-colors"
          style={{
            borderColor: "var(--border)",
            color: "var(--text-muted)",
          }}
        >
          <span>© 2026 Donovan Beaulavon — Tous droits réservés</span>
          <div className="flex gap-3">
            <a
              href="https://github.com/Donopot"
              className="w-8 h-8 rounded-full border flex items-center justify-center text-xs no-underline transition-colors hover:opacity-70"
              style={{ borderColor: "var(--border)" }}
            >
              GH
            </a>
            <a
              href="https://linkedin.com/in/donovan-beaulavon"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border flex items-center justify-center text-xs no-underline transition-colors hover:opacity-70"
              style={{ borderColor: "var(--border)" }}
            >
              LI
            </a>
            <a
              href="mailto:donovan@dtmini.com"
              className="w-8 h-8 rounded-full border flex items-center justify-center text-xs no-underline transition-colors hover:opacity-70"
              style={{ borderColor: "var(--border)" }}
            >
              @
            </a>
          </div>
        </div>

        {/* Terminal prompt (dark only) */}
        {isDark && (
          <div className="mt-6 py-3 font-mono text-sm" style={{ color: "var(--accent-green)" }}>
            donopot@portfolio:~$ <span className="cursor-blink" />
          </div>
        )}
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

interface CtaItem {
  label: string;
  href: string;
}

interface Props {
  primary: CtaItem;
  secondary: CtaItem;
}

export function CtaGroup({ primary, secondary }: Props) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex gap-4 flex-wrap">
      <Link
        href={primary.href}
        className="inline-flex px-8 py-3.5 rounded-xl text-[0.9375rem] font-semibold no-underline transition-all hover:-translate-y-0.5"
        style={{
          backgroundColor: "var(--cta-bg)",
          color: "var(--cta-text)",
          boxShadow: isDark
            ? "0 8px 24px rgba(74, 222, 128, 0.15)"
            : "0 8px 24px rgba(184, 136, 77, 0.15)",
        }}
      >
        {primary.label}
      </Link>
      <Link
        href={secondary.href}
        className="inline-flex px-8 py-3.5 rounded-xl text-[0.9375rem] font-semibold no-underline border-2 transition-all hover:-translate-y-0.5"
        style={{
          backgroundColor: "transparent",
          color: "var(--text)",
          borderColor: "var(--border)",
        }}
      >
        {secondary.label}
      </Link>
    </div>
  );
}

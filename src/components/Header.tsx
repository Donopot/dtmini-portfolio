"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/#automatisation-ia", label: "Automatisation & IA" },
  { href: "/#fullstack-ia", label: "Full-stack & IA" },
  { href: "/#projets", label: "Projets" },
  { href: "/#experience", label: "Expérience" },
  { href: "/#a-propos", label: "À propos" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen((v) => !v), []);
  const close = useCallback(() => setOpen(false), []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu on route change (Next.js App Router handles this via link clicks)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-brand-700 hover:text-brand-600 transition-colors"
        >
          Donovan Beaulavon
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3 py-2 rounded-md text-gray-700 hover:text-brand-700 hover:bg-brand-50 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          type="button"
          onClick={toggle}
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-brand-50 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {/* Hamburger / close icon */}
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          ...(prefersReducedMotion() && { transition: "none" }),
        }}
      >
        <ul className="flex flex-col gap-1 px-4 pb-4 pt-1 bg-white border-t border-gray-100 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={close}
                className="block px-3 py-2.5 rounded-md text-gray-700 hover:text-brand-700 hover:bg-brand-50 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

/** Lightweight one-shot check for reduced-motion preference */
function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

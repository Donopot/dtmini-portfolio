"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/80 via-white/90 to-brand-50/60 dark:from-brand-900/40 dark:via-gray-900/80 dark:to-brand-900/40" />
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.10]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"
              className="text-brand-950 dark:text-brand-400" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-brand-400/30 dark:bg-brand-500/40"
        animate={{ y: [-10, 10, -10], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-brand-300/30 dark:bg-brand-400/40"
        animate={{ y: [10, -10, 10], opacity: [0.5, 0.2, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-brand-500/20 dark:bg-brand-300/30"
        animate={{ y: [-8, 8, -8], opacity: [0.2, 0.7, 0.2] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-3.5rem)] items-center overflow-hidden bg-brand-50 dark:bg-brand-950">
      <GridBackground />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-semibold uppercase tracking-widest text-brand-700 dark:text-brand-400 mb-4"
            >
              Donovan Beaulavon
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-brand-950 dark:text-brand-50 leading-[1.1]"
            >
              Je transforme les processus métier en{" "}
              <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-teal-400 bg-clip-text text-transparent dark:from-brand-400 dark:via-teal-300 dark:to-emerald-300">
                systèmes automatisés et intelligents
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 max-w-xl text-lg text-brand-700 dark:text-brand-400 leading-relaxed lg:mx-0 mx-auto"
            >
              Tool &amp; IT Coordinator avec deux ans d&apos;expérience chez ChangeNOW,
              je conçois des automatisations, des outils internes et des applications
              full-stack intégrant l&apos;IA, du besoin métier jusqu&apos;au déploiement.
            </motion.p>

            {/* Disponibilité */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-4 flex items-center gap-2 justify-center lg:justify-start"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm text-brand-700 dark:text-brand-500">
                Ouvert aux opportunités — CDI, CDD ou mission freelance — Île-de-France et télétravail
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Link
                href="mailto:donovan.beaulavon@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-brand-600 dark:bg-brand-600 dark:hover:bg-brand-600 transition-all shadow-lg shadow-brand-200/50 dark:shadow-brand-900/30 hover:shadow-xl hover:shadow-brand-300/50 dark:hover:shadow-brand-800/40 hover:-translate-y-0.5"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Me contacter
              </Link>
              <Link
                href="/cv/automation"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-200 dark:border-brand-800 px-6 py-3.5 text-sm font-semibold text-brand-800 dark:text-brand-400 hover:border-brand-300 dark:hover:border-brand-600 hover:text-brand-700 dark:hover:text-brand-400 transition-all hover:-translate-y-0.5"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Télécharger mon CV
              </Link>
            </motion.div>
          </div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-400 via-teal-300 to-emerald-400 opacity-20 dark:opacity-30 blur-xl animate-pulse" />
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-brand-500/40 to-teal-400/30 dark:from-brand-400/50 dark:to-emerald-400/40 blur-md" />
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-brand-600 to-teal-500 dark:from-brand-700 dark:to-teal-600 flex items-center justify-center shadow-2xl shadow-brand-300/30 dark:shadow-brand-900/40 border-4 border-white dark:border-brand-900">
                <span className="text-6xl sm:text-7xl font-bold text-white/90 select-none">DB</span>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-brand-50 dark:bg-brand-900 rounded-full px-3 py-1 shadow-lg border border-brand-100 dark:border-brand-800">
                <span className="text-xs font-semibold text-brand-700 dark:text-brand-400">
                  DT Mini
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

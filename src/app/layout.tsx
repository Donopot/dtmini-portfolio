import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Donovan Beaulavon — Automation, Full-stack & AI",
  description:
    "Portfolio de Donovan Beaulavon : automatisation des processus métier, intégration IA, développement Python, React, FastAPI, RAG et systèmes agentiques.",
  metadataBase: new URL("https://dtmini.com"),
  openGraph: {
    title: "Donovan Beaulavon — Automation, Full-stack & AI",
    description:
      "Automatisation des processus métier, intégration IA, développement full-stack et systèmes agentiques.",
    url: "https://dtmini.com",
    siteName: "Donovan Beaulavon",
    type: "profile",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Header />
        {/* Offset for fixed header (h-14 = 56px) */}
        <main className="pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

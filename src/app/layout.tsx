import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Donovan Beaulavon — Automation, Full-stack & AI Systems",
  description:
    "Tool & IT Coordinator avec 2 ans d'expérience chez ChangeNOW. Automatisation des processus métier, intégration IA, développement Python, React, FastAPI, RAG et systèmes agentiques.",
  metadataBase: new URL("https://dtmini.com"),
  alternates: {
    canonical: "https://dtmini.com",
  },
  openGraph: {
    title: "Donovan Beaulavon — Automation, Full-stack & AI Systems",
    description:
      "Tool & IT Coordinator avec 2 ans chez ChangeNOW. Automatisation, IA, développement full-stack et systèmes agentiques.",
    url: "https://dtmini.com",
    siteName: "Donovan Beaulavon",
    type: "profile",
    locale: "fr_FR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Donovan Beaulavon — Automation, Full-stack & AI Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donovan Beaulavon — Automation, Full-stack & AI Systems",
    description:
      "Tool & IT Coordinator avec 2 ans chez ChangeNOW. Automatisation, IA, développement full-stack et systèmes agentiques.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Donovan Beaulavon",
  givenName: "Donovan",
  familyName: "Beaulavon",
  jobTitle: "Tool & IT Coordinator — Automatisation, Full-stack & IA",
  description:
    "Tool & IT Coordinator avec 2 ans d'expérience chez ChangeNOW. Je transforme les processus métier en systèmes automatisés et intelligents.",
  url: "https://dtmini.com",
  email: "donovan.beaulavon@gmail.com",
  telephone: "+336****5041",
  sameAs: ["https://github.com/Donopot"],
  knowsAbout: [
    "Automatisation",
    "Intelligence Artificielle",
    "Développement Full-stack",
    "Python",
    "TypeScript",
    "React",
    "FastAPI",
    "RAG",
    "LangChain",
    "No-code",
  ],
  alumniOf: [
    { "@type": "EducationalOrganization", name: "Oreegami Academy" },
    { "@type": "EducationalOrganization", name: "DataScientest — Mines Paris - PSL" },
  ],
  worksFor: {
    "@type": "Organization",
    name: "DTMini",
    url: "https://dtmini.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Antony",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Inter font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Prevent FOUC for dark mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('theme');
                  if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-brand-50 dark:bg-brand-950 text-brand-950 dark:text-brand-50 antialiased transition-colors font-sans">
        <ThemeProvider>
          <Header />
          <main className="pt-14">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

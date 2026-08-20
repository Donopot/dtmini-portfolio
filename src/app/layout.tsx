import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GeoGrid } from "@/components/layout/GeoGrid";
import { Scanlines } from "@/components/layout/Scanlines";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
  style: ["normal", "italic"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Donovan Beaulavon — Tool & IT Coordinator",
    template: "%s — Donovan Beaulavon",
  },
  description:
    "J'analyse, automatise et déploie des systèmes intelligents qui transforment les processus métier — du tableur au déploiement, avec ou sans IA.",
  metadataBase: new URL("https://dtmini.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Donovan Beaulavon — Tool & IT Coordinator",
    description:
      "Automatisation, IA, développement full-stack et systèmes agentiques.",
    url: "https://dtmini.com",
    siteName: "Donovan Beaulavon",
    type: "profile",
    locale: "fr_FR",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donovan Beaulavon — Tool & IT Coordinator",
    description:
      "Automatisation, IA, développement full-stack et systèmes agentiques.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Donovan Beaulavon",
  jobTitle: "Tool & IT Coordinator",
  description:
    "J'analyse, automatise et déploie des systèmes intelligents qui transforment les processus métier.",
  url: "https://dtmini.com",
  sameAs: ["https://github.com/Donopot"],
  knowsAbout: [
    "Automatisation",
    "Intelligence Artificielle",
    "Python",
    "TypeScript",
    "Docker",
    "Airtable",
    "RAG",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${inter.variable} ${cormorant.variable} ${jetbrains.variable}`}
    >
      <head>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased font-sans">
        <ThemeProvider>
          <Scanlines />
          <GeoGrid />
          <Nav />
          <main className="pt-14">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

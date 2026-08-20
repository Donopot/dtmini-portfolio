import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact",
  description:
    "Contactez Donovan Beaulavon pour vos projets d'automatisation, développement full-stack ou IA. Formulaire avec consentement RGPD.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

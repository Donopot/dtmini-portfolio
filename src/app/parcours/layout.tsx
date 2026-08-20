import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/parcours" },
  title: "Parcours",
  description:
    "Le parcours de Donovan Beaulavon : data science, développement full-stack, automatisation et IA.",
};

export default function ParcoursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

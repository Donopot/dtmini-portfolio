// src/types/contact.ts
// Source unique de vérité pour les types de demande du formulaire de contact.
// Utilisé par : le formulaire (/contact), l'API (/api/contact) et les offres (offers.ts).

export type ContactType =
  | "diagnostic"
  | "automatisation"
  | "outil-metier"
  | "production"
  | "autre";

export const CONTACT_TYPES: { value: ContactType; label: string }[] = [
  { value: "diagnostic", label: "Diagnostic et plan d'automatisation" },
  { value: "automatisation", label: "Automatisation et structuration des données" },
  { value: "outil-metier", label: "Outils métier et IA sur mesure" },
  { value: "production", label: "Mise en production et transmission" },
  { value: "autre", label: "Autre demande" },
];

export const CONTACT_TYPE_LABELS: Record<ContactType, string> = {
  diagnostic: "Diagnostic et plan d'automatisation",
  automatisation: "Automatisation et structuration des données",
  "outil-metier": "Outils métier et IA sur mesure",
  production: "Mise en production et transmission",
  autre: "Autre demande",
};

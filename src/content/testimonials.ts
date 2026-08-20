export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization?: string;
  date?: string;
}

// ─────────────────────────────────────────────────────────────
// pendingValidation — TÉMOIGNAGES NON PUBLIABLES.
// L'identité et l'autorisation des auteurs ne sont pas encore
// confirmées. Ne pas afficher avant validation explicite de Donovan.
// ─────────────────────────────────────────────────────────────
const testimonials: Testimonial[] = [
  {
    quote:
      "Donovan a transformé notre processus de gestion des intervenants. Ce qui prenait 3 jours de saisie manuelle est maintenant automatisé en quelques heures. Sa capacité à comprendre nos besoins métier et à proposer des solutions pragmatiques a été décisive.",
    author: "Responsable Programme",
    role: "Program Manager",
    organization: "ChangeNOW",
    date: "2025",
  },
  {
    quote:
      "Grâce aux outils et automatisations mis en place, nous avons pu absorber une croissance de 40% du volume de données sans recrutement supplémentaire. Donovan a une approche très structurée : il documente tout, ce qui rend la maintenance simple pour l'équipe.",
    author: "Directeur des Opérations",
    role: "COO",
    organization: "ChangeNOW",
    date: "2025",
  },
  {
    quote:
      "J'ai rarement vu quelqu'un d'aussi polyvalent : du no-code au Python, de l'analyse de données au déploiement d'applications web. Donovan comprend à la fois la technique et les enjeux business, ce qui rend la collaboration extrêmement fluide.",
    author: "Responsable Partenariats",
    role: "Partnerships Lead",
    organization: "ChangeNOW",
    date: "2024",
  },
];

export default testimonials;

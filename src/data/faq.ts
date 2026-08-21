// src/data/faq.ts

export interface FaqItem {
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    question: "Pouvez-vous travailler avec nos outils existants ?",
    answer:
      "Oui. Je m'appuie d'abord sur ce que vous utilisez déjà (Airtable, Make, Google Workspace, tableurs…) et je n'introduis un nouvel outil que si c'est réellement justifié.",
  },
  {
    question: "Faut-il remplacer Airtable, Make ou nos tableurs ?",
    answer:
      "Non. S'ils répondent à votre besoin, on les conserve et on les structure. Le remplacement n'est envisagé que lorsqu'un outil bloque clairement votre évolution.",
  },
  {
    question: "Utilisez-vous systématiquement de l'intelligence artificielle ?",
    answer:
      "Non. Une automatisation simple ou une meilleure organisation des données suffit souvent. Je propose l'IA uniquement quand elle apporte un gain concret et mesurable.",
  },
  {
    question: "Livrez-vous la documentation ?",
    answer:
      "Oui, systématiquement. Chaque livraison comprend la documentation d'utilisation, de maintenance et, si pertinent, la procédure de reprise en cas d'incident.",
  },
  {
    question: "Pouvez-vous assurer la maintenance ?",
    answer:
      "Oui, en option. La maintenance peut être ponctuelle ou faire l'objet d'un accompagnement récurrent, avec un transfert de compétences pour que votre équipe reste autonome.",
  },
  {
    question: "Comment démarre une mission ?",
    answer:
      "Par une discussion simple sur votre besoin. On décrit le problème ensemble, puis on détermine la bonne réponse : une automatisation, un outil métier ou une meilleure organisation des données.",
  },
];

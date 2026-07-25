export interface SocialLink {
  label: string;
  url: string;
  icone?: string;
}

export interface Preuve {
  label: string;
  valeur: string;
}

export interface SiteConfig {
  nom: string;
  titre: string;
  tagline: string;
  sousTitre: string;
  disponibilite: string;
  preuves: Preuve[];
  liensSociaux: SocialLink[];
}

export const siteConfig: SiteConfig = {
  nom: "Donovan Beaulavon",
  titre: "Automatisation, Full-stack & IA",
  tagline:
    "Je transforme les processus métier en systèmes automatisés et intelligents.",
  sousTitre:
    "Tool & IT Coordinator 2 ans chez ChangeNOW — Développeur full-stack & IA.",
  disponibilite:
    "Ouvert aux opportunités CDI, CDD et freelance — Île-de-France et télétravail.",
  preuves: [
    { label: "d'expérience en coordination IT", valeur: "2 ans" },
    { label: "projets techniques livrés", valeur: "3" },
    { label: "contacts unifiés dans une base consolidée", valeur: "+10 000" },
    { label: "fichiers traités automatiquement par cycle", valeur: "~200" },
  ],
  liensSociaux: [
    {
      label: "GitHub",
      url: "https://github.com/Donopot",
      icone: "github",
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/donovan-beaulavon",
      icone: "linkedin",
    },
  ],
};

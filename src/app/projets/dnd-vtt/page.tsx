import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/projets/dnd-vtt" },
  robots: { index: true, follow: true },
  title: "DnD VTT — Table virtuelle",
  description:
    "Conception et mise en production d'un outil web multi-utilisateurs en temps réel : une table virtuelle auto-hébergée pour jouer à Donjons & Dragons à distance.",
};

export default function DndVttPage() {
  return (
    <main className="min-h-screen">
      <article className="mx-auto max-w-4xl px-6 py-12 sm:py-20">
        <Link
          href="/projets"
          className="text-sm underline hover:opacity-70"
          style={{ color: "var(--accent-strong)" }}
        >
          ← Retour aux projets
        </Link>

        <header className="mt-6">
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              backgroundColor: "var(--background-alt)",
              color: "var(--accent-strong)",
            }}
          >
            Outil métier · Beta privée
          </span>
          <h1
            className="mt-4 font-display dark:font-mono text-3xl font-bold sm:text-5xl"
          >
            DnD VTT — Table virtuelle
          </h1>
          <p
            className="mt-3 text-lg leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Conception et mise en production d&apos;un outil web
            multi-utilisateurs en temps réel.
          </p>
        </header>

        {/* Contexte */}
        <Section title="Contexte">
          <p>
            Jouer à Donjons &amp; Dragons à distance nécessite bien plus qu&apos;un
            appel vidéo : une carte partagée, des figurines, un brouillard de
            guerre, un suivi de combat et une coordination entre le maître du jeu
            et ses joueurs. L&apos;objectif était de réunir ces besoins dans une
            seule application web.
          </p>
        </Section>

        {/* Problème */}
        <Section title="Problème">
          <p>
            Permettre à un maître du jeu et à plusieurs joueurs de gérer une
            partie à distance : préparer une campagne, dérouler une session en
            direct sur une carte interactive, gérer les personnages, les tokens
            et le combat, tout en gardant des vues et des permissions distinctes
            entre MJ et joueurs.
          </p>
        </Section>

        {/* Rôle */}
        <Section title="Rôle">
          <p>
            Conception et développement full-stack : architecture de
            l&apos;application, modélisation des données, API, interface
            utilisateur, temps réel et déploiement.
          </p>
        </Section>

        {/* Solution */}
        <Section title="Solution">
          <p>
            Une table virtuelle auto-hébergée, avec un backend qui reste la
            source de vérité (permissions, données persistantes et validations
            critiques côté serveur) et un frontend qui offre une expérience de
            jeu fluide en session réelle.
          </p>
        </Section>

        {/* Fonctionnalités */}
        <Section title="Fonctionnalités vérifiées">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Authentification et gestion de campagnes (rôles MJ, co-MJ, joueur)</li>
            <li>Personnages, invitations et bibliothèque SRD</li>
            <li>Carte VTT : zoom, pan, grille, tokens, brouillard de guerre, mini-map</li>
            <li>Combat, initiative, rencontres et conditions</li>
            <li>Journal de session, notes MJ, handouts et documents révélables</li>
            <li>Vues MJ et joueur séparées, synchronisées en temps réel (WebSocket)</li>
          </ul>
        </Section>

        {/* Stack / architecture */}
        <Section title="Stack & architecture">
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "TypeScript",
              "Vite",
              "FastAPI",
              "Python",
              "PostgreSQL",
              "Redis",
              "MinIO / S3",
              "WebSocket",
              "Docker Compose",
              "Caddy",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border px-3 py-1 text-xs font-medium"
                style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
              >
                {t}
              </span>
            ))}
          </div>
          <div
            className="mt-6 rounded-xl p-5 font-mono text-xs leading-relaxed"
            style={{ backgroundColor: "var(--background-alt)" }}
          >
            <p style={{ color: "var(--text-muted)" }}>Architecture</p>
            <pre
              className="mt-2 whitespace-pre-wrap"
              style={{ color: "var(--text-muted)" }}
            >
{`Navigateur
  ↓ HTTPS
Caddy (reverse proxy)
  ↓
Frontend Nginx / API backend
  ↓
FastAPI
  ↓
PostgreSQL / Redis / MinIO`}
            </pre>
          </div>
        </Section>

        {/* Résultat observable */}
        <Section title="Résultat observable">
          <p>
            Une application fonctionnelle, auto-hébergée, documentée et testée,
            utilisable en session réelle. Le code est public et le dépôt
            comprend une documentation produit et technique complète.
          </p>
        </Section>

        {/* Limites & statut */}
        <Section title="Limites & statut">
          <p>
            Statut : <strong>beta privée active</strong>, sans abonnement ni
            monétisation. Le projet relève du domaine du jeu de rôle — il
            illustre avant tout la capacité à concevoir et déployer un outil web
            multi-utilisateurs en temps réel.
          </p>
        </Section>

        {/* CTA */}
        <Cta
          text="Besoin d'un outil métier sur mesure, de l'idée à la mise en production ?"
          href="/contact"
          label="Discuter de mon besoin"
        />
      </article>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2
        className="text-xl font-bold"
        style={{ color: "var(--text)" }}
      >
        {title}
      </h2>
      <div
        className="mt-3 leading-relaxed"
        style={{ color: "var(--text-muted)" }}
      >
        {children}
      </div>
    </section>
  );
}

function Cta({
  text,
  href,
  label,
}: {
  text: string;
  href: string;
  label: string;
}) {
  return (
    <div
      className="mt-12 rounded-2xl border p-8 text-center"
      style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
    >
      <p className="text-lg font-semibold">{text}</p>
      <Link
        href={href}
        className="mt-5 inline-block rounded-full px-8 py-3 text-sm font-semibold transition hover:opacity-90"
        style={{ backgroundColor: "var(--cta-bg)", color: "var(--cta-text)" }}
      >
        {label}
      </Link>
    </div>
  );
}

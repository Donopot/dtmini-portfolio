import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createHmac, randomBytes } from "node:crypto";

// ── Rate limiting (HMAC-SHA256, clé éphémère) ──────────────────────────
// La clé est générée aléatoirement au démarrage du processus et perdue au
// redémarrage (aucun secret d'environnement requis). L'adresse IP brute n'est
// jamais conservée ni journalisée : elle est convertie en une empreinte HMAC
// non réversible (impossible à retrouver par énumération sans la clé), puis
// abandonnée. Seuls le compteur et l'expiration sont conservés.
const RATE_LIMIT_KEY = randomBytes(32);

interface RateEntry {
  count: number;
  resetAt: number;
}

const rateLimit = new Map<string, RateEntry>();
const MAX_REQUESTS = 3;
const WINDOW_MS = 5 * 60 * 1000;
const MAX_ENTRIES = 10_000;

function clientKey(ip: string): string {
  return createHmac("sha256", RATE_LIMIT_KEY).update(ip).digest("hex");
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(key);
  return entry !== undefined && now < entry.resetAt && entry.count >= MAX_REQUESTS;
}

function recordRequest(key: string): void {
  const now = Date.now();
  let entry = rateLimit.get(key);

  if (!entry || now >= entry.resetAt) {
    // Nettoyage opportuniste des entrées expirées si la table approche sa limite
    if (rateLimit.size >= MAX_ENTRIES) {
      for (const [k, v] of rateLimit) {
        if (now >= v.resetAt) rateLimit.delete(k);
      }
    }
    entry = { count: 0, resetAt: now + WINDOW_MS };
    rateLimit.set(key, entry);
  }

  entry.count++;
}

// Labels must match the <select> options in src/app/contact/page.tsx exactly.
const TYPE_LABELS: Record<string, string> = {
  automatisation: "Automatisation de processus",
  data: "Structuration & données",
  developpement: "Développement (SaaS, app web)",
  ia: "Projet IA (RAG, agents, LLM)",
  autre: "Autre",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function stripNewlines(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

interface ContactBody {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  type?: unknown;
  message?: unknown;
  consent?: unknown;
  website?: unknown;
}

export async function POST(request: NextRequest) {
  // Rate limiting : l'IP est convertie en empreinte HMAC puis abandonnée.
  const rawIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const key = clientKey(rawIp);
  // rawIp n'est plus référencée après cette ligne.

  if (isRateLimited(key)) {
    return NextResponse.json(
      { error: "Trop de tentatives. Réessayez dans quelques minutes." },
      { status: 429 }
    );
  }
  recordRequest(key);

  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { name, email, company, type, message, consent } = body;

  // Honeypot: bots fill this hidden field — pretend success.
  if (body.website) {
    return NextResponse.json({ success: true });
  }

  // Server-side validation
  const errors: string[] = [];
  if (!name || typeof name !== "string" || name.length < 2 || name.length > 100)
    errors.push("Nom invalide");
  if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.push("Email invalide");
  if (!message || typeof message !== "string" || message.length < 10 || message.length > 2000)
    errors.push("Message invalide (10-2000 caractères)");
  if (!consent) errors.push("Consentement requis");

  if (errors.length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const typeLabel = TYPE_LABELS[type as string] || "Autre";

  // Destination / sender / API key come from environment variables only.
  const to = process.env.CONTACT_EMAIL;
  const from = process.env.CONTACT_FROM;
  const apiKey = process.env.RESEND_API_KEY;

  if (!to || !from || !apiKey) {
    return NextResponse.json(
      { error: "Le service de contact n'est pas configuré. Merci d'utiliser l'email de secours." },
      { status: 503 }
    );
  }

  const safeName = escapeHtml(name as string);
  const safeEmail = escapeHtml(email as string);
  const safeCompany = escapeHtml(typeof company === "string" ? company : "");
  const safeMessage = escapeHtml(message as string).replace(/\n/g, "<br>");
  const subjectName = stripNewlines(name as string);

  let sent = false;
  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: `Portfolio DT Mini <${from}>`,
      to,
      replyTo: email as string,
      subject: `[Contact] ${typeLabel} — ${subjectName}`,
      text: `Nom : ${name}\nEmail : ${email}\nEntreprise : ${typeof company === "string" ? company : "—"}\nType : ${typeLabel}\n\nMessage :\n${message}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${safeName}</p>
        <p><strong>Email :</strong> ${safeEmail}</p>
        <p><strong>Entreprise :</strong> ${safeCompany || "—"}</p>
        <p><strong>Type :</strong> ${escapeHtml(typeLabel)}</p>
        <hr />
        <p><strong>Message :</strong></p>
        <p>${safeMessage}</p>
      `,
    });
    sent = true;
  } catch {
    sent = false;
  }

  if (!sent) {
    return NextResponse.json(
      { error: "L'envoi du message a échoué. Merci de réessayer ou d'utiliser l'email de secours." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { trackConversion } from "@/lib/analytics";

// Rate limiting
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const MAX_REQUESTS = 3;
const WINDOW_MS = 5 * 60 * 1000;

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

export async function POST(request: NextRequest) {
  // Rate limit by IP
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (entry && now < entry.resetAt) {
    if (entry.count >= MAX_REQUESTS) {
      return NextResponse.json(
        { error: "Trop de tentatives. Réessayez dans quelques minutes." },
        { status: 429 }
      );
    }
    entry.count++;
  } else {
    rateLimit.set(ip, { count: 1, resetAt: now + WINDOW_MS });
  }

  if (rateLimit.size > 100) {
    for (const [key, val] of rateLimit) {
      if (now > val.resetAt) rateLimit.delete(key);
    }
  }

  try {
    const body = await request.json();
    const { name, email, company, type, message, consent } = body;

    // Honeypot
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    // Validation
    const errors: string[] = [];
    if (!name || typeof name !== "string" || name.length < 2 || name.length > 100)
      errors.push("Nom invalide");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.push("Email invalide");
    if (!message || typeof message !== "string" || message.length < 10 || message.length > 2000)
      errors.push("Message invalide (10-2000 caractères)");
    if (!consent) errors.push("Consentement requis");

    if (errors.length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    const typeLabels: Record<string, string> = {
      automatisation: "Automatisation de processus",
      data: "Data & nettoyage",
      developpement: "Développement full-stack",
      ia: "Intégration IA / agents",
      audit: "Audit / diagnostic",
      autre: "Autre",
    };

    // Try sending via Resend if configured
    const resend = getResend();
    if (resend) {
      const to = process.env.CONTACT_EMAIL || "donovan.beaulavon@gmail.com";
      const from = process.env.CONTACT_FROM || "contact@dtmini.com";

      try {
        await resend.emails.send({
          from: `Portfolio DT Mini <${from}>`,
          to,
          replyTo: email,
          subject: `[Contact] ${typeLabels[type] || type} — ${name}`,
          html: `
            <h2>Nouveau message de contact</h2>
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Entreprise :</strong> ${company || "—"}</p>
            <p><strong>Type :</strong> ${typeLabels[type] || type}</p>
            <hr />
            <p><strong>Message :</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          `,
        });
        console.log(`[CONTACT EMAIL SENT] ${name} (${email}) — ${type}`);
      } catch (emailErr) {
        console.error("[CONTACT EMAIL FAILED]", emailErr);
        // Don't fail the request — still log it
      }
    } else {
      // Log only (no email configured)
      console.log(`[CONTACT] ${name} (${email}) — ${type}: ${message.substring(0, 100)}...`);
      console.log("[CONTACT] Set RESEND_API_KEY to enable email sending.");
    }

    // Track conversion
    trackConversion("form_submit", "/contact", ip);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { trackConversion } from "@/lib/analytics";

// Client-side conversion tracking endpoint (called from JS)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, path } = body;

    // Validate
    const allowedTypes = [
      "cta_click",
      "cv_download",
      "cv_download_automation",
      "cv_download_development",
      "cta_contact",
      "cta_projects",
      "external_link",
    ];

    if (!type || !allowedTypes.includes(type)) {
      return NextResponse.json({ error: "Invalid event type" }, { status: 400 });
    }

    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    trackConversion(type, path || "/", ip);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

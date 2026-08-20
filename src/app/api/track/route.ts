import { NextRequest, NextResponse } from "next/server";
import { trackConversion } from "@/lib/analytics";

// Client-side conversion tracking endpoint.
// NOTE: currently not referenced by any client code — candidate for removal.
// No IP is recorded.
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, path } = body;

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

    trackConversion(type, path || "/");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

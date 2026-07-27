import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { analyticsMiddleware } from "@/lib/analytics";

export function middleware(request: NextRequest) {
  // Track page views (server-side, no JS, fully GDPR-compliant)
  analyticsMiddleware(request);
  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next|api|favicon|.*\\.(?:js|css|svg|png|jpg|ico|woff2?|xml|txt)$).*)",
};

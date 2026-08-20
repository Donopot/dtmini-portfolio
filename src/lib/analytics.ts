import { NextRequest } from "next/server";

// Simple in-memory analytics store (resets on deploy).
// No personal data is stored: no IP, no user agent, no identifiers.

interface PageView {
  path: string;
  timestamp: number;
  referer: string;
}

interface ConversionEvent {
  type: string;
  path: string;
  timestamp: number;
}

const pageViews: PageView[] = [];
const conversions: ConversionEvent[] = [];
const MAX_EVENTS = 10000;

// Export for the stats endpoint
export function getPageViews() {
  return [...pageViews];
}

export function getConversions() {
  return [...conversions];
}

export function analyticsMiddleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static assets, API routes, and system paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/cv/") || // Skip PDF tracking
    pathname.match(/\.(js|css|svg|png|jpg|ico|woff2?|xml|txt)$/)
  ) {
    return;
  }

  const pageView: PageView = {
    path: pathname,
    timestamp: Date.now(),
    referer: (request.headers.get("referer") || "direct").substring(0, 200),
  };

  pageViews.push(pageView);
  if (pageViews.length > MAX_EVENTS) pageViews.splice(0, pageViews.length - MAX_EVENTS);
}

export function trackConversion(type: string, path: string) {
  const event: ConversionEvent = {
    type,
    path,
    timestamp: Date.now(),
  };

  conversions.push(event);
  if (conversions.length > MAX_EVENTS) conversions.splice(0, conversions.length - MAX_EVENTS);
}

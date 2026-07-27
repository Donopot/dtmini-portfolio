import { NextRequest, NextResponse } from "next/server";

// Simple in-memory analytics store (resets on deploy)
// For production, consider piping to a log file or external service
interface PageView {
  path: string;
  timestamp: number;
  referer: string;
  userAgent: string;
}

interface ConversionEvent {
  type: string;
  path: string;
  timestamp: number;
  ip: string;
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
    referer: request.headers.get("referer") || "direct",
    userAgent: (request.headers.get("user-agent") || "unknown").substring(0, 100),
  };

  pageViews.push(pageView);
  if (pageViews.length > MAX_EVENTS) pageViews.splice(0, pageViews.length - MAX_EVENTS);

  // Log to console for external log collection
  console.log(
    `[ANALYTICS] ${new Date(pageView.timestamp).toISOString()} | ${pathname} | ref: ${pageView.referer.substring(0, 60)}`
  );
}

export function trackConversion(type: string, path: string, ip: string) {
  const event: ConversionEvent = {
    type,
    path,
    timestamp: Date.now(),
    ip,
  };

  conversions.push(event);
  if (conversions.length > MAX_EVENTS) conversions.splice(0, conversions.length - MAX_EVENTS);

  console.log(`[CONVERSION] ${type} | ${path} | ${new Date(event.timestamp).toISOString()}`);
}

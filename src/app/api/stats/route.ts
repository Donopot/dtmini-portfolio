import { NextResponse } from "next/server";
import { getPageViews, getConversions } from "@/lib/analytics";

// Simple password-protected stats endpoint
const STATS_TOKEN = process.env.STATS_TOKEN || "dtmini-stats-2026";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (token !== STATS_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const views = getPageViews();
  const conversions = getConversions();

  // Aggregate by path
  const pathCounts: Record<string, number> = {};
  const dailyCounts: Record<string, number> = {};

  for (const v of views) {
    pathCounts[v.path] = (pathCounts[v.path] || 0) + 1;
    const day = new Date(v.timestamp).toISOString().split("T")[0];
    dailyCounts[day] = (dailyCounts[day] || 0) + 1;
  }

  // Aggregate conversions by type
  const conversionByType: Record<string, number> = {};
  for (const c of conversions) {
    conversionByType[c.type] = (conversionByType[c.type] || 0) + 1;
  }

  return NextResponse.json({
    totalPageViews: views.length,
    uniquePaths: Object.keys(pathCounts).length,
    pageViewsByPath: Object.entries(pathCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20),
    dailyPageViews: dailyCounts,
    totalConversions: conversions.length,
    conversionsByType: conversionByType,
    recentConversions: conversions.slice(-10).reverse(),
  });
}

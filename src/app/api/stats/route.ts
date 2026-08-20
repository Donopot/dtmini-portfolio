import { NextResponse } from "next/server";
import { getPageViews, getConversions } from "@/lib/analytics";

// Aggregated, non-personal statistics endpoint.
// Requires STATS_TOKEN via environment (no hardcoded fallback).
// The response contains no personal data (no IP, no identifiers).
export async function GET(request: Request) {
  const token = process.env.STATS_TOKEN;
  if (!token) {
    return NextResponse.json({ error: "Statistiques désactivées" }, { status: 503 });
  }

  const { searchParams } = new URL(request.url);
  const provided = searchParams.get("token");
  if (provided !== token) {
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
  });
}

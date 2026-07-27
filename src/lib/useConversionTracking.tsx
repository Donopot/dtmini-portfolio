"use client";

import { useCallback } from "react";

/**
 * Track conversion events client-side.
 * Usage: const { track } = useConversionTracking();
 *        <button onClick={() => { track('cv_download'); window.open('/cv/...') }}>
 */
export function useConversionTracking() {
  const track = useCallback(async (type: string, path?: string) => {
    try {
      await fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, path: path || window.location.pathname }),
      });
    } catch {
      // Silently fail — tracking is non-critical
    }
  }, []);

  return { track };
}

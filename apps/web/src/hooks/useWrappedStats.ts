"use client";

import { useLocalStorage } from "./useLocalStorage";

export function useWrappedStats() {
  const [stats, setStats] = useLocalStorage("wrappedStats", {
    co2Saved: 0,
    treesEquivalent: 0,
    streakDays: 0
  });

  return { stats, setStats };
}

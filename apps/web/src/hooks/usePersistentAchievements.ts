"use client";

import { useLocalStorage } from "./useLocalStorage";

export function usePersistentAchievements() {
  const [achievements, setAchievements] = useLocalStorage<string[]>("achievements", []);

  return { achievements, setAchievements };
}

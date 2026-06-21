"use client";

import { useLocalStorage } from "./useLocalStorage";

export function usePersistentStreak() {
  const [streakDays, setStreakDays] = useLocalStorage<number>("streakDays", 0);

  function incrementStreak() {
    setStreakDays(streakDays + 1);
  }

  return { streakDays, incrementStreak };
}

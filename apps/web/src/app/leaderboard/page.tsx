"use client";

import PageTransition from "../../components/PageTransition";
import { useLeaderboardStats } from "../../hooks/useLeaderboardStats";

export default function LeaderboardPage() {
  const { rank, points } = useLeaderboardStats();

  return (
    <PageTransition>
      <div>
        <h1>🏆 Leaderboard</h1>

        <div>🏅 Global Rank: #{rank}</div>
        <div>⭐ Points: {points}</div>
      </div>
    </PageTransition>
  );
}

import { useLeaderboardStats } from "../../hooks/useLeaderboardStats";

export default function LeaderboardPage() {
  const { rank, points } = useLeaderboardStats();

  return (
    <div>
      <h1>🏆 Leaderboard</h1>

      <div>🏅 Global Rank: #{rank}</div>
      <div>⭐ Points: {points}</div>
    </div>
  );
}

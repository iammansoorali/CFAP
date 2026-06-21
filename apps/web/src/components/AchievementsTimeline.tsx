import { useLeaderboardStats } from "../hooks/useLeaderboardStats";

export default function AchievementsTimeline() {
  const { rank, points } = useLeaderboardStats();

  return (
    <div>
      <div>🏆 Rank #{rank}</div>
      <div>⭐ {points} Points</div>
      <div>🌎 Eco Contributor</div>
    </div>
  );
}

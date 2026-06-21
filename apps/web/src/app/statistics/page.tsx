import { useYearWrapped } from "../../hooks/useYearWrapped";

export default function StatisticsPage() {
  const { co2Saved, treesEquivalent, streakDays } = useYearWrapped();

  return (
    <div>
      <h1>📈 Statistics</h1>

      <div>🌎 CO₂ Saved: {co2Saved} kg</div>
      <div>🌳 Trees Equivalent: {treesEquivalent}</div>
      <div>🔥 Streak Days: {streakDays}</div>
    </div>
  );
}

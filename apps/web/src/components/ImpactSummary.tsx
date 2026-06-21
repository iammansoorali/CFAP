import { useYearWrapped } from "../hooks/useYearWrapped";

export default function ImpactSummary() {
  const { co2Saved, treesEquivalent, streakDays } = useYearWrapped();

  return (
    <div>
      <div>🌎 {co2Saved} kg CO₂ Saved</div>
      <div>🌳 {treesEquivalent} Trees Equivalent</div>
      <div>🔥 {streakDays} Day Streak</div>
    </div>
  );
}

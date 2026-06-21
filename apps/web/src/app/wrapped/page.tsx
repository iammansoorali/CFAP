import { useYearWrapped } from "../../hooks/useYearWrapped";

export default function WrappedPage() {
  const { co2Saved, treesEquivalent, streakDays } = useYearWrapped();

  return (
    <div>
      <h1>🎉 Your Year Wrapped</h1>

      <div>🌎 CO₂ Saved: {co2Saved} kg</div>
      <div>🌳 Trees Equivalent: {treesEquivalent}</div>
      <div>🔥 Longest Streak: {streakDays} days</div>
    </div>
  );
}

import { useStreak } from "../hooks/useStreak";

export default function EcoStreakWidget() {
  const { current } = useStreak();

  return (
    <div>
      🔥 {current} Day Streak
    </div>
  );
}

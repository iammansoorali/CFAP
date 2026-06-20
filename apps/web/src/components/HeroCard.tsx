type HeroCardProps = {
  username: string;
  preventedCO2: number;
  treesEquivalent: number;
};

export function HeroCard(props: HeroCardProps) {
  return (
    <div>
      <h1>Good evening, {props.username} 🌱</h1>
      <p>You've prevented {props.preventedCO2} kg CO₂</p>
      <p>≈ {props.treesEquivalent} Trees</p>
    </div>
  );
}

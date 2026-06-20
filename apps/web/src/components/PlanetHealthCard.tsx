type PlanetHealthCardProps = {
 health: string;
 improvement: number;
};

export function PlanetHealthCard(props: PlanetHealthCardProps) {
 return (
  <div>
   <h2>🟢 {props.health}</h2>
   <p>{props.improvement}% lower than last month</p>
   <p>Amazing progress!</p>
  </div>
 );
}

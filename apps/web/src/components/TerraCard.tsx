type TerraCardProps = {
 message: string;
};

export function TerraCard(props: TerraCardProps) {
 return (
  <div>
   <h2>🌎 Terra</h2>
   <p>{props.message}</p>
   <p>You're doing great.</p>
  </div>
 );
}

type ProgressRingProps={
 progress:number;
};

export function ProgressRing(props:ProgressRingProps){
 return(
  <div>
   <h2>Journey to Planet Protector</h2>
   <p>{props.progress}%</p>
  </div>
 );
}

type MissionCardProps = {
 title:string;
 progress:number;
};

export function MissionCard(props:MissionCardProps){
 return(
  <div>
   <h2>{props.title}</h2>
   <p>{props.progress}% complete</p>
  </div>
 );
}

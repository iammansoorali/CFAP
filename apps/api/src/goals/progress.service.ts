export function calculateGoalProgress(currentEmission:number,targetEmission:number): number {
  if (targetEmission === 0) return 100;
  return Math.max(0, ((targetEmission-currentEmission)/targetEmission)*100);
}

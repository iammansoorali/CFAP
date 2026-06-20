export interface Goal {
  targetReductionPercent: number;
  targetEmissionKg: number;
}

export function createGoal(targetReductionPercent:number,targetEmissionKg:number): Goal {
  return { targetReductionPercent, targetEmissionKg };
}

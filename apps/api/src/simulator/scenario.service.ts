export interface Scenario {
  name: string;
  reductionPercent: number;
}

export function createScenario(name:string,reductionPercent:number): Scenario {
  return { name, reductionPercent };
}

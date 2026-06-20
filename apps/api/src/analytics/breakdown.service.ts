export interface CategoryBreakdown {
  transportation: number;
  energy: number;
  food: number;
  consumption: number;
}

export function createBreakdown(transportation:number,energy:number,food:number,consumption:number): CategoryBreakdown {
  return { transportation, energy, food, consumption };
}

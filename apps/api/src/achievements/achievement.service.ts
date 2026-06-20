export interface Achievement {
  name: string;
  points: number;
}

export function createAchievement(name:string,points:number): Achievement {
  return { name, points };
}

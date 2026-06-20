export interface Habit {
  name: string;
  streak: number;
}

export function trackHabit(name:string,streak:number): Habit {
  return { name, streak };
}

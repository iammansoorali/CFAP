export interface Insight {
  message: string;
}

export function generateInsight(message:string): Insight {
  return { message };
}

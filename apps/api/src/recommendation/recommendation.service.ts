export interface Recommendation {
  title: string;
  description: string;
  impactScore: number;
}

export function createRecommendation(title: string, description: string): Recommendation {
  return {
    title,
    description,
    impactScore: 8,
  };
}

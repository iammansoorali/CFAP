export function getFoodRecommendations(emissionKg: number): string[] {
  if (emissionKg > 2000) {
    return ['Reduce red meat consumption', 'Increase plant-based meals', 'Buy locally sourced food'];
  }

  return ['Maintain current dietary habits'];
}

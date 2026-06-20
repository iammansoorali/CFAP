export function getTransportationRecommendations(emissionKg: number): string[] {
  if (emissionKg > 2000) {
    return ['Use public transport', 'Carpool more often'];
  }

  return ['Maintain current habits'];
}

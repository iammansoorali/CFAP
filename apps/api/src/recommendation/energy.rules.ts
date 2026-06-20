export function getEnergyRecommendations(emissionKg: number): string[] {
  if (emissionKg > 1500) {
    return ['Switch to LED lighting', 'Use efficient appliances'];
  }

  return ['Maintain current energy habits'];
}

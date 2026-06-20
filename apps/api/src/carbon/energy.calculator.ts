export function calculateEnergyEmission(electricityKwh: number, factor = 0.233): number {
  return electricityKwh * factor;
}

export function calculateTransportationEmission(distanceKm: number, factor = 0.192): number {
  return distanceKm * factor;
}

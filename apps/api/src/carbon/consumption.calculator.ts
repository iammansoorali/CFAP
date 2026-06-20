export function calculateConsumptionEmission(shoppingLevel: number, wasteLevel: number): number {
  return shoppingLevel * 50 + wasteLevel * 25;
}

export interface CarbonSummary {
  transportation: number;
  energy: number;
  food: number;
  consumption: number;
  totalEmissionKg: number;
}

export function calculateTotalCarbon(summary: Omit<CarbonSummary, 'totalEmissionKg'>): CarbonSummary {
  return {
    ...summary,
    totalEmissionKg:
      summary.transportation +
      summary.energy +
      summary.food +
      summary.consumption,
  };
}

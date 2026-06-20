export interface AnalyticsSummary {
  totalEmissionKg: number;
  estimatedSavingsKg: number;
}

export function createSummary(totalEmissionKg: number): AnalyticsSummary {
  return {
    totalEmissionKg,
    estimatedSavingsKg: totalEmissionKg * 0.1,
  };
}

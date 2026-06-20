export interface MonthlySummary {
 summary: string;
}

export function createMonthlySummary(summary:string): MonthlySummary {
 return { summary };
}

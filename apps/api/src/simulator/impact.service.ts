export interface SimulationImpact {
 beforeEmission:number;
 afterEmission:number;
 reductionKg:number;
}

export function calculateImpact(beforeEmission:number,afterEmission:number): SimulationImpact {
 return {
 beforeEmission,
 afterEmission,
 reductionKg: beforeEmission-afterEmission
 };
}

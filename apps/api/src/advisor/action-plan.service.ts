export interface ActionPlan {
 priorities: string[];
}

export function createActionPlan(priorities:string[]): ActionPlan {
 return { priorities };
}

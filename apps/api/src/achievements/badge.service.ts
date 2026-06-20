export function unlockBadge(level:number): string {
 if(level>=5) return 'Planet Protector';
 if(level>=4) return 'Carbon Crusher';
 if(level>=2) return 'Eco Warrior';
 return 'Green Starter';
}

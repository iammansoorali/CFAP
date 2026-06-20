export function calculateFoodEmission(dietType: 'VEGAN' | 'VEGETARIAN' | 'MIXED' | 'MEAT_HEAVY'): number {
  const factors = {
    VEGAN: 1000,
    VEGETARIAN: 1500,
    MIXED: 2500,
    MEAT_HEAVY: 3300,
  };

  return factors[dietType];
}

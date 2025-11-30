export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
}

export interface RecommendationResponse {
  recommendedProductId: string;
  reasoning: string;
}

export enum FlavorProfile {
  SWEET = 'SWEET',
  SAVORY = 'SAVORY',
  SPICY = 'SPICY',
  CLASSIC = 'CLASSIC'
}
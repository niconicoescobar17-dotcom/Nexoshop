export interface Sneaker {
  id: string;
  name: string;
  brand: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  tag: 'NEW' | 'TRENDING' | 'BACK IN STOCK' | 'LIMITED' | 'EXCLUSIVE';
  tagColor?: string;
  priceColor?: string;
  colors: {
    name: string;
    hex: string;
    border?: string;
  }[];
  defaultColorIndex: number;
  sizes: number[];
  description: string;
  story: string;
  sku: string;
  releaseYear: number;
  authenticityRating: number;
  inStock: boolean;
  imageSlice?: {
    sx: number;
    sy: number;
    sw: number;
    sh: number;
  };
  imageBackupUrl?: string;
}

export interface CartItem {
  id: string;
  sneaker: Sneaker;
  selectedSize: number;
  selectedColor: string;
  quantity: number;
}

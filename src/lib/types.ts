export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

export type Category = 'all' | 'electronics' | 'clothing' | 'home' | 'books' | 'sports';

export const CATEGORIES: { value: Category; label: string }[] = [
  { value: 'all', label: 'Todos os Produtos' },
  { value: 'electronics', label: 'Eletrônicos' },
  { value: 'clothing', label: 'Roupas' },
  { value: 'home', label: 'Casa & Decoração' },
  { value: 'books', label: 'Livros' },
  { value: 'sports', label: 'Esportes' },
];
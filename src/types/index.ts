export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  storeId: string;
  stock: number;
}

export interface Store {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  distance: string;
  freeDelivery: boolean;
  isOpen: boolean;
  address: string;
  categories: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'delivering' | 'delivered';
  createdAt: Date;
  storeId: string;
}

export type UserType = 'customer' | 'merchant' | null;

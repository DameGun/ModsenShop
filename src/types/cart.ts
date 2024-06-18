import { Product } from './product';

export type CartItem = {
  product: Product;
  quantity: number;
  total: number;
};

export type CartItemQuantityAction = {
  type: 'increment' | 'decrement';
  index: number;
};

export type CartCache = {
  items: CartItem[];
  totalPrice: number;
};

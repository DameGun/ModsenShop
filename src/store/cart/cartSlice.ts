import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store';
import { ToFixed } from '@utils/cart';
import { clearCartCache, getCartCache, setCartCache } from '@utils/localStorageActions';
import { CartCache, CartItem, CartItemQuantityAction } from 'types/cart';

export interface CartState {
  cache: CartCache;
}

const initialState: CartState = {
  cache: getCartCache(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<CartItem>) => {
      const { quantity, product } = action.payload;
      const existingItem = state.cache.items.find((item) => item.product.id == product.id);

      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.total = ToFixed(existingItem.total + existingItem.product.price * quantity);
      } else {
        state.cache.items.push(action.payload);
      }

      state.cache.totalPrice = ToFixed(state.cache.totalPrice + product.price * quantity);

      setCartCache(state.cache);
    },
    removeCartItem: (state, action: PayloadAction<number>) => {
      const deletedItem = state.cache.items.splice(action.payload, 1);
      state.cache.totalPrice = ToFixed(state.cache.totalPrice - deletedItem[0].total);

      setCartCache(state.cache);
    },
    setCartItemQuantity: (state, action: PayloadAction<CartItemQuantityAction>) => {
      const { index, type } = action.payload;
      const cartItem = state.cache.items.at(index);

      if (cartItem) {
        if (type == 'increment') {
          cartItem.quantity++;
          cartItem.total = ToFixed(cartItem.total + cartItem.product.price);
          state.cache.totalPrice = ToFixed(state.cache.totalPrice + cartItem.product.price);
        }
        if (type == 'decrement') {
          cartItem.quantity--;
          cartItem.total = ToFixed(cartItem.total - cartItem.product.price);
          state.cache.totalPrice = ToFixed(state.cache.totalPrice - cartItem.product.price);
        }
      }

      setCartCache(state.cache);
    },
    clearCart: (state) => {
      state.cache.items.length = 0;
      state.cache.totalPrice = 0;

      clearCartCache();
    },
  },
});

export const { addCartItem, setCartItemQuantity, removeCartItem, clearCart } = cartSlice.actions;

export const selectCartCache = (state: RootState) => state.cart.cache;

export default cartSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@store/cart/cartSlice';
import productsReducer from '@store/products/productsSlice';
import themeReducer from '@store/theme/themeSlice';
import { productsApi } from './products/productsApi';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    products: productsReducer,
    cart: cartReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

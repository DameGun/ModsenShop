import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store';
import { FilterParams, PriceSortType, SortType } from 'types/product';
import { productsApi } from './productsApi';

export interface ProductsState extends Omit<FilterParams, 'limit'> {}

const initialState: ProductsState = {
  sort: undefined,
  category: '',
  searchTerm: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSortOrder: (state, action: PayloadAction<SortType>) => {
      state.sort = action.payload;
    },
    setSortCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setPriceValues: (state, action: PayloadAction<PriceSortType>) => {
      const payload = action.payload;

      if (payload) {
        state.priceSortValues = payload;
      }
    },
    resetSortState: (state) => {
      return { ...initialState, priceConstants: state.priceConstants };
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(productsApi.endpoints.getAllProducts.matchFulfilled, (state, action) => {
      let minPrice = Math.floor(
        action.payload.reduce(
          (acc, current) => Math.min(acc, current.price),
          action.payload[0].price
        )
      );
      let maxPrice = Math.floor(
        action.payload.reduce(
          (acc, current) => Math.max(acc, current.price),
          action.payload[0].price
        )
      );

      if (maxPrice % 2 !== 0) maxPrice += 1;
      if (minPrice % 2 !== 0) minPrice -= 1;

      state.priceConstants = [minPrice, maxPrice];
    });
  },
});

export const { setSortOrder, setSortCategory, setSearchTerm, setPriceValues, resetSortState } =
  productsSlice.actions;

export const selectCurrentSortOrder = (state: RootState) => state.products.sort;
export const selectCurrentCategory = (state: RootState) => state.products.category;
export const selectCurrentSearchTerm = (state: RootState) => state.products.searchTerm;
export const selectPriceConstants = (state: RootState) => state.products.priceConstants;
export const selectPriceSortValues = (state: RootState) => state.products.priceSortValues;

export default productsSlice.reducer;

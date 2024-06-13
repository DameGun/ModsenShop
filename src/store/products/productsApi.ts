import { API_URL } from '@constants/environment';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Category, Product, QueryParams } from '@ts/product';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], QueryParams>({
      query: ({ sort, limit }) => `/products?limit=${limit}&sort=${sort}`,
    }),
    getProduct: builder.query<Product, number>({
      query: (id) => `/products/${id}`,
    }),
    getAllCategories: builder.query<Category[], void>({
      query: () => `products/categories`,
    }),
    getProductsByCategory: builder.query<Product[], Category>({
      query: (category) => `products/category/${category}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductQuery,
  useGetAllCategoriesQuery,
  useGetProductsByCategoryQuery,
} = productsApi;
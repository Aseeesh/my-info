"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY as string;
const apiUrl = process.env.NEXT_PUBLIC_REST_API_URL as string;
export type Product = {
  id: number;
  name: string;
  category: string;
  day: string;
  qty: string;
  price: number;
};
interface ProductsResponse {
  data: Product[];
}

interface ProductResponse {
  data: Product;
}

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  }),
  tagTypes: ["Products", "Product"],
  endpoints: (builder) => ({
    getLatestProducts: builder.query<ProductsResponse, void>({
      query: () => "api/products",
      providesTags: ["Products"],
    }),
    getProductById: builder.query<ProductResponse, number>({
      query: (id) => `/products/${id}?populate=*`,
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),
    getProductsByCategory: builder.query<ProductsResponse, string>({
      query: (category) =>
        `/products?filters[category][$eq]=${category}&populate=*`,
      providesTags: ["Products"],
    }),
  }),
});

export const {
  useGetLatestProductsQuery,
  useGetProductByIdQuery,
  useGetProductsByCategoryQuery,
} = productApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL_STAGE } from "./constants";
import { isLocal } from "../../helpers/general";
import prepareHeaders from "./helpers/prepareHeaders";

const url = isLocal() ? API_URL_STAGE : `${window.location.origin}`;

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders,
  }),
  endpoints: (builder) => ({
    /////////////// AUTH //////////////
    storeProduct: builder.mutation({
      query: (body) => {
        return {
          url: `/product/store`,
          method: "post",
          body,
        };
      },
    }),
    getProducts: builder.query({
      query: ({ page = 1, pageSize = 20, query }) => {
        return {
          url: `/product?page=${page}&page-size=${pageSize}`,
          method: "get",
        };
      },
    }),
    //parameters to be added
    getProductDetails: builder.query({
      query: (id) => {
        return {
          url: "/product/9ac4cb2a-6b40-43a3-b212-0cac883d0041",
          method: "get",
        };
      },
    }),
    updateProduct: builder.mutation({
      query: ({ id, body }) => {
        return {
          url: `/product/update/9ac45dde-3dad-44ae-80ab-e653737cff4e?_method=PATCH`,
          method: "put",
          body,
        };
      },
    }),
    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: "/product/delete/9ac47d7a-faa1-417f-9dcf-6d832fe02e1e",
          method: "delete",
        };
      },
    }),
  }),
});

export const {
  useStoreProductMutation,
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsApi;

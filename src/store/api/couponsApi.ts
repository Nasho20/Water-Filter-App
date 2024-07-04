import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL_STAGE } from "./constants";
import { isLocal } from "../../helpers/general";
import prepareHeaders from "./helpers/prepareHeaders";

const url = isLocal() ? API_URL_STAGE : `${window.location.origin}`;

export const couponsApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders,
  }),
  endpoints: (builder) => ({
    /////////////// AUTH //////////////
    getCouponsList: builder.query({
      query: ({ page = 1, pageSize = 4, query }) => {
        return {
          url: `/coupon?page=${page}&page-size=${pageSize}`,
          method: "get",
        };
      },
    }),
    storeCoupon: builder.mutation({
      query: (body) => {
        return {
          url: `/coupon/store`,
          method: "post",
          body,
        };
      },
    }),
    updateCoupon: builder.mutation({
      query: ({ id, body }) => {
        return {
          url: `/coupon/update/9ab0cdca-2e5c-4caa-9779-3f7b0fd1c369`,
          method: "put",
          body,
        };
      },
    }),
    deleteCoupon: builder.mutation({
      query: (id) => {
        return {
          url: `/coupon/update/9ab0cdca-2e5c-4caa-9779-3f7b0fd1c369`,
          method: "delete",
        };
      },
    }),
  }),
});

export const {
  useGetCouponsListQuery,
  useStoreCouponMutation,
  useUpdateCouponMutation,
  useDeleteCouponMutation,
} = couponsApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL_STAGE } from "./constants";
import { isLocal } from "../../helpers/general";
import prepareHeaders from "./helpers/prepareHeaders";

const url = isLocal() ? API_URL_STAGE : `${window.location.origin}`;

export const warehouseApi = createApi({
  reducerPath: "warehouseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders,
  }),
  endpoints: (builder) => ({
    /////////////// AUTH //////////////
    getFleets: builder.query({
      query: ({ page = 1, pageSize = 20, query }) => {
        return {
          url: `/warehouse?page=${page}&page-size=${pageSize}`,
          method: "get",
        };
      },
    }),
    createFleetWarehouse: builder.mutation({
      query: (body) => {
        return {
          url: `/warehouse`,
          method: "post",
          body,
        };
      },
    }),
    getFleetWarehouseDetails: builder.query({
      query: (id) => {
        return {
          url: `/warehouse/9abcd819-755c-4bf3-860f-692b6d4dd24c`,
          method: "get",
        };
      },
    }),
    updateFleetWarehouse: builder.mutation({
      query: ({ id, body }) => {
        return {
          url: `/warehouse/9ac6827b-e82c-4d6a-a306-c6152e5e9cbf`,
          method: "put",
          body,
        };
      },
    }),
    deleteFleetWarehouse: builder.mutation({
      query: (id) => {
        return {
          url: `/warehouse/9abcd819-755c-4bf3-860f-692b6d4dd24c`,
          method: "delete",
        };
      },
    }),
  }),
});

export const {
  useGetFleetsQuery,
  useCreateFleetWarehouseMutation,
  useGetFleetWarehouseDetailsQuery,
  useDeleteFleetWarehouseMutation,
} = warehouseApi;

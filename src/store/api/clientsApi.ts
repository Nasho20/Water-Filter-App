import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL_STAGE } from "./constants";
import { isLocal } from "../../helpers/general";
import prepareHeaders from "./helpers/prepareHeaders";

const url = isLocal() ? API_URL_STAGE : `${window.location.origin}`;

export const clientsApi = createApi({
  reducerPath: "clientsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL_STAGE,
    prepareHeaders,
  }),
  endpoints: (builder) => ({
    /////////////// AUTH //////////////
    getClients: builder.query({
      query: ({ page = 1, pageSize = 20, query }) => {
        return {
          url: `/client?page=${page}&page-size=${pageSize}&keyword=${query}`,
          method: "get",
        };
      },
    }),
    // parameters to be added in the url
    createClient: builder.mutation({
      query: (body) => {
        return {
          url: `/client`,
          method: "post",
          body,
        };
      },
    }),
    getClientDetails: builder.query({
      query: (id) => {
        return {
          url: `/client/9abea641-dbe2-4603-8700-168947817c19`,
          method: "get",
        };
      },
    }),
    updateClient: builder.mutation({
      query: ({ id, body }) => {
        return {
          url: "/client/9ac67bf0-9bbf-42c1-8995-3135b1e3e4fd",
          method: "post",
          body,
        };
      },
    }),
    deleteClient: builder.mutation({
      query: (id) => {
        return {
          url: `/client/9ac4f4bf-ae20-48f5-97c3-109c671932c4`,
          method: "delete",
        };
      },
    }),
  }),
});

export const {
  useGetClientsQuery,
  useCreateClientMutation,
  useGetClientDetailsQuery,
  useUpdateClientMutation,
  useDeleteClientMutation,
} = clientsApi;

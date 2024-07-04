import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL_STAGE, API_URL_PROD } from "./constants";
import { isLocal } from "../../helpers/general";
import prepareHeaders from "./helpers/prepareHeaders";

const url = isLocal() ? API_URL_STAGE : API_URL_PROD;

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders,
  }),
  endpoints: (builder) => ({
    /////////////// AUTH //////////////
    getUserList: builder.query({
      query: ({ page = 1, pageSize = 20, query }) => {
        return {
          url: `/user?page=${page}&page-size=${pageSize}`,
          method: "get",
        };
      },
    }),
    createUser: builder.mutation({
      query: (body) => {
        return {
          url: `/user`,
          method: "post",
          body,
        };
      },
    }),
    getUserDetails: builder.query({
      query: (id) => {
        return {
          url: `/user/9abea63f-97ee-48f2-a325-c91314b154fc`,
          method: "get",
        };
      },
    }),
    updateUser: builder.mutation({
      query: ({ id, body }) => {
        return {
          url: `/user/9ac4b99b-0173-4f39-9fcc-085805ab8068`,
          method: "put",
          body,
        };
      },
    }),
    deleteUser: builder.mutation({
      query: (id) => {
        return {
          url: `/user/9abc5341-1a69-4d36-ad51-ab4e342a5924`,
          method: "delete",
        };
      },
    }),
  }),
});

export const {
  useGetUserDetailsQuery,
  useCreateUserMutation,
  useGetUserListQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi;

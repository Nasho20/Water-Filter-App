import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL_STAGE } from "./constants";
import { isLocal } from "../../helpers/general";
import prepareHeaders from "./helpers/prepareHeaders";

const url = isLocal() ? API_URL_STAGE : `${window.location.origin}`;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL_STAGE,
    prepareHeaders,
  }),
  endpoints: (builder) => ({
    /////////////// AUTH //////////////
    loginUser: builder.mutation({
      query: (body) => {
        return {
          url: `/login`,
          method: "post",
          body,
        };
      },
    }),
    passwordReset: builder.mutation({
      query: (body) => {
        return {
          url: `/password-reset`,
          method: "post",
          body,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, usePasswordResetMutation } = authApi;

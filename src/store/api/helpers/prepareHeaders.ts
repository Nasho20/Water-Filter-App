import { BaseQueryApi } from "@reduxjs/toolkit/query";
import { MaybePromise } from "@reduxjs/toolkit/dist/query/tsHelpers";
import { AuthState } from "../../slices/authSlice";

const prepareHeaders: (
  headers: Headers,
  api: Pick<BaseQueryApi, "getState" | "extra" | "endpoint" | "type" | "forced">
) => MaybePromise<Headers | void> = async (headers, { getState, extra }) => {
  const token = (getState() as { auth: AuthState })?.auth?.token || "";

  headers.set("accept", "application/json");

  if (token) headers.set("authorization", `Bearer ${token}`);
  return headers;
};

export default prepareHeaders;

import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";
import { setUser } from "../slices/authSlice";
// import { useAppSelector } from "src/store/hooks";

const authenticator: Middleware =
  (api: MiddlewareAPI) => (next) => async (action) => {
    console.log("Authenticator middleware executing");
    if (isRejectedWithValue(action)) {
      if (action.payload.status === 401) {
        await next(
          setUser({
            token: null,
            role: null,
            userId: null,
          })
        );
      }
    }

    return next(action);
  };

export default authenticator;

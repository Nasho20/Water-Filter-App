import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/query";
import { isLocal } from "../helpers/general";

// api
import { authApi } from "./api/authApi";
import { clientsApi } from "./api/clientsApi";
import { couponsApi } from "./api/couponsApi";
import { productsApi } from "./api/productsApi";
import { usersApi } from "./api/usersApi";
import { warehouseApi } from "./api/warehouseApi";

import authReducer from "./slices/authSlice";
import authenticator from "./middlewares/authenticator";
import underConstruction from "./middlewares/underConstruction";
import persistCleanerMiddleware from "./middlewares/persistCleaner";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
  [clientsApi.reducerPath]: clientsApi.reducer,
  [couponsApi.reducerPath]: couponsApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [warehouseApi.reducerPath]: warehouseApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);
const persistCleaner = persistCleanerMiddleware(180000);

const existingMiddleware: Middleware[] = [
  authenticator,
  persistCleaner,
  underConstruction,
];

const apiMiddleware: Middleware[] = [
  authApi.middleware,
  clientsApi.middleware,
  couponsApi.middleware,
  productsApi.middleware,
  usersApi.middleware,
  warehouseApi.middleware,
];

const allMiddleware: Middleware[] = existingMiddleware.concat(
  ...apiMiddleware,
  authApi.middleware
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for non-serializable actions
      immutableCheck: false, // Disable immutable state check
    }).concat(allMiddleware),
  devTools: isLocal(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);

export const persistor = persistStore(store);

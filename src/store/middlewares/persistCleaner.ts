import { Middleware } from "@reduxjs/toolkit";

const persistCleanerMiddleware = (
  timeout: number
  // callback: () => void
): Middleware => {
  return () => (next) => (action) => {
    console.log("Persist Cleaner middleware executing");

    if (!localStorage.getItem("rootStateDeath")) {
      localStorage.setItem(
        "rootStateDeath",
        JSON.stringify(Date.now() + timeout)
      );
      return next(action);
    }

    const rootStateDeath = +(
      localStorage.getItem("rootStateDeath") || Date.now()
    );

    if (rootStateDeath > Date.now()) return next(action);

    const { auth, authApi } = JSON.parse(
      localStorage.getItem("persist:root") || "{}"
    );
    localStorage.setItem("root", JSON.stringify({ auth, authApi }));
    localStorage.setItem(
      "rootStateDeath",
      JSON.stringify(Date.now() + timeout)
    );
    // callback();

    return next(action);
  };
};

export default persistCleanerMiddleware;

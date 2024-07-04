import { Middleware } from "@reduxjs/toolkit";

const underConstruction: Middleware = () => (next) => (action) => {
  console.log("Under Construction middleware executing");

  try {
    if (action.payload.error.code === 206)
      window.location.href = "/under-construction";
  } catch (e) {
    //
  }

  return next(action);
};

export default underConstruction;

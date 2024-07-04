import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface AuthState {
  userId: string | null;
  token: string | null;
  role: string | null;
  profile_photo: string | null;
}

const initialState: AuthState = {
  token: null,
  role: null,
  userId: null,
  profile_photo: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        token: string | null;
        role: string | null;
        userId: string | null;
        // profile_photo: string | null;
      }>
    ) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.userId = action.payload.userId;
      // state.profile_photo = action.payload.profile_photo;
    },
    defaultState: (state) => {
      state = initialState;
    },
  },
});

export const { setUser, defaultState } = authSlice.actions;

export default authSlice.reducer;

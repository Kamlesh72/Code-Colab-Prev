import { createReducer } from "@reduxjs/toolkit";

export const rootReducer = createReducer(
  {
    isAuthenticated: false,
  },
  {
    login: (state, action) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
        state.isAuthenticated = false;
    },
  }
);

import { createSlice } from "@reduxjs/toolkit";

const logInState = createSlice({
  name: "logInState",
  initialState: {
    isLogIn: false,
  },
  reducers: {
    logIn(state) {
      state.isLogIn = true;
    },
    logOut(state) {
      state.isLogIn = false;
    },
  },
});

export const logInAction = logInState.actions;
export default logInState;

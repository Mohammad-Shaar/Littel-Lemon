import { createSlice } from "@reduxjs/toolkit";

const logInState = createSlice({
  name: "logInState",
  initialState: {
    isLogIn: false,
    showLogCard: false,
  },
  reducers: {
    logIn(state) {
      state.isLogIn = true;
    },
    logOut(state) {
      state.isLogIn = false;
    },
    togelLogCard(state) {
      state.showLogCard = !state.showLogCard;
    },
  },
});

export const logInAction = logInState.actions;
export default logInState;

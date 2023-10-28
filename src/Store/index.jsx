import { configureStore } from "@reduxjs/toolkit";
import reservation from "./reservation";
import dropeState from "./dropeDownState";
import confirming from "./confirming";
import logInState from "./LogInState";
import menuItems from "./MenuItems";

const store = configureStore({
  reducer: {
    reservation: reservation.reducer,
    dropeState: dropeState.reducer,
    confirming: confirming.reducer,
    logInState: logInState.reducer,
    menuItems: menuItems.reducer,
  },
});

export default store;

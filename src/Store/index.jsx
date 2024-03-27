import { configureStore } from "@reduxjs/toolkit";
import reservation from "./reservation";
import dropeState from "./dropeDownState";
import confirming from "./confirming";
import logInState from "./LogInState";
import orderdCardState from "./orderdCardState";
import orderdItems from "./orderdItems";

const store = configureStore({
  reducer: {
    reservation: reservation.reducer,
    dropeState: dropeState.reducer,
    confirming: confirming.reducer,
    logInState: logInState.reducer,
    orderdCardState: orderdCardState.reducer,
    orderdItems: orderdItems.reducer,
  },
});

export default store;

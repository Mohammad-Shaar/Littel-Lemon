import { configureStore } from "@reduxjs/toolkit";
import reservation from "./reservation";
import dropeState from "./dropeDownState";
import confirming from "./confirming";

const store = configureStore({
  reducer: {
    reservation: reservation.reducer,
    dropeState: dropeState.reducer,
    confirming: confirming.reducer,
  },
});

export default store;

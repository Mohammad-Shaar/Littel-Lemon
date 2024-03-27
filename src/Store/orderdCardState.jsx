import { createSlice } from "@reduxjs/toolkit";

const orderdCardState = createSlice({
  name: "orderdCardState",
  initialState: {
    showOrderdCard: false,
  },
  reducers: {
    togelOrderdCard(state) {
      state.showOrderdCard = !state.showOrderdCard;
    },
  },
});

export const orderdCardAction = orderdCardState.actions;
export default orderdCardState;

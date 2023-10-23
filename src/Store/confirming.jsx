import { createSlice } from "@reduxjs/toolkit";

const confirming = createSlice({
  name: "confirming",
  initialState: {
    seating: "Indoor seating",
    allInputsValid: false,
  },
  reducers: {
    seatingState(state, action) {
      state.seating = action.payload;
    },
    allowButton(state, action) {
      state.allInputsValid = action.payload;
    },
  },
});

export const confirmingAction = confirming.actions;
export default confirming;

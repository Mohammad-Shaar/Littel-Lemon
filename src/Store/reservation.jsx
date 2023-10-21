import { createSlice } from "@reduxjs/toolkit";

const reservation = createSlice({
  name: "reservation",
  initialState: {
    option: {
      occasion: "Occasion",
      diners: "No.of Diners",
      date: "Select Date",
      time: "Select Time",
    },
    hide: true,
  },
  reducers: {
    optionValue(state, action) {
      if (action.payload.includes("Diner")) {
        state.option.diners = action.payload;
      } else if (action.payload.includes("pm")) {
        state.option.time = action.payload;
      } else {
        state.option.occasion = action.payload;
      }
    },
    hide(state, action) {
      state.hide = action.payload;
    },
  },
});

export const reservationAction = reservation.actions;
export default reservation;

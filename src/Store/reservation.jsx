import { createSlice } from "@reduxjs/toolkit";

const initialOption = {
  occasion: "Occasion",
  diners: "No.of Diners",
  date: "Select Date",
  time: "Select Time",
};

const reservation = createSlice({
  name: "reservation",
  initialState: {
    option: { ...initialOption },
    hide: true,
    clickedOnReserv: false,
    allNotValid: false,
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
    changeDate(state, action) {
      state.option.date = action.payload;
    },
    hide(state, action) {
      state.hide = action.payload;
    },
    clickedReserv(state) {
      state.clickedOnReserv = true;
    },
    resetOption(state) {
      state.option = { ...initialOption };
      state.clickedOnReserv = false;
    },
    notValidToSend: (state) => {
      const allNotValid =
        state.option.occasion === initialOption.occasion ||
        state.option.diners === initialOption.diners ||
        state.option.date === initialOption.date ||
        state.option.time === initialOption.time;
      state.allNotValid = !allNotValid;
    },
  },
});

export const reservationAction = reservation.actions;
export default reservation;

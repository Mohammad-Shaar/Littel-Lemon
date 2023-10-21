import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hideDate: true,
  hideDiner: true,
  hideTime: true,
  hideOccasion: true,
};

const dropeState = createSlice({
  name: "dropeState",
  initialState,
  reducers: {
    dateState: (state) => {
      return { ...initialState, hideDate: !state.hideDate };
    },
    dinerState: (state) => {
      return { ...initialState, hideDiner: !state.hideDiner };
    },
    timeState: (state) => {
      return { ...initialState, hideTime: !state.hideTime };
    },
    occasionState: (state) => {
      return { ...initialState, hideOccasion: !state.hideOccasion };
    },
    resetState: () => {
      return { ...initialState };
    },
  },
});

export const dropeStateAction = dropeState.actions;
export default dropeState;

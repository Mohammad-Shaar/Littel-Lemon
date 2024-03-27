import { createSlice } from "@reduxjs/toolkit";

const orderdItems = createSlice({
  name: "cartItem",
  initialState: {
    item: [],
    totalPrice: 0,
  },
  reducers: {
    addItems(state, action) {
      const newItem = action.payload;
      const exsistingItem = state.item.find((item) => item.id === newItem.id);
      if (exsistingItem) {
        exsistingItem.amount = exsistingItem.amount + newItem.amount;
        exsistingItem.amountPrice = exsistingItem.price * exsistingItem.amount;
        state.totalPrice = state.totalPrice + exsistingItem.amountPrice;
      } else {
        state.item.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          amount: newItem.amount,
          amountPrice: newItem.amountPrice,
        });
        state.totalPrice = state.totalPrice + newItem.amountPrice;
      }
    },
    addItem(state, action) {
      const newItem = action.payload;
      const exsistingItem = state.item.find((item) => item.id === newItem.id);
      exsistingItem.amount++;
      exsistingItem.amountPrice = exsistingItem.amountPrice + newItem.price;
      state.totalPrice = state.totalPrice + exsistingItem.amountPrice;
    },
    removeItem(state, action) {
      const id = action.payload;
      const exsistingItem = state.item.find((item) => item.id === id);
      if (exsistingItem.amount === 1) {
        state.item = state.item.filter((item) => item.id !== id);
      } else {
        exsistingItem.amount--;
        exsistingItem.amountPrice =
          exsistingItem.amountPrice - exsistingItem.price;
      }
    },
  },
});

export const orderdItemsAction = orderdItems.actions;
export default orderdItems;

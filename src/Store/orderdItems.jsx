import { createSlice } from "@reduxjs/toolkit";

const orderdItems = createSlice({
  name: "cartItem",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addItems(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.amount += newItem.amount;
        existingItem.amountPrice = existingItem.price * existingItem.amount;
      } else {
        state.items.push({
          ...newItem,
          amountPrice: newItem.price * newItem.amount,
        });
      }
      state.totalPrice += newItem.amount * newItem.price;
      // console.log(state.totalPrice);
    },
    addItem(state, action) {
      const addedItem = action.payload;
      const existingItem = state.items.find((item) => item.id === addedItem.id);
      if (existingItem) {
        existingItem.amount++;
        existingItem.amountPrice += existingItem.price;
        state.totalPrice += existingItem.price;
      }
    },
    removeItem(state, action) {
      const removedItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === removedItem.id
      );

      if (existingItem) {
        state.totalPrice = state.totalPrice.toFixed(2) - existingItem.price;
        if (existingItem.amount === 1) {
          state.items = state.items.filter(
            (item) => item.id !== removedItem.id
          );
        } else {
          existingItem.amount--;
          existingItem.amountPrice -= existingItem.price;
        }
      }
    },
  },
});

export const orderdItemsAction = orderdItems.actions;
export default orderdItems;

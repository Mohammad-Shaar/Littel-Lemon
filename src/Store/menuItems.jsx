import { createSlice } from "@reduxjs/toolkit";
import meal1 from "../assets/meal1.jpg";
import meal2 from "../assets/meal2.jfif";
import meal3 from "../assets/meal3.jfif";
import meal4 from "../assets/meal4.jfif";
import meal5 from "../assets/meal5.jfif";
import drink1 from "../assets/drink1.jpg";
import drink2 from "../assets/drink2.jpg";
import drink3 from "../assets/drink3.jpg";
import drink4 from "../assets/drink4.jpg";
import drink5 from "../assets/drink5.jpg";
import desert1 from "../assets/desert5.jpg";
import desert2 from "../assets/desert4.jpg";
import desert3 from "../assets/desert2.jpg";
import desert4 from "../assets/desert3.jpg";
import desert5 from "../assets/desert1.jpg";

const menuItems = createSlice({
  name: "logInState",
  initialState: {
    meals: [
      {
        id: "m1",
        title: "Caesar salad",
        price: 9.99,
        img: meal1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
      },
      {
        id: "m2",
        title: "Crisp",
        price: 6.99,
        img: meal2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
      },
      {
        id: "m3",
        title: "chicken",
        price: 8.5,
        img: meal3,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
      },
      {
        id: "m4",
        title: "Fajita",
        price: 12.5,
        img: meal4,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
      },
      {
        id: "m5",
        title: "rice",
        price: 11,
        img: meal5,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
      },
    ],
    drinks: [
      {
        id: "dr1",
        title: "Raspberry syrup",
        price: 4.99,
        img: drink1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
      },
      {
        id: "dr2",
        title: "Lemonade",
        price: 3.5,
        img: drink2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
      },
      {
        id: "dr3",
        title: "Coconut syrup",
        price: 4.5,
        img: drink3,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
      },
      {
        id: "dr4",
        title: "Coffee",
        price: 4,
        img: drink4,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
      },
      {
        id: "dr5",
        title: "Iced coffee",
        price: 5.99,
        img: drink5,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
      },
    ],
    desserts: [
      {
        id: "d1",
        title: "cookies",
        price: 8.5,
        img: desert1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
      },
      {
        id: "d2",
        title: "cupcake",
        price: 7.99,
        img: desert2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
      },
      {
        id: "d3",
        title: "cheese cake",
        price: 9.5,
        img: desert3,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
      },
      {
        id: "d4",
        title: "Chocolate cake",
        price: 10,
        img: desert4,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
      },
      {
        id: "d5",
        title: "lemon cake",
        price: 10,
        img: desert5,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
      },
    ],
  },
});

export const menuItemsAction = menuItems.actions;
export default menuItems;

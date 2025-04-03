import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartReducer = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.cart = state.cart.map((items) =>
          items.id === action.payload.id
            ? { ...items, qty: items.qty + 1 }
            : items
        );
      } else {
        state.cart.push(action.payload);
      }
    },

    removeCart: (state, action) => {
      state.cart = state.cart.filter((curCart) => {
        return curCart.id !== action.payload.id;
      });
    },

    incrementQty: (state, action) => {
      state.cart = state.cart.map((items) =>
        items.id === action.payload.id
          ? { ...items, qty: items.qty + 1 }
          : items
      );
    },

    decrementQty: (state, action) => {
      state.cart = state.cart.map((items) =>
        items.id === action.payload.id
          ? { ...items, qty: items.qty - 1 }
          : items
      );
    },
  },
});

export const { addToCart, removeCart, incrementQty, decrementQty } =
  cartReducer.actions;
export default cartReducer.reducer;

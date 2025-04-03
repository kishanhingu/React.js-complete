import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/CartSlice";
import categoryReducer from "./features/category/CategorySlice";
import searchReducer from "./features/search/SearchSilce";

export const store = configureStore({
  reducer: {
    cartReducer: cartReducer,
    categoryReducer: categoryReducer,
    searchReducer: searchReducer,
  },
});

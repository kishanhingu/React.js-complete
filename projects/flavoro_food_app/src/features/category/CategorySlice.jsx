import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "All",
};

const categoryReducer = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = categoryReducer.actions;
export default categoryReducer.reducer;

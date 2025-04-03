import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

const searchSilce = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});
export const { setSearch } = searchSilce.actions;
export default searchSilce.reducer;

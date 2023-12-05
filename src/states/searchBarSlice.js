import { createSlice } from "@reduxjs/toolkit";

export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: {
    searchData: "",
  },
  reducers: {
    change: (state, action) => {
      state.searchData = action.payload;
    },
  },
});

export const { change } = searchBarSlice.actions;

export default searchBarSlice.reducer;

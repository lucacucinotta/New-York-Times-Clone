import { createSlice } from "@reduxjs/toolkit";

export const searchBarShownSlice = createSlice({
  name: "searchBarShown",
  initialState: {
    isShown: false,
  },
  reducers: {
    show: (state) => {
      state.isShown = true;
    },
    hide: (state) => {
      state.isShown = false;
    },
  },
});

export const { show, hide } = searchBarShownSlice.actions;

export default searchBarShownSlice.reducer;

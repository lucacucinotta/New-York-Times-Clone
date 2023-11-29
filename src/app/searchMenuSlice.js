import { createSlice } from "@reduxjs/toolkit";

export const searchMenuSlice = createSlice({
  name: "searchMenu",
  initialState: {
    searchData: "",
  },
  reducers: {
    change: (state, action) => {
      state.searchData = action.payload;
    },
  },
});

export const { change } = searchMenuSlice.actions;

export default searchMenuSlice.reducer;

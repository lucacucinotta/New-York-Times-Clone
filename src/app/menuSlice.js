import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "searchMenu",
  initialState: {
    isOpen: false,
  },
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { open, close } = menuSlice.actions;

export default menuSlice.reducer;

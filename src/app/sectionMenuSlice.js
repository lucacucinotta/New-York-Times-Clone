import { createSlice } from "@reduxjs/toolkit";

export const sectionMenuSlice = createSlice({
  name: "sectionMenu",
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

export const { open, close } = sectionMenuSlice.actions;

export default sectionMenuSlice.reducer;

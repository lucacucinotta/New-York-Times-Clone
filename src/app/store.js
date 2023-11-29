import { configureStore } from "@reduxjs/toolkit";
import sectionMenuReducer from "./sectionMenuSlice";
import searchMenuReducer from "./searchMenuSlice";

export default configureStore({
  reducer: {
    sectionMenuState: sectionMenuReducer,
    searchMenuState: searchMenuReducer,
  },
});

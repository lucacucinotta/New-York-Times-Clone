import { configureStore } from "@reduxjs/toolkit";
import sectionMenuReducer from "./sectionMenuSlice";
import searchBarReducer from "./searchBarSlice";
import searchBarShownReducer from "./searchBarShownSlice";

export default configureStore({
  reducer: {
    sectionMenuState: sectionMenuReducer,
    searchBarState: searchBarReducer,
    searchBarShownState: searchBarShownReducer,
  },
});

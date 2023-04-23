import { configureStore } from "@reduxjs/toolkit";
import SidebarPopupSlice from "../slices/SidebarPopupSlice";

const store = configureStore({
  reducer: {
    sidebarPopup: SidebarPopupSlice,
  },
});
export default store;

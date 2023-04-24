import { createSlice } from "@reduxjs/toolkit";
import Deal from "../../pages/Home/Deal/Deal";

const sidebarPopupSlice = createSlice({
  name: "sidebarPopup",
  initialState: {
    open: false,
    content: "",
  },
  reducers: {
    openSidebar: (state, action) => {
      console.log("action", action.payload);
      state.open = true;
      state.content = action.payload;
    },
    closeSidebar: (state, action) => {
      state.open = false;
    },
  },
});
export default sidebarPopupSlice.reducer;
export const { openSidebar, closeSidebar } = sidebarPopupSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const sidebarPopupSlice = createSlice({
  name: "sidebarPopup",
  initialState: false,
  reducers: {
    openSidebar: (state, action) => {
      return true;
    },
    closeSidebar: (state, action) => {
      return false;
    },
  },
});
export default sidebarPopupSlice.reducer;
export const { openSidebar, closeSidebar } = sidebarPopupSlice.actions;

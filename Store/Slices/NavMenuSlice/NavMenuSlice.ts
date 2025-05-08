import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navMenuStatus: false,
};

export const NavMenuSlice = createSlice({
  name: "NavListSlice",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.navMenuStatus = true;
    },
    closeMenu: (state) => {
      state.navMenuStatus = false;
    },
  },
});

export default NavMenuSlice.reducer;
export const NavMenuSliceActions = NavMenuSlice.actions;

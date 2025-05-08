import { configureStore } from "@reduxjs/toolkit";
import NavMenuSlice from "./Slices/NavMenuSlice/NavMenuSlice";

export const store = configureStore({
  reducer: { NavMenuSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

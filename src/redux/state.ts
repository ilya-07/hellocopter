import { configureStore } from "@reduxjs/toolkit";
import addHelicopterSlice from "./addHelicopterSlice";
import showBascketSlice from "./showBascketSlice";
export const store = configureStore({
  reducer: {
    bascket: addHelicopterSlice,
    show: showBascketSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

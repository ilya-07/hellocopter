import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./state";
interface IState {
  bascketState: boolean;
}
const initialState: IState = {
  bascketState: false,
};

const showSlice = createSlice({
  name: "show",
  initialState,
  reducers: {
    showBasck(state) {
      state.bascketState = true;
    },
    hideBasck(state) {
      state.bascketState = false;
    },
  },
});
export default showSlice.reducer;
export const { showBasck, hideBasck } = showSlice.actions;
export const showState = (state: RootState) => state.show.bascketState;

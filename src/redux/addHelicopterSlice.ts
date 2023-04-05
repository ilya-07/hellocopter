import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./state";
interface IState {
  countAdded: number;
  products: {
    title: string;
    count: number;
    price: number;
    startPrice: number;
  }[];
  general: number;
}
const initialState: IState = {
  countAdded: 0,
  products: [],
  general: 0,
};
const helocopterSlice = createSlice({
  name: "bascket",
  initialState,
  reducers: {
    minusOne(state, { payload }) {
      state.countAdded--;
      const finded: {
        title: string;
        startPrice: number;
        count: number;
        price: number;
      } = state.products.find((el) => el.title === payload.title) || {
        title: "",
        startPrice: 0,
        count: 0,
        price: 0,
      };
      if (finded.count > 1) {
        finded.count--;
        finded.price = finded.startPrice * finded.count;
      } else {
        const findI = state.products.findIndex(
          (el) => el.title === finded.title
        );
        state.products.splice([findI], 1);
      }
      state.general = state.products.reduce((acc, el) => acc + el.price, 0);
    },
    plusOne(state, { payload }) {
      state.countAdded++;
      const finded: {
        title: string;
        startPrice: number;
        count: number;
        price: number;
      } = state.products.find((el) => el.title === payload.title) || {
        title: "",
        startPrice: 0,
        count: 0,
        price: 0,
      };
      finded.count++;
      finded.price = finded.startPrice * finded.count;
      state.general = state.products.reduce((acc, el) => acc + el.price, 0);
    },
    addCount: {
      prepare({ img, title, brend, model, price, id, count }) {
        return {
          payload: {
            img,
            title,
            brend,
            model,
            price,
            id,
            count,
            startPrice: price,
          },
        };
      },
      reducer(state, action) {
        state.countAdded += 1;
        const finded = state.products.find(
          (el) => action.payload.title == el.title
        );
        if (finded) {
          finded.count++;
          finded.price *= finded.count;
        } else {
          state.products.push(action.payload);
        }

        state.general = state.products.reduce((acc, el) => acc + el.price, 0);
      },
    },
  },
});
export default helocopterSlice.reducer;
export const { addCount, minusOne, plusOne } = helocopterSlice.actions;
export const countState = (state: RootState) => state.bascket.countAdded;
export const productsState = (state: RootState) => state.bascket.products;
export const generalSUmm = (state: RootState) => state.bascket.general;

import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { RootState } from "store";
import swal from "sweetalert";
import { productCart } from "types";

const initialState: productCart[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<productCart>) => {
      return [...state, action.payload];
    },

    plusCount: (state, action: PayloadAction<number>) => {
      const prevProducts = [...current(state)];

      const newProducts = prevProducts.map((product) => {
        if (product.id === action.payload) {
          return { ...product, count: product.count + 1 };
        }
        return product;
      });
      return newProducts;
    },

    minusCount: (state, action: PayloadAction<number>) => {
      const prevProducts = [...current(state)];

      const newProducts = prevProducts.map((product) => {
        if (product.id === action.payload) {
          if (product.count < 2) {
            swal({
              title: "The minimum number of shoes to buy is 1",
              icon: "error",
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              buttons: "ok" as any,
            });
          } else {
            return { ...product, count: product.count - 1 };
          }
        }
        return product;
      });
      return newProducts;
    },

    removeProduct: (state, action: PayloadAction<number>) => {
      const prevProducts = [...current(state)];

      const newState = prevProducts.filter((product) => {
        return product.id !== action.payload;
      });
      return newState;
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, minusCount, plusCount, removeProduct } =
  cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

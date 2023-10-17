import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { RootState } from "store";
import { product } from "types";

const initialState: product[] = [];

export const getProductsFromServer = createAsyncThunk<product[]>(
  "product/getProductsFromServer",
  async () => {
    return fetch("https://nikeapi.iran.liara.run/products")
      .then((res) => res.json())
      .then((data) => data);
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    cheapest_product: (state) => {
      const prevState = [...current(state)];
      const newState = prevState.sort(
        (a, b) => a.price.current_price - b.price.current_price
      );
      return newState;
    },

    expensivest_product: (state) => {
      const prevState = [...current(state)];
      const newState = prevState.sort(
        (a, b) => b.price.current_price - a.price.current_price
      );
      return newState;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      getProductsFromServer.fulfilled,
      (_state, action) => action.payload
    );
  },
});

export default productSlice.reducer;

export const { cheapest_product, expensivest_product } = productSlice.actions;

export const selectProduct = (state: RootState) => state.product;

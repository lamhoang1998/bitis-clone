import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  girls: [],
};

const girlSlice = createSlice({
  name: "girlProduct",
  initialState,
  reducers: {
    addGirlProduct(state, action) {
      // prepare(productVariants, id) {
      //   return {
      //     payload: { productVariants, id },
      //   };
      // },
      // reducer(state, action) {
      //   state.girls = action.payload.productVariants;
      //   state.girlId = +action.payload.id;
      // },
      state.girls = action.payload;
    },
  },
});

export const { addGirlProduct } = girlSlice.actions;

export default girlSlice.reducer;

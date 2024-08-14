import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  women: [],
};

const womenSlice = createSlice({
  name: "menProduct",
  initialState,
  reducers: {
    addWomenProduct(state, action) {
      // prepare(productVariants, id) {
      //   return {
      //     payload: { productVariants, id },
      //   };
      // },
      // reducer(state, action) {
      //   state.women = action.payload.productVariants;
      //   state.womenId = +action.payload.id;
      // },
      state.women = action.payload;
    },
  },
});

export const { addWomenProduct } = womenSlice.actions;

export default womenSlice.reducer;

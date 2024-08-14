import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  men: [],
};

const menSlice = createSlice({
  name: "menProduct",
  initialState,
  reducers: {
    addMenProduct(state, action) {
      // prepare(productVariants, id) {
      //   return {
      //     payload: { productVariants, id },
      //   };
      // },
      // reducer(state, action) {
      //   state.men = action.payload.productVariants;
      //   state.menId = +action.payload.id;
      // },
      state.men = action.payload;
    },
  },
});

export const { addMenProduct } = menSlice.actions;

export default menSlice.reducer;

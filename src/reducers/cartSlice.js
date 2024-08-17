import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartQuantity: 0,
};

const cartSlice = createSlice({
  name: "menProduct",
  initialState,
  reducers: {
    addToCart(state, action) {
      const isInCart = state.cart.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size,
      );

      if (isInCart) {
        const updateCart = state.cart.map((item) => {
          if (
            item.id === action.payload.id &&
            item.size === action.payload.size
          ) {
            return {
              ...item,
              quantity: Number(item.quantity) + Number(action.payload.quantity),
            };
          } else {
            return item;
          }
        });

        state.cart = [...updateCart];
        state.cartQuantity = state.cartQuantity + action.payload.quantity;
      } else {
        state.cart = [...state.cart, action.payload];
        state.cartQuantity = state.cartQuantity + action.payload.quantity;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;

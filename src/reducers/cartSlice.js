import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartQuantity: 0,
};

const cartSlice = createSlice({
  name: "cartProduct",
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

    deleteCartItem(state, action) {
      const newListItem = state.cart.filter(
        (item) => item.id !== action.payload,
      );

      state.cart = [...newListItem];

      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },

    increQuantity(state, action) {
      const newListItem = state.cart.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: Number(item.quantity) + 1,
          };
        } else {
          return item;
        }
      });

      state.cart = [...newListItem];

      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },

    decreQuantity(state, action) {
      const newListItem = state.cart.map((item) => {
        if (item.id === action.payload && item.quantity > 1) {
          return {
            ...item,
            quantity: Number(item.quantity) - 1,
          };
        } else {
          return item;
        }
      });

      state.cart = [...newListItem];

      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, deleteCartItem, increQuantity, decreQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;

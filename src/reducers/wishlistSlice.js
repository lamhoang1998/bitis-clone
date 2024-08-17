import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishList: localStorage.getItem("wishListItems")
    ? JSON.parse(localStorage.getItem("wishListItems"))
    : [],
  isAdded: false,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList(state, action) {
      const isInWishList = state.wishList.find(
        (item) => item.itemId === action.payload.itemId,
      );

      if (isInWishList) {
        alert("cannot add to wishList since the product is already added");
      } else {
        state.wishList = [...state.wishList, action.payload];
      }
      localStorage.setItem("wishListItems", JSON.stringify(state.wishList));
    },

    deleteWishListItem(state, action) {
      const newWishList = state.wishList.filter(
        (item) => item.id !== action.payload,
      );

      state.wishList = [...newWishList];

      localStorage.setItem("wishListItems", JSON.stringify(state.wishList));
    },
  },
});

export const { addToWishList, deleteWishListItem } = wishlistSlice.actions;

export default wishlistSlice.reducer;

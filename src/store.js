import { configureStore } from "@reduxjs/toolkit";

import menReducer from "./reducers/menSlice";
import womenReducer from "./reducers/womenSlice";
import girlReducer from "./reducers/girlSlice";
import cartReducer from "./reducers/cartSlice";
import wishlistReducer from "./reducers/wishlistSlice";

const store = configureStore({
  reducer: {
    men: menReducer,
    women: womenReducer,
    girls: girlReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default store;

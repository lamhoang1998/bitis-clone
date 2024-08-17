import { configureStore } from "@reduxjs/toolkit";

import menReducer from "./reducers/menSlice";
import womenReducer from "./reducers/womenSlice";
import girlReducer from "./reducers/girlSlice";
import cartReducer from "./reducers/cartSlice";

const store = configureStore({
  reducer: {
    men: menReducer,
    women: womenReducer,
    girls: girlReducer,
    cart: cartReducer,
  },
});

export default store;

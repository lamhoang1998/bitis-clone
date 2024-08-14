import { configureStore } from "@reduxjs/toolkit";

import menReducer from "./reducers/menSlice";
import womenReducer from "./reducers/womenSlice";
import girlReducer from "./reducers/girlSlice";

const store = configureStore({
  reducer: {
    men: menReducer,
    women: womenReducer,
    girls: girlReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slicer/userSlicer";
import cartReducer from "./slicer/cartSlicer";

export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import productReducer from "./Slices/productsSlice";
import { productsApi } from "./services/api";
import videoReducer from "./Slices/videoSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    video: videoReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

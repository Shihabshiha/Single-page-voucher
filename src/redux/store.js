import { configureStore } from "@reduxjs/toolkit";
import detailTableSlice from "./detailTableSlice";

export const store = configureStore({
  reducer: {
    detailTable: detailTableSlice,
  },
});

export default store;

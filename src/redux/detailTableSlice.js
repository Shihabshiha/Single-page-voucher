import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    itemCode: "",
    itemName: "",
    qty: 0,
    rate: 0,
  },
];

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    addRow: (state) => {
      state.push({ itemCode: "", itemName: "", qty: 0, rate: 0 });
    },
  },
});

export const { addRow } = detailSlice.actions;
export default detailSlice.reducer;

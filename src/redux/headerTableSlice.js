import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headerData: {
    vrNo: "",
    vrDate: "",
    status: "",
    acName: "",
    acAmt: 0,
  },
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setVrNo: (state, action) => {
      state.headerData.vrNo = action.payload;
    },
    setVrDate: (state, action) => {
      state.headerData.vrDate = action.payload;
    },
    setStatus: (state, action) => {
      state.headerData.status = action.payload;
    },
    setAcName: (state, action) => {
      state.headerData = { ...state.headerData, acName: action.payload };
    },
    setTotalAmt: (state, action) => {
      state.headerData.acAmt = action.payload;
    },
  },
});

export const { setVrNo, setVrDate, setAcName, setStatus, setTotalAmt } =
  headerSlice.actions;
export default headerSlice.reducer;

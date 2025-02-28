import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  domain: "",
};

const domainSlice = createSlice({
  name: "domain",
  initialState,
  reducers: {
    changeDomain: (state, action) => {
      state.domain = action.payload;
    },
  },
});

export const { changeDomain } = domainSlice.actions;
export default domainSlice.reducer;

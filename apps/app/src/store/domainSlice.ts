import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  currDomain: string;
  domains: string[];
} = {
  currDomain: "",
  domains: [],
};

const domainSlice = createSlice({
  name: "domain",
  initialState,
  reducers: {
    changeDomain: (state, action) => {
      state.currDomain = action.payload;
    },
    setDomains: (state, action) => {
      state.domains = action.payload;
    },
    addDomain: (state, action) => {
      state.domains.push(action.payload);
    },
    removeDomain: (state, action) => {
      state.domains = state.domains.filter(
        (domain) => domain !== action.payload
      );
    },
  },
});

export const { changeDomain, setDomains, addDomain, removeDomain } =
  domainSlice.actions;

export default domainSlice.reducer;

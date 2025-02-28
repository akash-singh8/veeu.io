import { configureStore } from "@reduxjs/toolkit";

import domainReducer from "@/store/domainSlice";

const store = configureStore({
  reducer: domainReducer,
});

export default store;

export type StoreState = ReturnType<typeof store.getState>;

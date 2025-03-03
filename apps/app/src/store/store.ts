import { configureStore } from "@reduxjs/toolkit";

import domainReducer from "@/store/domainSlice";
import recordReducer from "@/store/recordSlice";

const store = configureStore({
  reducer: { domain: domainReducer, record: recordReducer },
});

export default store;

export type StoreState = ReturnType<typeof store.getState>;

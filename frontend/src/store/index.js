import { configureStore } from "@reduxjs/toolkit";
import candidateSlice from "./candidateSlice";

const votingStore = configureStore({
  reducer: {
    candidate: candidateSlice.reducer,
  },
});

export default votingStore;

import { createSlice } from "@reduxjs/toolkit";

const candidateSlice = createSlice({
  name: "candidate",
  initialState: [],
  reducers: {
    setCandidateDetails: (state, action) => {
      return action.payload;
    },
  },
});

export const candidateSliceActions = candidateSlice.actions;

export default candidateSlice;

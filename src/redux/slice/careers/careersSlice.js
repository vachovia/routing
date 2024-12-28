import { createSlice } from "@reduxjs/toolkit";

import { getCareersAction, getCareerDetailsAction } from "./actions";

const initialState = {
  loading: false,
  error: null,
  careers: [],
  career: {},
};

const careersSlice = createSlice({
  name: "careers",
  initialState,
  reducers: {
    careersDummyAction: (state, action) => {},
  },
  extraReducers: (builder) => {
    // Get All Careers
    builder.addCase(getCareersAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCareersAction.fulfilled, (state, action) => {
      state.loading = false;
      state.careers = action.payload;
    });
    builder.addCase(getCareersAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.careers = [];
    });
    // Get Single Career
    builder.addCase(getCareerDetailsAction.pending, (state, action) => {
      state.loading = true;
      state.career = null;
    });
    builder.addCase(getCareerDetailsAction.fulfilled, (state, action) => {
      state.loading = false;
      state.career = action.payload;
    });
    builder.addCase(getCareerDetailsAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.career = null;
    });
  },
});

const careersReducer = careersSlice.reducer;

export const { careersDummyAction } = careersSlice.actions;

export default careersReducer;

import { createSlice } from "@reduxjs/toolkit";

import { createContactAction } from "./actions";

const initialState = {
  loading: false,
  success: false,
  error: null,
  contacts: [],
  contact: {},
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    // Create Contact
    builder.addCase(createContactAction.pending, (state, action) => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(createContactAction.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.contact = action.payload?.data;
    });
    builder.addCase(createContactAction.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.contact = null;
      state.error = action.payload;
    });
  },
});

const contactsReducer = contactsSlice.reducer;

export default contactsReducer;

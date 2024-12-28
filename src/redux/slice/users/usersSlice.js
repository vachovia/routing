import { createSlice } from "@reduxjs/toolkit";
import {
  logoutUserAction
} from "./actions";

const initialState = {
  user: {
    name: "Vlad"
  }
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    // Logout
    builder.addCase(logoutUserAction.fulfilled, (state, action) => {
      state.error = null;
      state.user = null;
    });
  },
});

const usersReducer = usersSlice.reducer;

export default usersReducer;

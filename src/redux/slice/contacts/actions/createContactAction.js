import axios from "axios";
import baseURL from "./../../../utils/baseUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";

const createContactAction = createAsyncThunk(
  "contacts/create",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const url = `${baseURL}/contacts`;
      const config = {
        headers: {
          "Content-Type": "application/json"
        },
      };
      const { email, message } = payload;
      const body = {
        email,
        message,
      };
      const res = await axios.post(url, body, config);
      return res.data;
    }
    catch (error) {
      console.log(error?.response?.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export default createContactAction;

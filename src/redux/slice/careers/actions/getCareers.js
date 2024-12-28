import axios from "axios";
import baseURL from "./../../../utils/baseUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getCareersAction = createAsyncThunk(
  "careers/getCareers",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const url = `${baseURL}/careers`;

      const config = {
        headers: {
          "Content-Type": "application/json"
        },
      };

      const { data } = await axios.get(url, config);

      return data;
    }
    catch (error) {

      console.log(error?.response?.data);
      
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export default getCareersAction;

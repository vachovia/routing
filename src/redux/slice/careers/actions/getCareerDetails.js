import axios from "axios";
import baseURL from "./../../../utils/baseUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getCareerDetailsAction = createAsyncThunk(
  "careers/getSingleCareer",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { id } = payload;
      const url = `${baseURL}/careers/${id}`;

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

export default getCareerDetailsAction;

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const portativeGet = createAsyncThunk(
    'portative,get',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(
          'https://540dfa28d410fca7.mokky.dev/contacts'
        );
        console.log(response.data); 
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  

export const portativePost = createAsyncThunk(
    'portative/post',
    async (data, { rejectWithValue, dispatch }) => {
      try {
        await axios.post('https://540dfa28d410fca7.mokky.dev/contacts', data);
  
        dispatch(portativeGet());
      } catch (error) {
        const axios = error;
        return rejectWithValue(axios.message);
      }
    }
  );
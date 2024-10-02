import { createSlice } from '@reduxjs/toolkit';
import { portativeGet, portativePost } from './portative.Thunk';

const initialState = {
  isLogin: false,
  data: [],
  loading: false,
  error: '',
};

const portativeSlice = createSlice({
  name: 'portative',
  initialState,
  reducers: {
    isLoginTrue(state) {
      state.isLogin = true;
    },
    isLoginFalse(state) {
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(portativePost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(portativePost.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(portativePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(portativeGet.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(portativeGet.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      });
      builder.addCase(portativeGet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { isLoginTrue, isLoginFalse } = portativeSlice.actions;

export default portativeSlice;

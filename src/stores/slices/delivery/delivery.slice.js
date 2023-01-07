import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const deliverySlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const deliveryReducer = deliverySlice.reducer;

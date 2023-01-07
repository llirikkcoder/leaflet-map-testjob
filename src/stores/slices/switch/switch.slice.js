import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedRouteIndex: 0,
};

export const switchSlice = createSlice({
  name: "switch",
  initialState,
  reducers: {
    setSelectedRouteIndex(state, action) {
      state.selectedRouteIndex = action.payload;
    },
  },
});

export const switchReducer = switchSlice.reducer;

import { combineReducers } from "@reduxjs/toolkit";
import { deliveryReducer, switchReducer } from "./slices";

export const rootReducer = combineReducers({
  delivery: deliveryReducer,
  switch: switchReducer,
});

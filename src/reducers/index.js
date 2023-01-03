import { combineReducers } from "redux";
import deliveryDataReducer from "./deliveryDataReducer";

export default combineReducers({
  deliveryData: deliveryDataReducer,
});
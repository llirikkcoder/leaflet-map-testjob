import { combineReducers } from "redux";
import deliveryDataReducer from "./deliveryDataReducer";
import deliverySwitchReducer from "./deliverySwitchReducer";

export default combineReducers({
  deliveryData: deliveryDataReducer,
  deliverySwitch: deliverySwitchReducer,
});

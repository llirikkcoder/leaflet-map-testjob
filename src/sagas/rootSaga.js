import { all } from "redux-saga/effects";
import { watchFetchDeliveryData } from "./watchFetchDeliveryData";

export default function* rootSaga() {
  yield all([watchFetchDeliveryData()]);
}
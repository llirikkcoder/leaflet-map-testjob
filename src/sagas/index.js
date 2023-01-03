import { all } from "redux-saga/effects";
import fetchDeliveryDataSaga from "./fetchDeliveryDataSaga";
import switchRouteSaga from "./switchRouteSaga";

export default function* rootSaga() {
  yield all([fetchDeliveryDataSaga(), switchRouteSaga()]);
}

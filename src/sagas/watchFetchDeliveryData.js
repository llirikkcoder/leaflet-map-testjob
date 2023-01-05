import { takeLatest } from "redux-saga/effects";
import fetchDeliveryDataSaga from "./fetchDeliveryDataSaga";

export default function* watchFetchDeliveryData() {
  yield takeLatest(fetchDeliveryDataSaga);
}

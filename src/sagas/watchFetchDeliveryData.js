import { takeEvery } from "redux-saga/effects";
import fetchDeliveryDataSaga from "./fetchDeliveryDataSaga";

export default function* watchFetchDeliveryData() {
  yield takeEvery("FETCH_DELIVERY_DATA", fetchDeliveryDataSaga);
}

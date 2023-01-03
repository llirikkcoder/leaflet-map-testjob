import { takeLatest } from "redux-saga/effects";
import { FETCH_DELIVERY_DATA } from "../actions";
import fetchDeliveryDataSaga from "./fetchDeliveryDataSaga";

export default function* watchFetchDeliveryData() {
  yield takeLatest(FETCH_DELIVERY_DATA, fetchDeliveryDataSaga);
}

import { takeLatest } from "redux-saga/effects";
import fetchDeliveryDataSaga from "./fetchDeliveryDataSaga";
import { FETCH_DELIVERY_DATA_SUCCESS } from './../actions';

export default function* watchFetchDeliveryData() {
  yield takeLatest(FETCH_DELIVERY_DATA_SUCCESS, fetchDeliveryDataSaga);
}

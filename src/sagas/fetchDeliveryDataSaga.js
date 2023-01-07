// import { call, put, takeLatest } from 'redux-saga/effects';
// import { SELECT_ROUTE } from '../actions';
// import { fetchDeliveryDataSuccess, fetchDeliveryDataError } from '../actions';

// function* fetchDeliveryDataSaga(action) {
//   try {
//     const response = yield call(fetch, `http://router.project-osrm.org/route/v1/driving/${action.payload}?overview=false`);
//     const data = yield response.json();
//     yield put(fetchDeliveryDataSuccess(data));
//   } catch (error) {
//     yield put(fetchDeliveryDataError(error));
//   }
// }

// export default function* watchFetchDeliveryData() {
//   yield takeLatest(SELECT_ROUTE, fetchDeliveryDataSaga);
// }


import axios from "axios";
import { call, put } from "redux-saga/effects";
import { fetchDeliveryDataSuccess } from "../actions";

export default function* fetchDeliveryDataSaga() {
  try {
    const response = yield call(axios.get, "http://localhost:3000/delivery-data");
    yield put(fetchDeliveryDataSuccess(response.data));
  } catch (error) {
    console.error(error);
  }
}
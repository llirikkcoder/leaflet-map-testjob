import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { fetchDeliveryDataSuccess } from "./actions";

function* fetchDeliveryDataSaga() {
  try {
    const response = yield call(axios.get, "http://localhost:3000/delivery-data");
    yield put(fetchDeliveryDataSuccess(response.data));
  } catch (error) {
    console.error(error);
  }
}

export function* watchFetchDeliveryData() {
  yield takeLatest("FETCH_DELIVERY_DATA", fetchDeliveryDataSaga);
}

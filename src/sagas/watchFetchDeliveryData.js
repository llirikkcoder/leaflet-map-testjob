import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { fetchDeliveryData } from "../actions";

function* fetchDeliveryDataSaga() {
  try {
    const response = yield call(axios.get, "http://localhost:3001/delivery-data");
    console.log("response:", response)
    yield put(fetchDeliveryData(response.data));
  } catch (error) {
    console.error(error);
  }
}

export function* watchFetchDeliveryData() {
  yield takeLatest("FETCH_DELIVERY_DATA", fetchDeliveryDataSaga);
}

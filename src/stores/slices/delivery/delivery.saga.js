import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchDeliveryDataAction } from "./delivery.action";
import { deliverySlice } from "./delivery.slice";

const request = async () => {
  const response = await axios.get("http://localhost:3001/delivery");

  return response;
};

const { setData, setError } = deliverySlice.actions;

function* fetchDeliveryDataSaga() {
  try {
    const response = yield call(request);

    yield put(setData(response.data));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* deliverySaga() {
  yield takeLatest(fetchDeliveryDataAction, fetchDeliveryDataSaga);
}

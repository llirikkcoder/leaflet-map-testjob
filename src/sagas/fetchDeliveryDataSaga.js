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
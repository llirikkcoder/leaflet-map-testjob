import { all } from "redux-saga/effects";
import { deliverySaga } from "./slices/delivery";

export default function* rootSaga() {
  yield all([deliverySaga()]);
}

import { takeLatest, put } from "redux-saga/effects";
import { SET_SELECTED_ROUTE_INDEX } from "../actions";

export default function* switchRouteSaga() {
  yield takeLatest(SET_SELECTED_ROUTE_INDEX, function* (action) {
    try {
      const index = action.index;
      yield put({ type: "UPDATE_SELECTED_ROUTE_INDEX", index });
    } catch (error) {
      console.error(error);
    }
  });
}

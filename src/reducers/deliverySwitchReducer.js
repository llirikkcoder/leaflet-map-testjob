// reducers/index.js

import { SET_SELECTED_ROUTE_INDEX } from "../actions";

const initialState = {
  selectedRouteIndex: 0,
};

const switchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_ROUTE_INDEX:
      return {
        ...state,
        selectedRouteIndex: action.index,
      };
    default:
      return state;
  }
};

export default switchReducer;

export const FETCH_DELIVERY_DATA_SUCCESS = "FETCH_DELIVERY_DATA_SUCCESS";
export const SWITCH = "SWITCH";
export const SET_SELECTED_ROUTE_INDEX = "SET_SELECTED_ROUTE_INDEX";
export const FETCH_DELIVERY_DATA_ERROR = "FETCH_DELIVERY_DATA_ERROR";
export const SELECT_ROUTE = 'SELECT_ROUTE';

export const fetchDeliveryDataSuccess = (data) => ({
  type: FETCH_DELIVERY_DATA_SUCCESS,
  payload: data,
});

export const switchRoute = (data) => ({
  type: SWITCH,
  payload: data,
});

export const setSelectedRouteIndex = (index) => ({
  type: SET_SELECTED_ROUTE_INDEX,
  index,
});

export const fetchDeliveryDataError = (error) => ({
  type: FETCH_DELIVERY_DATA_ERROR,
  error,
});

export const selectRoute = (route) => ({
  type: SELECT_ROUTE,
  payload: route,
});
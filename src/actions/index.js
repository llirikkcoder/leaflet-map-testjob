export const FETCH_DELIVERY_DATA = "FETCH_DELIVERY_DATA";
export const FETCH_DELIVERY_DATA_SUCCESS = "FETCH_DELIVERY_DATA_SUCCESS";
export const SWITCH = "SWITCH";
export const SET_SELECTED_ROUTE_INDEX = "SET_SELECTED_ROUTE_INDEX";

export const fetchDeliveryData = (data) => ({
  type: FETCH_DELIVERY_DATA,
  payload: data,
});

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

export const fetchDeliveryData = (data) => ({
  type: "FETCH_DELIVERY_DATA",
  payload: data,
});

export const fetchDeliveryDataSuccess = (data) => ({
  type: "FETCH_DELIVERY_DATA_SUCCESS",
  payload: data,
});

const initialState = {
  data: [
    {
      startPoint: {
        lat: 59.84660399,
        lng: 30.29496392,
      },
      endPoint: {
        lat: 59.82934196,
        lng: 30.42423701,
      },
    },
    {
      startPoint: {
        lat: 59.82934196,
        lng: 30.42423701,
      },
      endPoint: {
        lat: 59.82761295,
        lng: 30.41705607,
      },
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_DELIVERY_DATA_SUCCESS":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}

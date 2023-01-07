import { FETCH_DELIVERY_DATA_ERROR, FETCH_DELIVERY_DATA_SUCCESS } from "../actions";

// const initialState = {
//   data: [],
//   startPoint: {},
//   endPoint: {},
//   error: null,
// };

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
    {
      startPoint: {
        lat: 59.83567701,
        lng: 30.38064206,
      },
      endPoint: {
        lat: 59.84660399,
        lng: 30.29496392,
      },
    },
    {
      startPoint: {
        lat: 59.84660399,
        lng: 30.29496392,
      },
      endPoint: {
        lat: 59.82761295,
        lng: 30.41705607,
      },
    },
    {
      startPoint: {
        lat: 59.83567701,
        lng: 30.38064206,
      },
      endPoint: {
        lat: 59.54660399,
        lng: 29.99496392,
      },
    },
  ],
  startPoint: {},
  endPoint: {},
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DELIVERY_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    // case FETCH_DELIVERY_DATA_ERROR:
    //   return {
    //     ...state,
    //     error: action.error,
    //   };
    default:
      return state;
  }
}

const initialState = {
    data: [],
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
  
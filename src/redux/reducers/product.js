import { GET_PRODUCT_INFO } from "../actions/types";

const initialState = {
  product: {},
  error: {}
}

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCT_INFO:
      return {
        ...state,
        product: payload,
        loading: false
      };
    default:
      return state;
  }
}

export default productReducer;
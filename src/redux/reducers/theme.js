import { CHANGE_THEME } from "../actions/types";

const initialState = {
  themeStatus: true,
}

const themeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_THEME:
      return {
        ...state,
        themeStatus: payload
      }
    default:
      return state;
  }
}

export default themeReducer;
import { CHANGE_THEME } from "./types";

const changeTheme = (themeValue) => async (dispatch) => {
  dispatch({
    type: CHANGE_THEME,
    payload: !themeValue
  });
}

export default changeTheme;
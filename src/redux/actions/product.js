import api from "../../utils/api";
import { GET_PRODUCT_INFO, GET_PRODUCT_ERROR } from "./types";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await api.get('/product/6781/');
    dispatch({
      type: GET_PRODUCT_INFO,
      payload: res.data
    });
  }
  catch (err) {
    dispatch({
      type: GET_PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}
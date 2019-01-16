import axios from 'axios';
import { endPoints } from '../../services/config';

export const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';
export const GET_PRODUCT_LIST_FROM_SV = 'GET_PRODUCT_LIST_FROM_SV';

export const getProductList = (res) => {
  return {
    type: GET_PRODUCT_LIST,
    payload: res
  }
}

export const getProductListFromSV = () => {
  return dispatch => {
    axios.get(endPoints.GET_PRODUCT_LIST)
      .then((data) => {
        dispatch(getProductList(data));
      })
  }
}
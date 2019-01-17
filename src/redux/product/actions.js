import axios from 'axios';
import { endPoints } from '../../services/config';

const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';
const GET_PRODUCT_LIST_FROM_SV = 'GET_PRODUCT_LIST_FROM_SV';

// get product list
const getProductList = (res) => {
  return {
    type: GET_PRODUCT_LIST,
    payload: res
  }
}

// get product list from server
const getProductListFromSV = () => {
  return dispatch => {
    axios.get(endPoints.GET_PRODUCT_LIST)
      .then((data) => {
        dispatch(getProductList(data));
      })
  }
}

const actions = {
  GET_PRODUCT_LIST,
  GET_PRODUCT_LIST_FROM_SV,
  getProductList,
  getProductListFromSV
}

export default actions;
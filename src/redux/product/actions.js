import axios from 'axios';
import { endPoints } from '../../services/config';

const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';
const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';
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

// add new product to store
const addNewProduct = (res) => {
  return {
    type: ADD_NEW_PRODUCT,
    payload: res
  }
}

// create new product
const createNewProduct = (data) => {
  return dispatch => {
    axios.post(endPoints.CREATE_PRODUCT_BY_ADMIN, data)
    .then(() => {
      dispatch(addNewProduct(data))
    })
    .catch(err => alert('Mã Sản Phẩm Đã Tồn Tại Hoặc Gặp Lỗi Trong Quá Trình Tạo! Vui Lòng Tạo Lại!')); 
  }
}

const actions = {
  GET_PRODUCT_LIST,
  ADD_NEW_PRODUCT,
  getProductList,
  getProductListFromSV,
  addNewProduct,
  createNewProduct
}

export default actions;
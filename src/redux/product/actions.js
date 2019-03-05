import axios from "axios";
import { endPoints } from "../../services/config";
import {
  clearAuthUser,
  showNotification,
  change_Unicode
} from "../../utilities/fnUtil";

const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";
const ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT";
const UPDATE_PRODUCT_BY_ID = "UPDATE_PRODUCT_BY_ID";
const DELETE_PRODUCT_BY_ID = "DELETE_PRODUCT_BY_ID";
// get product list
const getProductList = res => {
  return {
    type: GET_PRODUCT_LIST,
    payload: res
  };
};

// get product list from server for admin page
const getProductListFromSVAdminPage = () => {
  return dispatch => {
    axios.get(endPoints.PRODUCT_LIST_ADMIN_API).then(data => {
      dispatch(getProductList(data));
    });
  };
};

// get product list from server
const getProductListFromSV = () => {
  return dispatch => {
    axios.get(endPoints.PRODUCT_LIST_API).then(data => {
      dispatch(getProductList(data));
    });
  };
};

// add new product to store
const addNewProduct = res => {
  return {
    type: ADD_NEW_PRODUCT,
    payload: res
  };
};

// create new product
const createNewProduct = data => {
  return dispatch => {
    data.searchName = change_Unicode(data.productName);
    axios
      .post(endPoints.PRODUCT_API, data)
      .then(() => {
        dispatch(addNewProduct(data));
      })
      .catch(err =>
        err.response && err.response.data.code === "002"
          ? clearAuthUser()
          : err.response.data.code === "006"
          ? showNotification({
              type: "error",
              message: err.response.data.message
            })
          : showNotification({
              type: "error",
              message:
                "Có lỗi trong quá trình xử lý! Vui lòng thực hiện lại hoặc liên hệ quản trị trang!"
            })
      );
  };
};

// update product to store

const updateProductById = (id, data) => {
  return {
    type: UPDATE_PRODUCT_BY_ID,
    payload: {
      id,
      data
    }
  };
};

// update product to server
const updateProductToSV = (id, data) => {
  data.searchName = change_Unicode(data.productName);
  return dispatch => {
    axios
      .patch(endPoints.PRODUCT_API + id, data)
      .then(() => {
        dispatch(updateProductById(id, data));
      })
      .catch(err => {
        err.response && err.response.data.code === "002"
          ? clearAuthUser()
          : showNotification({
              type: "error",
              message:
                "Lỗi Cập Nhật Sản Phẩm Hoặc Sản Phẩm Chưa Có! Vui Lòng Cập Nhật Lại!"
            });
      });
  };
};

// delete product to store
const deleteProductById = id => {
  return {
    type: DELETE_PRODUCT_BY_ID,
    payload: id
  };
};

// delete product to server
const deleteProductToSV = id => {
  return dispatch => {
    axios
      .delete(endPoints.PRODUCT_API + id)
      .then(() => dispatch(deleteProductById(id)))
      .catch(err =>
        err.response && err.response.data.code === "002"
          ? clearAuthUser()
          : showNotification({
              type: "error",
              message:
                "Lỗi Xóa Sản Phẩm Hoặc Server Lỗi! Vui Lòng Kiểm Tra Lại!"
            })
      );
  };
};

const actions = {
  GET_PRODUCT_LIST,
  ADD_NEW_PRODUCT,
  UPDATE_PRODUCT_BY_ID,
  DELETE_PRODUCT_BY_ID,
  getProductListFromSV,
  getProductListFromSVAdminPage,
  createNewProduct,
  updateProductToSV,
  deleteProductToSV
};

export default actions;

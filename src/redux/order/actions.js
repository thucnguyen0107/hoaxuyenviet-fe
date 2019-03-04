import axios from "axios";
import { endPoints } from "../../services/config";
import { clearAuthUser, showNotification } from "../../utilities/fnUtil";

const GET_ORDER_LIST = "GET_ORDER_LIST";
const UPDATE_ORDER_BY_ID = "UPDATE_ORDER_BY_ID";

// get ORDER list
const getOrderList = res => {
  return {
    type: GET_ORDER_LIST,
    payload: res
  };
};

// get ORDER list from server
const getOrderListFromSV = () => {
  return dispatch => {
    axios.get(endPoints.ORDER_LIST_API).then(data => {
      dispatch(getOrderList(data));
    });
  };
};

// update ORDER to store

const updateOrderById = (id, data) => {
  return {
    type: UPDATE_ORDER_BY_ID,
    payload: {
      id,
      data
    }
  };
};

// update ORDER to server
const updateOrderToSV = (id, data) => {
  return dispatch => {
    axios
      .patch(endPoints.ORDER_API + id, data)
      .then(() => {
        dispatch(updateOrderById(id, data));
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

const actions = {
  GET_ORDER_LIST,
  UPDATE_ORDER_BY_ID,
  getOrderListFromSV,
  updateOrderToSV
};

export default actions;

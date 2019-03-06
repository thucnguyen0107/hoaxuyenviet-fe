import axios from "axios";
import { endPoints } from "../../services/config";
import { clearAuthUser, showNotification } from "../../utilities/fnUtil";
import loadingScreen from "../../utilities/loadingScreen";

const GET_USER_LIST = "GET_USER_LIST";
const CREATE_NEW_USER = "CREATE_NEW_USER";
const DELETE_USER_BY_ID = "DELETE_USER_BY_ID";
const GET_USER_BY_ID = "GET_USER_BY_ID";
const UPDATE_USER_BY_ID = "UPDATE_USER_BY_ID";
const GET_CART = "GET_CART";
const UPDATE_CART = "UPDATE_CART";

// get cart
const getCart = res => {
  return {
    type: GET_CART,
    payload: res
  };
};

// update cart
const updateCart = res => {
  return {
    type: UPDATE_CART,
    payload: res
  };
};

const getCartFromSV = userId => {
  return dispatch =>
    axios
      .get(endPoints.CART_API + userId)
      .then(data => {
        if (data) {
          dispatch(getCart(data));
        } else {
          const cartModel = { userInfo: userId, productOrder: [] };
          axios
            .post(endPoints.CART_API, cartModel)
            .then(res => dispatch(getCart(res)));
        }
      })
      .catch(err => {
        if (err === "002") {
          clearAuthUser("/login");
        }
      });
};

const updateCartFromSV = (cartId, cartData) => {
  return dispatch =>
    axios
      .patch(endPoints.CART_API + cartId, cartData)
      .then(() => {
        return dispatch(updateCart(cartData));
      })
      .catch(err => {
        if (err === "002") {
          clearAuthUser("/login");
        }
      });
};

// get User list
const getUserList = res => {
  return {
    type: GET_USER_LIST,
    payload: res
  };
};

// get User list from server
const getUserListFromSV = () => {
  return dispatch => {
    axios.get(endPoints.USER_LIST_API).then(data => {
      dispatch(getUserList(data));
    });
  };
};

// get user by id
const getUserById = res => {
  return {
    type: GET_USER_BY_ID,
    payload: res
  };
};

// get user by id from sv
const getUserFromSV = id => {
  return dispatch => {
    axios
      .get(endPoints.USER_API + id)
      .then(data => {
        dispatch(getUserById(data));
      })
      .catch(err => {
        if (err === "002") {
          clearAuthUser("/login");
        }
      });
  };
};

// update user by id
const updateUserById = res => {
  return {
    type: UPDATE_USER_BY_ID,
    payload: res
  };
};

// update user by id from server
const updateUserFromSV = (id, data) => {
  loadingScreen.showLoading();
  return dispatch =>
    axios
      .patch(endPoints.USER_API + id, data)
      .then(() => {
        loadingScreen.hideLoading();
        return dispatch(updateUserById(data));
      })
      .catch(err => {
        if (err === "002") {
          clearAuthUser("/login");
        }
      });
};

// create new User to store
const createNewUser = res => {
  return {
    type: CREATE_NEW_USER,
    payload: res
  };
};

// create new User
const createNewUserFromSV = data => {
  loadingScreen.showLoading();
  return dispatch => {
    axios
      .post(endPoints.CREATE_USER_API, data)
      .then(res => {
        loadingScreen.hideLoading();
        return dispatch(createNewUser(res));
      })
      .catch(err => {
        loadingScreen.hideLoading();
        err.response && err.response.data.code === "006"
          ? showNotification({
              type: "error",
              message: err.response.data.message
            })
          : showNotification({
              type: "error",
              message:
                "Có lỗi trong quá trình xử lý! Vui lòng thực hiện lại hoặc liên hệ quản trị trang!"
            });
      });
  };
};

// update User to store

// const updateUserById = (id, data) => {
//   return {
//     type: UPDATE_USER_BY_ID,
//     payload: {
//       id,
//       data
//     }
//   };
// };

// update User to server
// const updateUserToSV = (id, data) => {
//   return dispatch => {
//     axios
//       .patch(endPoints.UPDATE_USER_BY_ADMIN + id, data)
//       .then(() => {
//         dispatch(updateUserById(id, data));
//       })
//       .catch(err => {
//         err.response.data.code === "002"
//           ? clearAuthUser()
//           : alert(
//               "Lỗi Cập Nhật Sản Phẩm Hoặc Sản Phẩm Chưa Có! Vui Lòng Cập Nhật Lại!"
//             );
//       });
//   };
// };

// delete User to store
const deleteUserById = id => {
  return {
    type: DELETE_USER_BY_ID,
    payload: id
  };
};

// delete User to server
const deleteUserToSV = id => {
  return dispatch => {
    axios
      .delete(endPoints.USER_API + id)
      .then(() => dispatch(deleteUserById(id)))
      .catch(err =>
        err.response && err.response.data.code === "002"
          ? clearAuthUser()
          : showNotification({
              type: "error",
              message:
                "Lỗi Xóa Người Dùng Hoặc Server Lỗi! Vui Lòng Kiểm Tra Lại!"
            })
      );
  };
};

const actions = {
  GET_USER_LIST,
  CREATE_NEW_USER,
  DELETE_USER_BY_ID,
  GET_USER_BY_ID,
  UPDATE_USER_BY_ID,
  GET_CART,
  UPDATE_CART,
  getUserListFromSV,
  deleteUserToSV,
  getUserFromSV,
  updateUserFromSV,
  getCartFromSV,
  updateCartFromSV,
  createNewUserFromSV
};

export default actions;

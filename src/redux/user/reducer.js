import actionTypes from "./actions";
import { updateObject, showNotification } from "../../utilities/fnUtil";

const initState = {
  userList: [],
  user: {},
  cart: {}
};

const reducer = (state = initState, action) => {
  let clonedUserList;
  switch (action.type) {
    case actionTypes.GET_USER_LIST:
      return updateObject(state, { userList: action.payload });

    case actionTypes.CREATE_NEW_USER:
      showNotification({ message: "Tạo Tài Khoản Thành Công!" });
      return updateObject(state, { user: action.payload });

    case actionTypes.DELETE_USER_BY_ID:
      clonedUserList = state.userList.slice();
      let deleteElement = clonedUserList.find(item => {
        return item._id === action.payload;
      });
      clonedUserList.splice(clonedUserList.indexOf(deleteElement), 1);
      showNotification({ message: "Xóa Người Dùng Thành Công!" });
      return updateObject(state, { userList: clonedUserList });

    case actionTypes.GET_USER_BY_ID:
      return updateObject(state, { user: action.payload });

    case actionTypes.UPDATE_USER_BY_ID:
      showNotification({ message: "Cập Nhật Người Dùng Thành Công!" });
      return updateObject(state, { user: action.payload });

    case actionTypes.GET_CART:
      return updateObject(state, { cart: action.payload });

    case actionTypes.UPDATE_CART:
      showNotification({ message: "Cập Nhật Giỏ Hàng Thành Công!" });
      return updateObject(state, { cart: action.payload });

    default:
      return state;
  }
};

export default reducer;

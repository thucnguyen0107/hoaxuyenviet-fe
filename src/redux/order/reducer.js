import actionTypes from "./actions";
import { updateObject, showNotification } from "../../utilities/fnUtil";

const initState = {
  orderList: []
};

const reducer = (state = initState, action) => {
  let clonedOrderList;
  switch (action.type) {
    case actionTypes.GET_ORDER_LIST:
      return updateObject(state, { orderList: action.payload });

    case actionTypes.UPDATE_ORDER_BY_ID:
      clonedOrderList = state.orderList.slice();
      let updateElement = clonedOrderList.find(item => {
        return item._id === action.payload.id;
      });
      clonedOrderList[clonedOrderList.indexOf(updateElement)] =
        action.payload.data;
      showNotification({message: 'Cập Nhật Đơn Hàng Thành Công!'})
      return updateObject(state, { orderList: clonedOrderList });

    default:
      return state;
  }
};

export default reducer;

import actionTypes from "./actions";
import { updateObject, showNotification } from "../../utilities/fnUtil";

const initState = {
  productList: []
};

const reducer = (state = initState, action) => {
  let clonedProductList;
  switch (action.type) {
    case actionTypes.GET_PRODUCT_LIST:
      return updateObject(state, { productList: action.payload });

    case actionTypes.ADD_NEW_PRODUCT:
      clonedProductList = state.productList.slice();
      clonedProductList.unshift(action.payload);
      showNotification({message: 'Thêm Sản Phẩm Mới Thành Công!'})
      return updateObject(state, { productList: clonedProductList });

    case actionTypes.UPDATE_PRODUCT_BY_ID:
      clonedProductList = state.productList.slice();
      let updateElement = clonedProductList.find(item => {
        return item._id === action.payload.id;
      });
      clonedProductList[clonedProductList.indexOf(updateElement)] =
        action.payload.data;
        showNotification({message: 'Cập Nhật Sản Phẩm Thành Công!'})
      return updateObject(state, { productList: clonedProductList });

    case actionTypes.DELETE_PRODUCT_BY_ID:
      clonedProductList = state.productList.slice();
      let deleteElement = clonedProductList.find(item => {
        return item._id === action.payload;
      });
      clonedProductList.splice(clonedProductList.indexOf(deleteElement), 1);
      showNotification({message: 'Xóa Sản Phẩm Thành Công!'})
      return updateObject(state, { productList: clonedProductList });

    default:
      return state;
  }
};

export default reducer;

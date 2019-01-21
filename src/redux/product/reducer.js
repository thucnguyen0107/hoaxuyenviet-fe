import actionTypes from "./actions";
import { updateObject } from "../../utilities/fnUtil";

const initState = {
  productList: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_LIST:
      return updateObject(state, { productList: action.payload });
    case actionTypes.ADD_NEW_PRODUCT:
      const clonedProductList = state.productList.slice();
      clonedProductList.unshift(action.payload);
      return updateObject(state, { productList: clonedProductList })
    default:
      return state;
  }
};

export default reducer;

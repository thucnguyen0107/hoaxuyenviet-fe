import actionTypes from "./actions";
import updateObject from "../../utilities/updateObjectRedux";

const initState = {
  productList: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_LIST:
      return updateObject(state, { productList: action.payload });
    default:
      return state;
  }
};

export default reducer;

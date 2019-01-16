import {
  GET_PRODUCT_LIST
} from './actions';
import updateObject from '../../utilities/updateObjectRedux';

const initState = {
  productList: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return updateObject(state, action.payload);
    default:
      return state;
  }
}

export default reducer;
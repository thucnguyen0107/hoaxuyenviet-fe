import actionTypes from "./actions";
import {updateObject} from "../../utilities/fnUtil";

const initialState = {
  userPhone: null,
  auth: null,
  role: null,
  token: null,
  userInfo: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_AUTH_USER:
      return updateObject(state, action.payload);
    case actionTypes.GET_AUTH_USER_FROM_LS:
      return updateObject(state, action.payload);
    default:
      return state;
  }
};

export default reducer;

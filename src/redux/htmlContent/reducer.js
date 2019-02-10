import actionTypes from "./actions";
import { updateObject, showNotification } from "../../utilities/fnUtil";

const initialState = {
  htmlContent: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_HTML_CONTENT:
      return updateObject(state, { htmlContent: action.payload });

    case actionTypes.UPDATE_HTML_CONTENT:
    showNotification({message: 'Cập Nhật Thành Công!'})
      return updateObject(state, { htmlContent: action.payload });
    default:
      return state;
  }
};

export default reducer;

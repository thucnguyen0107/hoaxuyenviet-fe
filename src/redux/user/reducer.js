import actionTypes from "./actions";
import { updateObject } from "../../utilities/fnUtil";

const initState = {
  userList: [],
  user: {}
};

const reducer = (state = initState, action) => {
  let clonedUserList;
  switch (action.type) {
    case actionTypes.GET_USER_LIST:
      return updateObject(state, { userList: action.payload });

    case actionTypes.DELETE_USER_BY_ID:
      clonedUserList = state.userList.slice();
      let deleteElement = clonedUserList.find(item => {
        return item._id === action.payload;
      });
      clonedUserList.splice(clonedUserList.indexOf(deleteElement), 1);
      return updateObject(state, { userList: clonedUserList });

    case actionTypes.GET_USER_BY_ID:
      return updateObject(state, { user: action.payload });

    case actionTypes.UPDATE_USER_BY_ID:
      return updateObject(state, { user: action.payload });
    default:
      return state;
  }
};

export default reducer;

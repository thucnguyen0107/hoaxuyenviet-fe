import actionTypes from "./actions";
import { updateObject } from "../../utilities/fnUtil";

const initState = {
  userList: []
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

    default:
      return state;
  }
};

export default reducer;

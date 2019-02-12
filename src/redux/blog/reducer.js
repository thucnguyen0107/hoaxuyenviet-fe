import actionTypes from "./actions";
import { updateObject, showNotification } from "../../utilities/fnUtil";

const initState = {
  blogList: []
};

const reducer = (state = initState, action) => {
  let clonedBlogList;
  switch (action.type) {
    case actionTypes.GET_BLOG_LIST:
      return updateObject(state, { blogList: action.payload });

    case actionTypes.ADD_NEW_BLOG:
      clonedBlogList = state.blogList.slice();
      clonedBlogList.unshift(action.payload);
      showNotification({message: 'Thêm Sản Phẩm Mới Thành Công!'})
      return updateObject(state, { blogList: clonedBlogList });

    case actionTypes.UPDATE_BLOG_BY_ID:
      clonedBlogList = state.blogList.slice();
      let updateElement = clonedBlogList.find(item => {
        return item._id === action.payload.id;
      });
      clonedBlogList[clonedBlogList.indexOf(updateElement)] =
        action.payload.data;
        showNotification({message: 'Cập Nhật Sản Phẩm Thành Công!'})
      return updateObject(state, { blogList: clonedBlogList });

    case actionTypes.DELETE_BLOG_BY_ID:
      clonedBlogList = state.blogList.slice();
      let deleteElement = clonedBlogList.find(item => {
        return item._id === action.payload;
      });
      clonedBlogList.splice(clonedBlogList.indexOf(deleteElement), 1);
      showNotification({message: 'Xóa Sản Phẩm Thành Công!'})
      return updateObject(state, { blogList: clonedBlogList });

    default:
      return state;
  }
};

export default reducer;

import axios from "axios";
import { endPoints } from "../../services/config";
import { clearAuthUser, showNotification } from "../../utilities/fnUtil";

const GET_BLOG_LIST = "GET_BLOG_LIST";
const ADD_NEW_BLOG = "ADD_NEW_BLOG";
const UPDATE_BLOG_BY_ID = "UPDATE_BLOG_BY_ID";
const DELETE_BLOG_BY_ID = "DELETE_BLOG_BY_ID";
// get blog list
const getBlogList = res => {
  return {
    type: GET_BLOG_LIST,
    payload: res
  };
};

// get blog list from server
const getBlogListFromSV = () => {
  return dispatch => {
    axios.get(endPoints.BLOG_LIST_API).then(data => {
      dispatch(getBlogList(data));
    });
  };
};

// add new blog to store
const addNewBlog = res => {
  return {
    type: ADD_NEW_BLOG,
    payload: res
  };
};

// create new blog
const createNewBlog = data => {
  return dispatch => {
    axios
      .post(endPoints.BLOG_API, data)
      .then(() => {
        dispatch(addNewBlog(data));
      })
      .catch(err =>
        err.response && err.response.data.code === "002"
          ? clearAuthUser()
          : err.response.data.code === "006"
          ? showNotification({
              type: "error",
              message: err.response.data.message
            })
          : showNotification({
              type: "error",
              message:
                "Có lỗi trong quá trình xử lý! Vui lòng thực hiện lại hoặc liên hệ quản trị trang!"
            })
      );
  };
};

// update blog to store

const updateBlogById = (id, data) => {
  return {
    type: UPDATE_BLOG_BY_ID,
    payload: {
      id,
      data
    }
  };
};

// update blog to server
const updateBlogToSV = (id, data) => {
  return dispatch => {
    axios
      .patch(endPoints.BLOG_API + id, data)
      .then(() => {
        dispatch(updateBlogById(id, data));
      })
      .catch(err => {
        err.response && err.response.data.code === "002"
          ? clearAuthUser()
          : showNotification({
              type: "error",
              message:
                "Lỗi Cập Nhật Blog Hoặc Blog Chưa Có! Vui Lòng Cập Nhật Lại!"
            });
      });
  };
};

// delete blog to store
const deleteBlogById = id => {
  return {
    type: DELETE_BLOG_BY_ID,
    payload: id
  };
};

// delete blog to server
const deleteBlogToSV = id => {
  return dispatch => {
    axios
      .delete(endPoints.BLOG_API + id)
      .then(() => dispatch(deleteBlogById(id)))
      .catch(err =>
        err.response && err.response.data.code === "002"
          ? clearAuthUser()
          : showNotification({
              type: "error",
              message: "Lỗi Xóa Blog Hoặc Server Lỗi! Vui Lòng Kiểm Tra Lại!"
            })
      );
  };
};

const actions = {
  GET_BLOG_LIST,
  ADD_NEW_BLOG,
  UPDATE_BLOG_BY_ID,
  DELETE_BLOG_BY_ID,
  getBlogListFromSV,
  createNewBlog,
  updateBlogToSV,
  deleteBlogToSV
};

export default actions;

import Axios from "axios";
import { endPoints } from "../../services/config";
import { clearAuthUser, showNotification } from "../../utilities/fnUtil";

const UPDATE_HTML_CONTENT = "UPDATE_HTML_CONTENT";
const GET_HTML_CONTENT = "GET_HTML_CONTENT";

const updateHtmlContent = res => {
  return {
    type: UPDATE_HTML_CONTENT,
    payload: res
  };
};

const updateHtmlContentToSV = data => {
  return dispatch =>
    Axios.post(endPoints.HTML_CONTENT, data)
      .then(() => dispatch(updateHtmlContent(data)))
      .catch(err => {
        err.response && err.response.data.code === "002"
          ? clearAuthUser()
          : showNotification({
              type: "error",
              message: "Lỗi Cập Nhật Sản Phẩm! Vui Lòng Cập Nhật Lại!"
            });
      });
};

const getHtmlContent = res => {
  return {
    type: GET_HTML_CONTENT,
    payload: res
  };
};

const getHtmlContentFromSV = () => {
  return dispatch =>
    Axios.get(endPoints.HTML_CONTENT)
      .then(res => dispatch(getHtmlContent(res)))
      .catch(err =>
        showNotification({
          type: "error",
          message:
            "Không Thể Lấy Dữ Liệu Từ Server! Vui Lòng Kiểm Tra Server Hoặc Thử Lại!"
        })
      );
};

const actions = {
  UPDATE_HTML_CONTENT,
  GET_HTML_CONTENT,
  updateHtmlContentToSV,
  getHtmlContentFromSV
};

export default actions;

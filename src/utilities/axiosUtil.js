import axios from 'axios';

const cancelTokenSource = axios.CancelToken.source();

const axiosUtil = {
  cancelTokenSource
}

export default axiosUtil;

const GET_AUTH_USER_FROM_LS = "GET_AUTH_USER_FROM_LS";
const GET_AUTH_USER = "GET_AUTH_USER";

const getAuthUserFromLS = () => {
  const authUser = JSON.parse(localStorage.getItem("authUser"));
  return {
    type: GET_AUTH_USER_FROM_LS,
    payload: authUser
  };
};

const getAuthUser = res => {
  return {
    type: GET_AUTH_USER,
    payload: res
  };
};

const actions = {
  GET_AUTH_USER,
  GET_AUTH_USER_FROM_LS,
  getAuthUser,
  getAuthUserFromLS
};

export default actions;

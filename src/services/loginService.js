
const loginLS = () => {

    const loginForm = document.forms.loginForm

    const userPhoneInput = loginForm['Số Điện Thoại'];

    const userPhone = userPhoneInput.value;

    const passwordInput = loginForm['Mật Khẩu'];

    const password = passwordInput.value;

    const isAuth = true;

    const user = {
        userPhone: userPhone,
        password: password,
        isAuth: isAuth
    }

    localStorage.setItem('user', JSON.stringify(user));

}



const isAuthenticated = () => {
    const userLogin = JSON.parse(localStorage.getItem('authUser')) || [];
    return userLogin.auth;
}

const loginService = {
    loginLS, isAuthenticated
}
export default loginService;
import loginService from '../services/loginService';



const saveUserInfoLSGuess = () => {

  const checkoutForm = document.forms.checkoutForm;

  const fullNameInput = checkoutForm['Họ và Tên'];

  const fullName = fullNameInput.value;

  const emailInput = checkoutForm['E-Mail'];

  const email = emailInput.value;

  const phoneNumberInput = checkoutForm['Số Điện Thoại'];

  const phoneNumber = phoneNumberInput.value;

  const addressInput = checkoutForm['Địa Chỉ'];

  const address = addressInput.value;

  const fullNameReceiveInput = checkoutForm['Họ và Tên Người Nhận (nếu có)'];

  const fullNameReceive = fullNameReceiveInput.value;

  const phoneNumberReceiveInput = checkoutForm['Số Điện Thoại Người Nhận (nếu có)'];

  const phoneNumberReceive = phoneNumberReceiveInput.value;

  const addressReceiveInput = checkoutForm['Địa Chỉ Người Nhận (nếu không nhập thì địa chỉ cá nhân của bạn sẽ là địa chỉ nhận hàng)'];

  const addressReceive = addressReceiveInput.value;

  const orderDateInput = checkoutForm[7];

  const orderDate = orderDateInput.value;

  const payment = window.$('.payment:checked').val();

  const noteInput = checkoutForm["Ghi Chú"];

  const note = noteInput.value;

  const order = {
    customerInfo: {
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      address: address
    },
    receiveInfo: {
      fullNameReceive: fullNameReceive,
      phoneNumberReceive: phoneNumberReceive,
      addressReceive: addressReceive
    },
    order: {
      orderDate: orderDate,
      payment: payment,
      note: note
    },
    productOrder: JSON.parse(localStorage.getItem('list')) || []
  }
  localStorage.setItem('order', JSON.stringify(order));
}

const saveUserInfoLSUser = () => {

  const checkoutForm = document.forms.checkoutForm;

  const fullNameInput = checkoutForm['Họ và Tên'];

  const fullName = fullNameInput.value;

  const emailInput = checkoutForm['E-Mail'];

  const email = emailInput.value;

  const phoneNumberInput = checkoutForm['Số Điện Thoại'];

  const phoneNumber = phoneNumberInput.value;

  const addressInput = checkoutForm['Địa Chỉ'];

  const address = addressInput.value;

  const fullNameReceiveInput = checkoutForm['Họ và Tên Người Nhận (nếu có)'];

  const fullNameReceive = fullNameReceiveInput.value;

  const phoneNumberReceiveInput = checkoutForm['Số Điện Thoại Người Nhận (nếu có)'];

  const phoneNumberReceive = phoneNumberReceiveInput.value;

  const addressReceiveInput = checkoutForm['Địa Chỉ Người Nhận (nếu không nhập thì địa chỉ cá nhân của bạn sẽ là địa chỉ nhận hàng)'];

  const addressReceive = addressReceiveInput.value;

  const orderDateInput = checkoutForm[7];

  const orderDate = orderDateInput.value;

  const payment = window.$('.payment:checked').val();

  const noteInput = checkoutForm["Ghi Chú"];

  const note = noteInput.value;

  const order = {
    customerInfo: {
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      address: address
    },
    receiveInfo: {
      fullNameReceive: fullNameReceive,
      phoneNumberReceive: phoneNumberReceive,
      addressReceive: addressReceive
    },
    order: {
      orderDate: orderDate,
      payment: payment,
      note: note
    },
    productOrder: JSON.parse(localStorage.getItem('listAuth')) || []
  }
  localStorage.setItem('orderAuth', JSON.stringify(order));
}


const addUserInfoLS = () => {
  if (loginService.isAuthenticated()) {
    saveUserInfoLSUser();
  } else {
    // guess
    saveUserInfoLSGuess();
  }
}

const getInfoIfUserLogin = () => {
  const authUser = JSON.parse(localStorage.getItem("authUser")) || {}
  return authUser.userInfo
}

const checkoutService = {
  saveUserInfoLSGuess, addUserInfoLS, getInfoIfUserLogin
}
export default checkoutService;
import loginService from '../services/loginService';
import { createOrderId } from '../utilities/fnUtil';


const saveUserInfoLSGuest = () => {

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

  let tempFinalPrice = 0;
  const arrProductOrder = JSON.parse(localStorage.getItem('list')) || []
  arrProductOrder.forEach(element => {
    tempFinalPrice += (element.price - (element.price * element.discount) / 100) *
      element.quantity;
  })

  const order = {
    _id: createOrderId(phoneNumber),
    customerInfo: {
      name: fullName,
      email: email,
      phone: phoneNumber,
      address: address
    },
    receiverInfo: {
      name: fullNameReceive,
      phone: phoneNumberReceive,
      address: addressReceive
    },
    order: {
      note: note,
      payment: payment,
      deliveryDate: orderDate,
      status: 'PENDING',
      productOrder: arrProductOrder
    },
    finalPrice: tempFinalPrice

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
    // guest
    saveUserInfoLSGuest();
  }
}



const checkoutService = {
  saveUserInfoLSGuest, addUserInfoLS
}
export default checkoutService;
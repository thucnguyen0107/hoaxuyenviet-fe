import loginService from '../services/loginService';
import { createOrderId } from '../utilities/fnUtil';


const createOrder = (cartData) => {

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
  const arrProductOrder = cartData || []
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
      productOrder: arrProductOrder,
      finalPrice: tempFinalPrice
    },


  }
  // localStorage.setItem('order', JSON.stringify(order));
  return order;

}


const checkoutService = {
  createOrder
}
export default checkoutService;
import { showNotification, isNotEmpty } from '../utilities/fnUtil';
import loginService from './loginService';
const saveCartItemLSGuess = (item) => {
  let productData;
  let quantity = document.getElementById("input-quantity");
  // assign item to data variable
  productData = item;
  if (quantity.value <= 0) {
    showNotification({ message: 'Số lượng sản phẩm phải lớn hơn 0!', type: 'error' })
  } else {
    // Add quantity use input to product data
    productData.quantity = parseFloat(quantity.value);
    // create array in local storage	
    let arrProductListLocalStorage = [];
    // Parse the serialized data back into an aray of objects	
    arrProductListLocalStorage = JSON.parse(localStorage.getItem('list')) || [];
    // if duplicate product, just add quantity
    arrProductListLocalStorage.forEach(element => {
      if (element._id === productData._id) {
        productData.quantity += element.quantity;
      }
    });
    // prevent duplicate product
    arrProductListLocalStorage = arrProductListLocalStorage.filter(ele => ele._id !== productData._id)
    // Push the new data (whether it be an object or anything else) onto the array
    arrProductListLocalStorage.push(productData);
    // Re-serialize the array back into a string and store it in localStorage	
    localStorage.setItem("list", JSON.stringify(arrProductListLocalStorage));
    showNotification({ message: 'Lưu Vào Giỏ Hàng Thành Công!' })
  }

}

const saveCartItemLSUser = (item) => {
  let productData;
  let quantity = document.getElementById("input-quantity");
  // assign item to data variable
  productData = item;
  if (quantity.value <= 0) {
    showNotification({ message: 'Số lượng sản phẩm phải lớn hơn 0!', type: 'error' })
  } else {
    // Add quantity use input to product data
    productData.quantity = parseFloat(quantity.value);
    // Add userId to authenticated

    // get userInfo client from LS
    const user = JSON.parse(localStorage.getItem('user')) || []
    // productData.userPhone = user.userPhone;
    // create array in local storage	
    let arrProductListLocalStorage = [];
    // Parse the serialized data back into an aray of objects	
    if (JSON.parse(localStorage.getItem('listAuth'))) {
      arrProductListLocalStorage = JSON.parse(localStorage.getItem('listAuth')).arrProductListLocalStorage
    } else {
      arrProductListLocalStorage = [];
    }

    // if duplicate product, just add quantity
    arrProductListLocalStorage.forEach(element => {
      if (element._id === productData._id) {
        productData.quantity += element.quantity;
      }
    });
    // prevent duplicate product
    arrProductListLocalStorage = arrProductListLocalStorage.filter(ele => ele._id !== productData._id)
    // Push the new data (whether it be an object or anything else) onto the array
    arrProductListLocalStorage.push(productData);
    // Re-serialize the array back into a string and store it in localStorage	

    const arrProductListAuthLS = {
      arrProductListLocalStorage: arrProductListLocalStorage,
      userPhone: user.userPhone

    }

    localStorage.setItem("listAuth", JSON.stringify(arrProductListAuthLS));
    showNotification({ message: 'Lưu Vào Giỏ Hàng Thành Công!' })
  }

}

const removeCartItemLS = (cartList, itemID) => {

  cartList = cartList.filter(ele => ele._id !== itemID);

  let cartListTemp = cartList.slice(0);

  const user = JSON.parse(localStorage.getItem('user')) || []
  const arrProductListAuthLS = {
    arrProductListLocalStorage: cartListTemp,
    userPhone: user.userPhone

  }
  if (loginService.isAuthenticated()) {
    localStorage.setItem("listAuth", JSON.stringify(arrProductListAuthLS));
  } else {
    localStorage.setItem("list", JSON.stringify(cartListTemp));
  }

  return cartList;
}

const addProductToLS = (productInfo) => {
  const userLogin = JSON.parse(localStorage.getItem('user')) || [];
  if (isNotEmpty(userLogin)) {
    return saveCartItemLSUser(productInfo)
  } else {
    return saveCartItemLSGuess(productInfo)
  }
}


const getProductToCart = () => {
  if (loginService.isAuthenticated()) {
    if (JSON.parse(localStorage.getItem("listAuth"))) {
      return JSON.parse(localStorage.getItem("listAuth")).arrProductListLocalStorage
    } else {
      return [];
    }
  } else {
    return JSON.parse(localStorage.getItem("list")) || [];
  }

}


const cartService = {
  saveCartItemLSGuess, removeCartItemLS, saveCartItemLSUser, addProductToLS, getProductToCart
}

export default cartService;
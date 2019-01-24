import { showNotification } from '../utilities/fnUtil';
const saveCartItemLS = (item) => {
  let productData, temp;
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

const removeCartItemLS = (cartList, itemID) => {
  return cartList = cartList.filter(ele => ele._id !== itemID)
}




const cartService = {
  saveCartItemLS, removeCartItemLS
}

export default cartService;
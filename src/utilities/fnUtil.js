import { message } from "antd";

export const updateObject = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues
  };
};

export const formatDate = (dateString, onlyDate = false) => {
  let date;
  if (!dateString) {
    date = new Date();
  } else {
    let timestamp = Date.parse(dateString);
    date = new Date(timestamp);
  }
  return onlyDate
    ? date.toLocaleDateString("vi-VN")
    : `${date.toLocaleDateString("vi-VN")} ${date.toLocaleTimeString("vi-VN")}`;
};

export const formatCurrency = price => {
  return price ? price.toLocaleString("vi-VN", { currency: "VND" }) : 0;
};

export const initGalleryZoom = name => {
  window.$(name).magnificPopup({
    delegate: "a",
    type: "image",
    mainClass: "mfp-with-zoom",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    }
  });
};

export const getDataForm = form => {
  const data = {};
  for (const key in form) {
    data[key] = form[key].value;
  }
  return data;
};

export const convertToDataForm = (data, form) => {
  for (const key in form) {
    form[key].value = data[key];
  }
  return form;
};

export const cloneData = data => {
  return JSON.parse(JSON.stringify(data));
};

export const isNotEmpty = data => {
  if (window.jQuery.isEmptyObject(data) || !data) {
    return false;
  }
  return true;
};

export const showNotification = notiData => {
  const options = {
    top: 150,
    duration: 2,
    onClose: notiData.fn
  };
  message.config(options);
  switch (notiData.type) {
    case "error":
      message.error(notiData.message);
      break;
    case "warning":
      message.warning(notiData.message);
      break;
    default:
      message.success(notiData.message);
      break;
  }
};

export const clearAuthUser = (path = "/admin", isLogOut = false) => {
  localStorage.removeItem("authUser");
  if (!isLogOut) {
    showNotification({
      type: "error",
      message:
        "Thời Gian Đăng Nhập Hết Hiệu Lực! Vui Lòng Đăng Nhập Lại Để Tiếp Tục Sử Dụng",
      fn: path => window.location.replace(path)
    });
  } else {
    window.location.replace(path);
  }
};

export const getCurrentDate = () => {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  today = dd + "/" + mm + "/" + yyyy;
  return today;
};

export const getDate = data => {
  var date = new Date(data);
  var dd = date.getDate();
  var mm = date.getMonth() + 1; //January is 0!
  var yyyy = date.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  date = dd + "/" + mm + "/" + yyyy;
  return date;
};

export const createContentHtmlString = (content, onlyFirst = false) => {
  return onlyFirst
    ? {
      __html: content.length > 33 ? content.slice(0, 33) + "..." : content
    }
    : {
      __html: content
    };
};

export const createOrderId = phone => {
  const date = new Date();
  const orderId =
    date.getDate().toString() +
    (date.getMonth() + 1).toString() +
    date
      .getFullYear()
      .toString()
      .slice(-2) +
    date.getHours().toString() +
    date.getMinutes().toString() +
    date.getSeconds().toString() +
    phone.toString().slice(-4);
  return orderId;
};

export const convertStatus = (status) => {
  let res = "";
  switch (status) {
    case 'PENDING':
      res = "Đang Xử Lý"
      break;
    case 'DELIVERING':
      res = "Đang Giao Hàng"
      break;
    case 'COMPLETED':
      res = "Hoàn Thành"
      break;
  }
  return res;
}

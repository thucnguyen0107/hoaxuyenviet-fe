import { message } from "antd";

export const updateObject = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues
  };
};

export const formatDate = dateString => {
  let date;
  if (!dateString) {
    date = new Date();
  } else {
    let timestamp = Date.parse(dateString);
    date = new Date(timestamp);
  }
  return `${date.toLocaleDateString("vi-VN")} ${date.toLocaleTimeString(
    "vi-VN"
  )}`;
};

export const formatCurrency = price => {
  return price.toLocaleString("vi-VN", { currency: "VND" });
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
    duration: 2
  };
  message.config(options);
  switch (notiData.type) {
    case "error":
      message.error(notiData.message);
      break;

    default:
      message.success(notiData.message);
      break;
  }
};

export const clearAuthUser = () => {
  localStorage.removeItem("authUser");
  alert(
    "Thời Gian Đăng Nhập Hết Hiệu Lực! Vui Lòng Đăng Nhập Lại Để Tiếp Tục Sử Dụng"
  );
  window.location.replace("/admin");
};

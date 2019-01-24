import { headerContent } from "../data/data";

export const ProductFormModel = {
  _id: {
    elementType: "input",
    elementConfig: {
      type: "text",
      name: "Mã Sản Phẩm",
      placeholder: "Nhập Mã Sản Phẩm",
      unique: 1
    },
    value: "",
    validation: {
      required: true,
      minLength: 1,
      maxLength: 32,
      errorMessage: "Chưa Nhập Mã Sản Phẩm"
    },
    valid: true
  },
  images: {
    elementType: "images",
    elementConfig: {
      name: "Hình Ảnh",
      placeholder: "Nhập Đường Dẫn Hình Ảnh"
    },
    value: [],
    validation: {
      required: true,
      errorMessage: "Chưa Nhập Link Hình"
    },
    valid: true
  },
  type: {
    elementType: "multiSelect",
    elementConfig: {
      name: "Loại Hoa",
      placeholder: "Chọn Loại",
      data: headerContent.categories[3]
    },
    value: [],
    validation: {
      required: true,
      errorMessage: "Chưa Nhập Loại Hoa"
    },
    valid: true
  },
  form: {
    elementType: "multiSelect",
    elementConfig: {
      name: "Hình Thức Hoa",
      placeholder: "Chọn Hình Thức",
      data: headerContent.categories[4]
    },
    value: [],
    validation: {},
    valid: true
  },
  event: {
    elementType: "multiSelect",
    elementConfig: {
      name: "Sự Kiện",
      placeholder: "Chọn Sự Kiện",
      data: headerContent.categories[1]
    },
    value: [],
    validation: {},
    valid: true
  },
  holiday: {
    elementType: "multiSelect",
    elementConfig: {
      name: "Ngày Lễ",
      placeholder: "Chọn Ngày Lễ",
      data: headerContent.categories[2]
    },
    value: [],
    validation: {},
    valid: true
  },
  color: {
    elementType: "multiSelect",
    elementConfig: {
      name: "Màu Sắc",
      placeholder: "Chọn Màu Sắc",
      data: headerContent.categories[5]
    },
    value: [],
    validation: {
      required: true,
      errorMessage: "Chưa Nhập Màu Hoa"
    },
    valid: true
  },
  price: {
    elementType: "input",
    elementConfig: {
      type: "number",
      name: "Giá",
      placeholder: "Nhập Giá"
    },
    value: 0,
    validation: {
      required: true,
      minNumber: 10000,
      errorMessage: "Chưa Nhập Giá Hoặc Giá Chưa Đủ"
    },
    valid: true
  },
  discount: {
    elementType: "input",
    elementConfig: {
      type: "number",
      name: "Giảm Giá (%)",
      placeholder: "Nhập Giảm Giá"
    },
    value: 0,
    validation: {
      maxNumber: 100,
      errorMessage: "Giảm Giá Không Thể Hơn 100%"
    },
    valid: true
  },
  productName: {
    elementType: "input",
    elementConfig: {
      type: "text",
      name: "Tên Sản Phẩm",
      placeholder: "Nhập Tên Sản Phẩm"
    },
    value: "",
    validation: {
      required: true,
      minLength: 6,
      maxLength: 32,
      errorMessage: "Chưa Nhập Tên Hoặc Độ Dài Chưa Đủ"
    },
    valid: true
  },
  new: {
    elementType: "switch",
    elementConfig: {
      name: "Hàng Mới"
    },
    value: false,
    validation: {},
    valid: true
  },
  sale: {
    elementType: "switch",
    elementConfig: {
      name: "Hàng Giảm Giá"
    },
    value: false,
    validation: {},
    valid: true
  },
  hot: {
    elementType: "switch",
    elementConfig: {
      name: "Hàng Ưa Chuộng"
    },
    value: false,
    validation: {},
    valid: true
  },
  description: {
    elementType: "textarea",
    elementConfig: {
      type: "text",
      name: "Mô Tả Sản Phẩm",
      placeholder: "Nhập Mô Tả Sản Phẩm"
    },
    value: [],
    validation: {
      required: true,
      errorMessage: "Chưa Nhập Mô Tả"
    },
    valid: true
  }
};

export const htmlContentFormModel = {
  bannerSlide: {
    elementType: "images",
    elementConfig: {
      name: "Hình Ảnh Banner",
      placeholder: "Nhập Đường Dẫn Hình Ảnh",
      id: 1
    },
    value: [],
    validation: {
      required: true,
      errorMessage: "Chưa Nhập Link Hình"
    },
    valid: true
  },
  eventLinkBannerSlide: {
    elementType: "textarea",
    elementConfig: {
      type: "text",
      name: "Đường Dẫn Khi Click Banner",
      placeholder: "Nhập Đường Dẫn"
    },
    value: [],
    validation: {
      required: true,
      errorMessage: "Chưa Nhập Đường Dẫn"
    },
    valid: true
  },
  firstEventSlide: {
    elementType: "images",
    elementConfig: {
      name: "4 Hình Ảnh Sự Kiện Đầu",
      placeholder: "Nhập Đường Dẫn Hình Ảnh",
      id: 2
    },
    value: [],
    validation: {
      required: true,
      errorMessage: "Chưa Nhập Link Hình"
    },
    valid: true
  },
  eventLinkFirstEventSlide: {
    elementType: "textarea",
    elementConfig: {
      type: "text",
      name: "Đường Dẫn Khi Vào 4 Hình Ảnh",
      placeholder: "Nhập Đường Dẫn"
    },
    value: [],
    validation: {
      required: true,
      errorMessage: "Chưa Nhập Đường Dẫn"
    },
    valid: true
  },
  secondEventSlide: {
    elementType: "images",
    elementConfig: {
      name: "4 Hình Ảnh Sự Kiện Cuối",
      placeholder: "Đường Dẫn Khi Vào 4 Hình Ảnh",
      id: 3
    },
    value: [],
    validation: {
      required: true,
      errorMessage: "Chưa Nhập Link Hình"
    },
    valid: true
  },
  eventLinkSecondEventSlide: {
    elementType: "textarea",
    elementConfig: {
      type: "text",
      name: "Đường Dẫn Khi Vào 4 Hình Ảnh",
      placeholder: "Nhập Đường Dẫn"
    },
    value: [],
    validation: {
      required: true,
      errorMessage: "Chưa Nhập Đường Dẫn"
    },
    valid: true
  },
  nameFirstOtherSlide: {
    elementType: "input",
    elementConfig: {
      type: "text",
      name: "Tên Tab 1",
      placeholder: "Nhập Tên Tab 1"
    },
    value: "",
    validation: {
      required: true,
      minLength: 3,
      maxLength: 32,
      errorMessage: "Chưa Nhập Tên Hoặc Độ Dài Chưa Đủ"
    },
    valid: true
  },
  categoryDisplayFirstOtherSlide: {
    elementType: "images",
    elementConfig: {
      name: "6 Hình Ảnh Tab Đầu",
      placeholder: "Nhập Đường Dẫn Hình Ảnh",
      id: 4
    },
    value: [],
    validation: {
      required: true,
      errorMessage: "Chưa Nhập Link Hình"
    },
    valid: true
  },
  eventCategoryDisplayFirstOtherSlide: {
    elementType: "textarea",
    elementConfig: {
      type: "text",
      name: "Đường Dẫn Khi Vào Hình Ảnh",
      placeholder: "Nhập Đường Dẫn"
    },
    value: [],
    validation: {
      required: true,
      errorMessage: "Chưa Nhập Đường Dẫn"
    },
    valid: true
  },
  nameSecondOtherSlide: {
    elementType: "input",
    elementConfig: {
      type: "text",
      name: "Tên Tab 2",
      placeholder: "Nhập Tên Tab 2"
    },
    value: "",
    validation: {
      required: true,
      minLength: 3,
      maxLength: 32,
      errorMessage: "Chưa Nhập Tên Hoặc Độ Dài Chưa Đủ"
    },
    valid: true
  },
  categoryDisplaySecondOtherSlide: {
    elementType: "images",
    elementConfig: {
      name: "6 Hình Ảnh Tab Cuối",
      placeholder: "Nhập Đường Dẫn Hình Ảnh",
      id: 5
    },
    value: [],
    validation: {
      required: true,
      errorMessage: "Chưa Nhập Link Hình"
    },
    valid: true
  },
  eventCategoryDisplaySecondOtherSlide: {
    elementType: "textarea",
    elementConfig: {
      type: "text",
      name: "Đường Dẫn Khi Vào Hình Ảnh",
      placeholder: "Nhập Đường Dẫn"
    },
    value: [],
    validation: {
      required: true,
      errorMessage: "Chưa Nhập Đường Dẫn"
    },
    valid: true
  },
  socialLink: {
    elementType: "textarea",
    elementConfig: {
      type: "text",
      name: "Đường Dẫn Vào Social",
      placeholder: "Nhập Đường Dẫn"
    },
    value: [],
    validation: {},
    valid: true
  },
  visibleLink: {
    elementType: "textarea",
    elementConfig: {
      type: "text",
      name: "Cho Phép Hiện Social",
      placeholder: "Nhập Giá Trị"
    },
    value: [],
    validation: {},
    valid: true
  }
};

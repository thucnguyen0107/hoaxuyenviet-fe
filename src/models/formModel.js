import { headerContent } from "../data/data";
import { getCurrentDate } from '../utilities/fnUtil'

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

export const userProfileFormModel = {
  fullName: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Họ và Tên",
      name: "Họ và Tên"
    },
    value: "",
    validation: {
      required: true,
      minLength: 4,
      errorMessage:
        "Họ và tên phải từ 4 ký tự!"
    },
    valid: true
  },
  gender: {
    elementType: "radioGender",
    elementConfig: {
      type: "text",
      name: "Giới Tính"
    },
    value: "male",
    validation: {
      required: true,
      errorMessage: "Vui Lòng Chọn Giới Tính!"
    },
    valid: true
  },
  birthDate: {
    elementType: "date",
    elementConfig: {
      type: "text",
      name: "Ngày Tháng Năm Sinh"
    },

    value: "",
    validation: {
      required: false,
      errorMessage: "Vui Lòng Chọn Ngày Tháng Năm Sinh!"
    },
    valid: true
  },
  email: {
    elementType: "input",
    elementConfig: {
      type: "email",
      placeholder: "E-Mail",
      name: "E-Mail"
    },
    value: "",
    validation: {
      required: true,
      minLength: 10,
      maxLength: 32,
      errorMessage: "Email chưa hợp lệ!"
    },
    valid: true
  },
  telephone: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Số Điện Thoại",
      name: "Số Điện Thoại",
      unique: 1
    },
    value: "",
    validation: {
      required: true,
      minLength: 9,
      maxLength: 32,
      numberValid: '^[0-9]+$',
      errorMessage: "Số điện thoại phải từ 9 đến 32 chữ số!"
    },
    valid: true
  },
  address: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Địa Chỉ",
      name: "Địa Chỉ"
    },
    value: "",
    validation: {
      required: true,
      errorMessage: "Chưa Nhập Địa Chỉ!"
    },
    valid: true
  }
}

export const checkoutFormModel = {
  fullName: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Họ và Tên",
      name: "Họ và Tên"
    },
    value: "",
    validation: {
      required: true,
      minLength: 4,
      errorMessage:
        "Họ và tên phải từ 4 ký tự!"
    },
    valid: true
  },

  email: {
    elementType: "input",
    elementConfig: {
      type: "email",
      placeholder: "E-Mail",
      name: "E-Mail"
    },
    value: "",
    validation: {
      required: true,
      errorMessage: "Email không đúng định dạng!"
    },
    valid: true
  },
  telephone: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Số Điện Thoại",
      name: "Số Điện Thoại"
    },
    value: "",
    validation: {
      required: true,
      minLength: 9,
      maxLength: 32,
      numberValid: '^[0-9]+$',
      errorMessage: "Số điện thoại phải từ 9 đến 32 chữ số!"
    },
    valid: true
  },
  address: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Địa Chỉ",
      name: "Địa Chỉ"
    },
    value: "",
    validation: {
      required: true,
      minLength: 5,
      errorMessage: "Địa chỉ phải trên 5 ký tự!"
    },
    valid: true
  },
  fullNameReceivePerson: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Họ và Tên ",
      name: "Họ và Tên Người Nhận (nếu có)"
    },
    value: "",
    validation: {
      required: false,
    },
    valid: true
  },
  telephoneReceivePerson: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Số Điện Thoại",
      name: "Số Điện Thoại Người Nhận (nếu có)"
    },
    value: "",
    validation: {
      required: false,
    },
    valid: true
  },
  addressReivePerson: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Địa Chỉ",
      name: "Địa Chỉ Người Nhận (nếu không nhập thì địa chỉ cá nhân của bạn sẽ là địa chỉ nhận hàng)"
    },
    value: "",
    validation: {
      required: false,
    },
    valid: true
  },
  orderDate: {
    elementType: "date",
    elementConfig: {
      type: "text",
      name: "Ngày Giao Hàng"
    },
    value: getCurrentDate(),
    validation: {
      required: true,
      errorMessage: "Vui Lòng Nhập Ngày Giao Hàng!"
    },
    valid: true
  },
  paymentMethod: {
    elementType: "radioPayment",
    elementConfig: {
      type: "text",
      name: "Hình Thức Thanh Toán"
    },
    value: "",
    validation: {
      required: false,
      errorMessage: "Vui Lòng Chọn Hình Thức Thanh Toán!"
    },
    valid: true
  },
  note: {
    elementType: "textarea",
    elementConfig: {
      type: "text",
      placeholder: "Ghi Chú",
      name: "Ghi Chú"
    },
    value: "",
    validation: {
    },
    valid: true
  }
}

export const BlogFormModel = {
  _id: {
    elementType: "input",
    elementConfig: {
      type: "text",
      name: "Mã Blog",
      placeholder: "Nhập Mã Blog",
      unique: 1
    },
    value: "",
    validation: {
      required: true,
      minLength: 1,
      maxLength: 32,
      errorMessage: "Chưa Nhập Mã Blog"
    },
    valid: true
  },
  image: {
    elementType: "image",
    elementConfig: {
      name: "Hình Ảnh",
      placeholder: "Nhập Đường Dẫn Hình Ảnh"
    },
    value: "",
    validation: {
      required: true,
      errorMessage: "Chưa Nhập Link Hình"
    },
    valid: true
  },
  title: {
    elementType: "input",
    elementConfig: {
      type: "text",
      name: "Tên Blog",
      placeholder: "Nhập Tên Blog"
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
  content: {
    elementType: "editor",
    elementConfig: {
      name: "Mô Tả Nội Dung Blog",
      placeholder: "Nhập Mô Tả Nội Dung Blog"
    },
    value: "",
    validation: {
      required: true,
      errorMessage: "Chưa Nhập Mô Tả Nội Dung Blog"
    },
    valid: true
  }
};

export const registerFormModel = {
  telephone: {
    elementType: 'input',
    elementConfig: {
      type: 'number',
      placeholder: 'Vui Lòng Nhập Số Điện Thoại Của Bạn',
      name: 'Tài Khoản Đăng Nhập (Số Điện Thoại)'
    },
    value: '',
    validation: {
      required: true,
      minLength: 10,
      maxLength: 11,
      letterValid: /^\+?[0-9]+$/,
      errorMessage: "Số Điện Thoại Không Hợp Lệ"
    },
    valid: true
  },
  password: {
    elementType: 'input',
    elementConfig: {
      type: 'password',
      placeholder: 'Vui Lòng Nhập Mật Khẩu Của Bạn',
      name: 'Mật Khẩu'
    },
    value: '',
    validation: {
      required: true,
      minLength: 5,
      maxLength: 32,
      letterValid: /^[a-zA-Z]+$/,
      errorMessage: "Mật khẩu phải nhiều hơn 5 ký tự và ít hơn 32 ký tự"
    },
    valid: true,
  },
  // passwordConfirm: {
  //   elementType: 'input',
  //   elementConfig: {
  //     type: 'password',
  //     placeholder: 'Xác nhận mật khẩu'
  //   },
  //   value: '',
  //   validation: {
  //     required: true,
  //     minLength: 5,
  //     maxLength: 32,
  //     letterValid: /^[a-zA-Z]+$/,
  //     errorMessage: "Xác nhận mật khẩu không chính xác"
  //   },
  //   valid: true,
  // },
  name: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Vui Lòng Nhập Họ Tên Của Bạn',
      name: 'Họ và Tên'
    },
    value: '',
    validation: {
      required: true,
      minLength: 4,
      letterValid: /^[a-zA-Z]+$/,
      errorMessage: "Họ và tên phải có nhiều hơn 4 ký tự "
    },
    valid: true,
  },
  email: {
    elementType: 'input',
    elementConfig: {
      type: 'email',
      placeholder: 'Vui Lòng Nhập Địa Chỉ E-Mail Của Bạn',
      name: 'E-Mail'
    },
    value: '',
    validation: {
      required: true,
      letterValid: /^[a-zA-Z]+$/,
      errorMessage: "Email Phải Đúng Định Dạng"
    },
    valid: true,
  },
  address: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Vui Lòng nhập Địa Chỉ Của Bạn',
      name: 'Địa Chỉ'
    },
    value: '',
    validation: {
      required: true,
      minLength: 5,
      letterValid: /^[a-zA-Z]+$/,
      errorMessage: "Địa chỉ phải có nhiều hơn 5 ký tự "
    },
    valid: true,
  },
  birth: {
    elementType: "date",
    elementConfig: {
      type: "text",
      name: "Ngày Tháng Năm Sinh"
    },

    value: getCurrentDate(),
    validation: {
      required: true,
      errorMessage: "Vui Lòng Chọn Ngày Tháng Năm Sinh!"
    },
    valid: true
  },
  gender: {
    elementType: "radioGender",
    elementConfig: {
      type: "text",
      name: "Giới Tính"
    },
    value: "male",
    validation: {
      required: true,
      errorMessage: "Vui Lòng Chọn Giới Tính!"
    },
    valid: true
  },
}
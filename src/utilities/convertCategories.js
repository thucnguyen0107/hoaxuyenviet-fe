const EVENT = 'Sự Kiện';
const HOLIDAY = 'Ngày Lễ';
const TYPE = 'Kiểu Loại';
const FORM = 'Hình Thức';
const COLOR = 'Màu Sắc';
const OTHER = 'Khác';

let convertCategories = (catid) => {
  switch (catid) {
    case 'event':
      return EVENT;

    case 'holiday':
      return HOLIDAY;

    case 'type':
      return TYPE;

    case 'form':
      return FORM;

    case 'color':
      return COLOR;

    default:
      return OTHER;
  }
}

export default convertCategories;
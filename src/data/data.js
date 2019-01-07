export const headerContent = {
    categories: [
        {
            id: 'home', name: 'Trang chủ', type: 'dropdown', subCategories:
                [
                    { id: 'about-us', subName: 'About Us' },
                    { id: 'blog', subName: 'Blog' },
                ]
        },
        {
            id: 'event', name: 'Sự kiện', type: 'dropdown', subCategories:
                [
                    { id: 'opening', subName: 'Khánh thành' },
                    { id: 'wedding', subName: 'Lễ cưới' },
                    { id: 'birthdate', subName: 'Sinh nhật' },

                ]
        },
        {
            id: 'holiday', name: 'Ngày lễ', type: 'dropdown', subCategories:
                [
                    { id: 'womenDay', subName: 'Quốc tế phụ nữ' },
                    { id: 'vnWomenDay', subName: 'Phụ nữ Việt Nam' },
                    { id: 'vnTeacherDay', subName: 'Nhà giáo Việt Nam' },

                ]
        },
        {
            id: 'type', name: 'Kiểu loại', type: 'dropdown', subCategories:
                [
                    { id: 'rose', subName: 'Hoa hồng' },
                    { id: 'chrysanthemum', subName: 'Hoa cúc' },
                    { id: 'peony', subName: 'Hoa mẫu đơn' },

                ]
        },
        {
            id: 'form', name: 'Hình thức', type: 'dropdown', subCategories:
                [
                    { id: 'buds', subName: 'Lẳng hoa' },
                    { id: 'basket', subName: 'Giỏ hoa' },
                    { id: 'bouquet', subName: 'Bó hoa' },

                ]
        },
        {
            id: 'color', name: 'Màu sắc', type: 'dropdown', subCategories:
                [
                    { id: 'pink', subName: 'Màu hồng' },
                    { id: 'white', subName: 'Màu trắng' },
                    { id: 'yellow', subName: 'Màu vàng' },

                ]
        },
    ]
};



export const arrBannerSlider = [

    { id: 1, srcImg: require('../assets/images/catalog/banners/main-banner-1-1903x928.jpg') },
    { id: 2, srcImg: require('../assets/images/catalog/banners/main-banner-2-1903x928.jpg') },
  ]

  export const arrCatBannerSlider = [
    { id: 1, name: 'Bộ sưu tập hoa lãng mạn', srcImg: require('../assets/images/catalog/demo/cat-banner-1.png') },
    { id: 2, name: 'Bộ sưu tập hoa cưới', srcImg: require('../assets/images/catalog/demo/cat-banner-2.png') },
    { id: 3, name: 'Bộ sưu tập hoa tình yêu', srcImg: require('../assets/images/catalog/demo/cat-banner-3.png') },
    { id: 4, name: 'Bộ sưu tập hoa mới', srcImg: require('../assets/images/catalog/demo/cat-banner-4.png') },
  ]

  export const arrTabCategory = [
    {
      id: 'tab-1',
      categoryName: "Xem tất cả",
      active: "active",
      categoryProductList: [
        { id: 1, name: 'Hoa hồng', price: 500000, srcImg: require("../assets/images/catalog/product/3-366x450.jpg") },
        { id: 2, name: 'Hoa cúc', price: 700000, srcImg: require("../assets/images/catalog/product/5-366x450.jpg") },
        { id: 3, name: 'Hoa huệ', price: 1500000, srcImg: require("../assets/images/catalog/product/7-366x450.jpg") },
        { id: 4, name: 'Hoa mẫu đơn', price: 590000, srcImg: require("../assets/images/catalog/product/9-366x450.jpg") },
        { id: 5, name: 'Hoa lan', price: 999000, srcImg: require("../assets/images/catalog/product/11-366x450.jpg") },
        { id: 6, name: 'Hoa hướng dương', price: 890000, srcImg: require("../assets/images/catalog/product/13-366x450.jpg") },

      ],
    },
    {
      id: 'tab-2',
      categoryName: "Mới nhập",
      active: "",
      categoryProductList: [
        { id: 1, name: 'Hello', price: 122, srcImg: require("../assets/images/catalog/product/3-366x450.jpg") },
        { id: 2, name: 'IPOD CLASSNAMEIC', price: 122, srcImg: require("../assets/images/catalog/product/5-366x450.jpg") },
        { id: 3, name: 'MACBOOK', price: 602, srcImg: require("../assets/images/catalog/product/7-366x450.jpg") },
        { id: 4, name: 'NIKON D300', price: 98, srcImg: require("../assets/images/catalog/product/9-366x450.jpg") },
        { id: 5, name: 'SAMSUNG SYNCMASTER 941BW', price: 242, srcImg: require("../assets/images/catalog/product/11-366x450.jpg") },
        { id: 6, name: 'SONY VAIO', price: 1202, srcImg: require("../assets/images/catalog/product/13-366x450.jpg") },

      ],
    }
  ];

  export const arrLatestNew = [
    { id: 1, srcImg: require("../assets/images/catalog/blogs/1-835x455.jpg") },
    { id: 2, srcImg: require("../assets/images/catalog/blogs/2-835x455.jpg") },
    { id: 3, srcImg: require("../assets/images/catalog/blogs/3-835x455.jpg") },
    { id: 4, srcImg: require("../assets/images/catalog/blogs/4-835x455.jpg") },
    { id: 5, srcImg: require("../assets/images/catalog/blogs/5-835x455.jpg") },
  ]

  export const arrManufacturer = [
    { id: 1, srcImg: require("../assets/images/catalog/manufacturer/brand1-108x108.png") },
    { id: 2, srcImg: require("../assets/images/catalog/manufacturer/brand2-108x108.png") },
    { id: 3, srcImg: require("../assets/images/catalog/manufacturer/brand3-108x108.png") },
    { id: 4, srcImg: require("../assets/images/catalog/manufacturer/brand4-108x108.png") },
    { id: 5, srcImg: require("../assets/images/catalog/manufacturer/brand5-108x108.png") },
    { id: 6, srcImg: require("../assets/images/catalog/manufacturer/brand6-108x108.png") },
    { id: 7, srcImg: require("../assets/images/catalog/manufacturer/brand7-108x108.png") },
    { id: 8, srcImg: require("../assets/images/catalog/manufacturer/brand8-108x108.png") },
    { id: 9, srcImg: require("../assets/images/catalog/manufacturer/brand9-108x108.png") },
    { id: 10, srcImg: require("../assets/images/catalog/manufacturer/brand10-108x108.png") },
  ]

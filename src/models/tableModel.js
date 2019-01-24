import React from "react";
import {
  formatDate,
  formatCurrency,
  initGalleryZoom
} from "../utilities/fnUtil";
import { Tag, Switch } from "antd";

export const productTable = [
  {
    title: "Mã",
    dataIndex: "_id",
    key: "_id",
    fixed: "left"
  },
  {
    title: "Tên",
    dataIndex: "productName",
    key: "productName",
    fixed: "left"
  },
  {
    title: "Hình Ảnh",
    key: "images",
    dataIndex: "images",
    render: (images, record) => (
      <div
        className={"gallery_zoom_admin" + record._id}
        onLoad={initGalleryZoom(".gallery_zoom_admin" + record._id)}
      >
        {images.map((img, index) => (
          <a
            href={img}
            key={index}
            style={{
              width: "50px",
              height: "50px",
              display: "inline-block",
              marginRight: "5px"
            }}
          >
            <img
              src={img}
              alt="Error"
              width="50"
              height="50"
              style={{ pointerEvents: "none" }}
            />
          </a>
        ))}
      </div>
    )
  },
  {
    title: "Giá",
    dataIndex: "price",
    key: "price",
    render: item => formatCurrency(item)
  },
  {
    title: "Giảm Giá (%)",
    dataIndex: "discount",
    key: "discount"
  },
  {
    title: "Kiểu",
    key: "type",
    dataIndex: "type",
    render: items => (
      <span>
        {items.map(tag => (
          <Tag color="blue" key={tag}>
            {tag}
          </Tag>
        ))}
      </span>
    )
  },
  {
    title: "Hình Thức",
    key: "form",
    dataIndex: "form",
    render: items => (
      <span>
        {items.map(tag => (
          <Tag color="blue" key={tag}>
            {tag}
          </Tag>
        ))}
      </span>
    )
  },
  {
    title: "Màu Sắc",
    key: "color",
    dataIndex: "color",
    render: items => (
      <span>
        {items.map(tag => (
          <Tag color="blue" key={tag}>
            {tag}
          </Tag>
        ))}
      </span>
    )
  },
  {
    title: "Sự Kiện",
    key: "event",
    dataIndex: "event",
    render: items => (
      <span>
        {items.map(tag => (
          <Tag color="blue" key={tag}>
            {tag}
          </Tag>
        ))}
      </span>
    )
  },
  {
    title: "Ngày Lễ",
    key: "holiday",
    dataIndex: "holiday",
    render: items => (
      <span>
        {items.map(tag => (
          <Tag color="blue" key={tag}>
            {tag}
          </Tag>
        ))}
      </span>
    )
  },
  {
    title: "Hàng Sale",
    key: "sale",
    dataIndex: "sale",
    render: item => <Switch size="small" checked={item} disabled />
  },
  {
    title: "Hàng Mới",
    key: "new",
    dataIndex: "new",
    render: item => <Switch size="small" checked={item} disabled />
  },
  {
    title: "Hàng Hot",
    key: "hot",
    dataIndex: "hot",
    render: item => <Switch size="small" checked={item} disabled />
  },
  {
    title: "Mô Tả",
    key: "description",
    dataIndex: "description"
  },
  {
    title: "Ngày Tạo",
    key: "createdAt",
    dataIndex: "createdAt",
    render: item => formatDate(item)
  },
  {
    title: "Ngày Chỉnh Sửa",
    key: "updatedAt",
    dataIndex: "updatedAt",
    render: item => formatDate(item)
  }
];

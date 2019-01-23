import React from "react";
import {
  formatDate,
  formatCurrency,
  initGalleryZoom
} from "../utilities/fnUtil";
import { Tag, Switch, Input, Button, Icon } from "antd";
import Highlighter from "react-highlight-words";

const getColumnSearchProps = (
  dataIndex,
  name,
  handleSearch,
  handleReset,
  searchText,
  searchInput,
  renderType
) => ({
  filterDropdown: ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters
  }) => (
    <div style={{ padding: 8 }}>
      <Input
        ref={node => {
          searchInput = node;
        }}
        placeholder={`Tìm Theo ${name}`}
        value={selectedKeys[0]}
        onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
        onPressEnter={() => handleSearch(selectedKeys, confirm)}
        style={{ width: 188, marginBottom: 8, display: "block" }}
      />
      <Button
        type="primary"
        onClick={() => handleSearch(selectedKeys, confirm)}
        icon="search"
        size="small"
        style={{ width: 90, marginRight: 8 }}
      >
        Search
      </Button>
      <Button
        onClick={() => handleReset(clearFilters)}
        size="small"
        style={{ width: 90 }}
      >
        Reset
      </Button>
    </div>
  ),
  filterIcon: filtered => (
    <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
  ),
  onFilter: (value, record) => {
    switch (renderType) {
      case "date":
        return formatDate(record[dataIndex])
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase());

      default:
        return record[dataIndex]
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase());
    }
  },
  onFilterDropdownVisibleChange: visible => {
    if (visible) {
      setTimeout(() => searchInput.select());
    }
  },
  render: text => {
    switch (renderType) {
      case "date":
        return formatDate(text);
      default:
        return (
          <Highlighter
            highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text.toString()}
          />
        );
    }
  }
});

export const createDataProductListColumns = (
  handleSearch,
  handleReset,
  searchText,
  searchInput
) => {
  const arr = [
    {
      title: "Mã",
      dataIndex: "_id",
      key: "_id",
      fixed: "left",
      ...getColumnSearchProps(
        "_id",
        "Mã SP",
        handleSearch,
        handleReset,
        searchText,
        searchInput
      )
    },
    {
      title: "Tên",
      dataIndex: "productName",
      key: "productName",
      fixed: "left",
      ...getColumnSearchProps(
        "productName",
        "Tên SP",
        handleSearch,
        handleReset,
        searchText,
        searchInput
      )
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
      ...getColumnSearchProps(
        "createdAt",
        "Ngày Tạo",
        handleSearch,
        handleReset,
        searchText,
        searchInput,
        "date"
      )
    },
    {
      title: "Ngày Chỉnh Sửa",
      key: "updatedAt",
      dataIndex: "updatedAt",
      ...getColumnSearchProps(
        "updatedAt",
        "Ngày Cập Nhật",
        handleSearch,
        handleReset,
        searchText,
        searchInput,
        "date"
      )
    }
  ];
  return arr;
};

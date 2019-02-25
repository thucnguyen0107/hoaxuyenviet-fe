import React from "react";
import {
  formatDate,
  formatCurrency,
  initGalleryZoom,
  createContentHtmlString,
  convertStatus
} from "../utilities/fnUtil";
import { convertItemToName } from "../utilities/categoriesUtil";
import { Tag, Switch, Input, Button, Icon, Collapse } from "antd";
import Highlighter from "react-highlight-words";

const getColumnSearchProps = (
  dataIndex,
  name,
  handleSearch,
  handleReset,
  searchText,
  searchInput,
  renderType,
  categoryType
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
          Tìm
      </Button>
        <Button
          onClick={() => handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Xóa
      </Button>
      </div>
    ),
  filterIcon: filtered => (
    <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
  ),
  onFilter: (value, record) => {
    switch (renderType) {
      case "date":
        return formatDate(record[dataIndex], true)
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase());
      case "birthDate":
        return formatDate(record[dataIndex])
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase());
      case "category":
        return convertItemToName(record[dataIndex], categoryType)
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase());
      case "status":
        return convertStatus(record[dataIndex])
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
  render: item => {
    switch (renderType) {
      case "date":
        return formatDate(item);
      case "birthDate":
        return formatDate(item, true);
      case "status":
        if (item === "PENDING") return <Tag color="#87d068">{convertStatus(item)}</Tag>;
        if (item === "DELIVERING") return <Tag color="#108ee9">{convertStatus(item)}</Tag>;
        if (item === "COMPLETED") return <Tag color="#9e0b0b">{convertStatus(item)}</Tag>;
        break;
      case "category":
        return (
          <span>
            {convertItemToName(item, categoryType).map(tag => (
              <Tag color="blue" key={tag}>
                {tag}
              </Tag>
            ))}
          </span>
        );
      default:
        return (
          <Highlighter
            highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={item ? item.toString() : ""}
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
          {images ? images.map((img, index) => (
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
          )) : null}
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
      ...getColumnSearchProps(
        "type",
        "Kiểu Loại",
        handleSearch,
        handleReset,
        searchText,
        searchInput,
        "category",
        "type"
      )
    },
    {
      title: "Hình Thức",
      key: "form",
      dataIndex: "form",
      ...getColumnSearchProps(
        "form",
        "Hình Thức",
        handleSearch,
        handleReset,
        searchText,
        searchInput,
        "category",
        "form"
      )
    },
    {
      title: "Màu Sắc",
      key: "color",
      dataIndex: "color",
      ...getColumnSearchProps(
        "color",
        "Màu Sắc",
        handleSearch,
        handleReset,
        searchText,
        searchInput,
        "category",
        "color"
      )
    },
    {
      title: "Sự Kiện",
      key: "event",
      dataIndex: "event",
      ...getColumnSearchProps(
        "event",
        "Sự Kiện",
        handleSearch,
        handleReset,
        searchText,
        searchInput,
        "category",
        "event"
      )
    },
    {
      title: "Ngày Lễ",
      key: "holiday",
      dataIndex: "holiday",
      ...getColumnSearchProps(
        "holiday",
        "Ngày Lễ",
        handleSearch,
        handleReset,
        searchText,
        searchInput,
        "category",
        "holiday"
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
      dataIndex: "description",
      render: content => (
        <>
          <Collapse>
            <Collapse.Panel header="Chi Tiết">
           
            <div dangerouslySetInnerHTML={createContentHtmlString(content)}></div>
                
            </Collapse.Panel>
          </Collapse>
        </>
      )
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
      title: "Ngày Cập Nhật",
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

export const createDataUserListColumns = (
  handleSearch,
  handleReset,
  searchText,
  searchInput
) => {
  const arr = [
    {
      title: "Số Di Động",
      dataIndex: "_id",
      key: "_id",
      ...getColumnSearchProps(
        "_id",
        "Số ĐT",
        handleSearch,
        handleReset,
        searchText,
        searchInput
      )
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps(
        "name",
        "Tên Khách",
        handleSearch,
        handleReset,
        searchText,
        searchInput
      )
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      ...getColumnSearchProps(
        "email",
        "Email",
        handleSearch,
        handleReset,
        searchText,
        searchInput
      )
    },
    {
      title: "Địa Chỉ",
      dataIndex: "address",
      key: "address",
      ...getColumnSearchProps(
        "address",
        "Địa Chỉ",
        handleSearch,
        handleReset,
        searchText,
        searchInput
      )
    },
    {
      title: "Giới Tính",
      dataIndex: "gender",
      key: "gender",
      ...getColumnSearchProps(
        "gender",
        "Giới Tính",
        handleSearch,
        handleReset,
        searchText,
        searchInput
      )
    },
    {
      title: "Ngày Sinh",
      dataIndex: "birth",
      key: "birth",
      ...getColumnSearchProps(
        "birth",
        "Ngày Sinh",
        handleSearch,
        handleReset,
        searchText,
        searchInput,
        "birthDate"
      )
    },
    {
      title: "Điểm Tích Lũy",
      dataIndex: "rewardPoints",
      key: "rewardPoints",
      ...getColumnSearchProps(
        "rewardPoints",
        "Điểm",
        handleSearch,
        handleReset,
        searchText,
        searchInput
      )
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
      title: "Ngày Cập Nhật",
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

export const createDataOrderListColumns = (
  handleSearch,
  handleReset,
  searchText,
  searchInput
) => {
  const arr = [
    {
      title: "Mã Đơn Hàng",
      dataIndex: "_id",
      key: "_id",
      fixed: "left",
      ...getColumnSearchProps(
        "_id",
        "Mã Đơn",
        handleSearch,
        handleReset,
        searchText,
        searchInput
      )
    },
    {
      title: "Hàng Đặt",
      dataIndex: "productOrder",
      key: "productOrder",
      render: record => (
        <>
          <Collapse>
            <Collapse.Panel header="Chi Tiết">
              {record.length ? record.map(item => {
                return (
                  <div key={item._id}>
                    <span style={{ marginRight: "10px" }}>{`Tên: ${
                      item.productName
                      }, Giá: ${formatCurrency(item.price)}, Số Lượng: ${
                      item.quantity
                      }, Giảm Giá: ${item.discount}`}</span>
                    {item.images.map((img, index) => {
                      return (
                        <img
                          style={{ marginRight: "5px" }}
                          key={index}
                          src={img}
                          alt="productImage"
                          height="40"
                          width="40"
                        />
                      );
                    })}
                  </div>
                );
              }) : null}
            </Collapse.Panel>
          </Collapse>
        </>
      )
    },
    {
      title: "Tổng Giá",
      dataIndex: "finalPrice",
      key: "finalPrice",
      render: item => formatCurrency(item)
    },
    {
      title: "Thông Tin Thêm",
      dataIndex: "note",
      key: "note"
    },
    {
      title: "Thanh Toán",
      dataIndex: "payment",
      key: "payment"
    },
    {
      title: "Người Đặt",
      dataIndex: "customerInfo",
      key: "customerInfo",
      render: record => (
        <>
          <Collapse>
            <Collapse.Panel header="Chi Tiết">
              <p>Tên: {record.name}</p>
              <p>Di Động: {record.phone}</p>
              <p>Email: {record.email}</p>
              <p>Địa Chỉ: {record.address}</p>
            </Collapse.Panel>
          </Collapse>
        </>
      )
    },
    {
      title: "Người Nhận",
      dataIndex: "receiverInfo",
      key: "receiverInfo",
      render: record => {
        if (!record) {
          return null;
        }
        return (
          <Collapse>
            <Collapse.Panel header="Chi Tiết">
              <p>Tên: {record.name}</p>
              <p>Di Động: {record.phone}</p>
              <p>Email: {record.email}</p>
              <p>Địa Chỉ: {record.address}</p>
            </Collapse.Panel>
          </Collapse>
        );
      }
    },
    {
      title: "Ngày Đặt",
      key: "createdAt",
      dataIndex: "createdAt",
      ...getColumnSearchProps(
        "createdAt",
        "Ngày Đặt",
        handleSearch,
        handleReset,
        searchText,
        searchInput,
        "date"
      )
    },
    {
      title: "Ngày Cập Nhật",
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
    },
    {
      title: "Trạng Thái",
      dataIndex: "status",
      key: "status",
      ...getColumnSearchProps(
        "status",
        "Trạng Thái",
        handleSearch,
        handleReset,
        searchText,
        searchInput,
        "status"
      )
    }
  ];
  return arr;
};

export const createDataBlogListColumns = (
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
      ...getColumnSearchProps(
        "_id",
        "Mã Blog",
        handleSearch,
        handleReset,
        searchText,
        searchInput
      )
    },
    {
      title: "Tên",
      dataIndex: "title",
      key: "title",
      ...getColumnSearchProps(
        "title",
        "Tên Blog",
        handleSearch,
        handleReset,
        searchText,
        searchInput
      )
    },
    {
      title: "Hình Ảnh",
      key: "image",
      dataIndex: "image",
      render: (image, record) => (
        <div
          className={"gallery_zoom_blog" + record._id}
          onLoad={initGalleryZoom(".gallery_zoom_blog" + record._id)}
        >
          <a
            href={image}
            style={{
              width: "50px",
              height: "50px",
              display: "inline-block",
            }}
          >
            <img
              src={image}
              alt="Error"
              width="50"
              height="50"
              style={{ pointerEvents: "none" }}
            />
          </a>
        </div>
      )
    },
    {
      title: "Nội Dung",
      key: "content",
      dataIndex: "content",
      render: content => (
        <>
          <Collapse>
            <Collapse.Panel header="Chi Tiết">
              <div dangerouslySetInnerHTML={createContentHtmlString(content)}></div>
            </Collapse.Panel>
          </Collapse>
        </>
      )
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
      title: "Ngày Cập Nhật",
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
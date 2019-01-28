import React from "react";
import { Table } from "antd";
import { createDataProductListColumns } from "../../../models/tableModel";

class UserManagement extends React.Component {
  state = {
    searchText: "",
    userList: []
  };

  // search on table
  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  // reset search field on table
  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  render() {
    const dataColumns = createDataProductListColumns(
      this.handleSearch,
      this.handleReset,
      this.state.searchText,
      this.searchInput
    ).slice();

    const columns = dataColumns;
    let data = !this.state.userList.length
      ? []
      : this.state.userList.map(item => {
          return {
            key: item._id,
            _id: item._id,
            productName: item.productName,
            images: item.images,
            price: item.price,
            discount: item.discount,
            type: item.type,
            form: item.form,
            event: item.event,
            holiday: item.holiday,
            color: item.color,
            new: item.new,
            hot: item.hot,
            sale: item.sale,
            description: item.description,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt
          };
        });

    return (
      <>
        <div>
          <Table columns={columns} dataSource={data} />
        </div>
      </>
    );
  }
}

export default UserManagement;

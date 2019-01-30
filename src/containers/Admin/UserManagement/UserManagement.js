import React from "react";
import { Table, Button, Popconfirm } from "antd";
import { createDataUserListColumns } from "../../../models/tableModel";
import Actions from "../../../redux/rootActions";
import { connect } from "react-redux";

class UserManagement extends React.Component {
  state = {
    searchText: "",
    userList: []
  };

  constructor(props) {
    super(props);
    props.getUserList();
  }

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
    const dataColumns = createDataUserListColumns(
      this.handleSearch,
      this.handleReset,
      this.state.searchText,
      this.searchInput
    ).slice();
    dataColumns.push({
      title: "Action",
      key: "action",
      render: record => (
        <>
          <Popconfirm
            title="Bạn có chắc chắn muốn xóa?"
            onConfirm={() => this.props.deleteUserById(record._id)}
            okText="Đồng Ý"
            cancelText="Hủy"
          >
            <Button type="danger">Xóa</Button>
          </Popconfirm>
        </>
      )
    });

    const columns = dataColumns;
    let data = !this.props.userStore.userList.length
      ? []
      : this.props.userStore.userList.map(item => {
          return {
            key: item._id,
            _id: item._id,
            name: !item.userInfo ? "" : item.userInfo.name,
            email: !item.userInfo ? "" : item.userInfo.email,
            address: !item.userInfo ? "" : item.userInfo.address,
            birth: !item.userInfo ? "" : item.userInfo.birth,
            gender: !item.userInfo ? "" : item.userInfo.gender,
            rewardPoints: !item.userInfo.rewardPoints
              ? ""
              : item.userInfo.rewardPoints,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt
          };
        });

    return (
      <>
        <div>
          <Table
            columns={columns}
            dataSource={data}
            bordered
            scroll={{ x: true }}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    userStore: state.userList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserList: () => dispatch(Actions.userActions.getUserListFromSV()),
    deleteUserById: id => dispatch(Actions.userActions.deleteUserToSV(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserManagement);

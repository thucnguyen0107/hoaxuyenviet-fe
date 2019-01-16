import React from "react";
import { Button, Table } from "antd";
import Modal from "../../../components/Shop/UI/Modal/Modal";

class ProductManagement extends React.Component {
  state = {
    createModal: {
      show: false,
      showModal: () =>
        this.setState({
          createModal: { ...this.state.createModal, ...{ show: true } }
        }),
      handleOk: () =>
        this.setState({
          createModal: { ...this.state.createModal, ...{ show: false } }
        }),
      handleCancel: () =>
        this.setState({
          createModal: { ...this.state.createModal, ...{ show: false } }
        })
    }
  };
  render() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age"
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address"
      },
      {
        title: "Tags",
        key: "tags",
        dataIndex: "tags"
      },
      {
        title: "Action",
        key: "action",
        render: () => <Button type="primary">Sửa</Button>
      }
    ];

    const data = [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: "nice"
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: "loser"
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: "cool"
      }
    ];
    return (
      <>
        <div style={{ marginBottom: "20px" }}>
          <Button type="primary" onClick={this.state.createModal.showModal}>
            Tạo Mới
          </Button>
        </div>
        <div>
          <Table columns={columns} dataSource={data} />
        </div>

        {/* Modals */}
        <Modal
          id="hello"
          modal={this.state.createModal}
          title="Tạo Sản Phẩm Mới"
        />
        {/* End Modals */}
      </>
    );
  }
}

export default ProductManagement;

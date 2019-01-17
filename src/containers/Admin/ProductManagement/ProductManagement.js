import React from "react";
import { Button, Table, Divider } from "antd";
import Modal from "../../../components/UI/Modal/Modal";
import Actions from "../../../redux/rootActions";
import { connect } from "react-redux";

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

  constructor(props) {
    super(props);
    console.log(props);
    props.getListProduct();
  }

  render() {
    const columns = [
      {
        title: "Mã",
        dataIndex: "productId",
        key: "productId",
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
        dataIndex: "images"
      },
      {
        title: "Giá",
        dataIndex: "price",
        key: "price"
      },
      {
        title: "Giảm Giá (%)",
        dataIndex: "discount",
        key: "discount"
      },
      {
        title: "Kiểu",
        key: "type",
        dataIndex: "type"
      },
      {
        title: "Hình Thức",
        key: "form",
        dataIndex: "form"
      },
      {
        title: "Màu Sắc",
        key: "color",
        dataIndex: "color"
      },
      {
        title: "Sự Kiện",
        key: "event",
        dataIndex: "event"
      },
      {
        title: "Ngày Lễ",
        key: "holiday",
        dataIndex: "holiday"
      },
      {
        title: "Hàng Sale",
        key: "sale",
        dataIndex: "sale"
      },
      {
        title: "Hàng Mới",
        key: "new",
        dataIndex: "new"
      },
      {
        title: "Hàng Hot",
        key: "hot",
        dataIndex: "hot"
      },
      {
        title: "Mô Tả",
        key: "description",
        dataIndex: "description"
      },
      {
        title: "Ngày Tạo",
        key: "createdAt",
        dataIndex: "createdAt"
      },
      {
        title: "Ngày Chỉnh Sửa",
        key: "updatedAt",
        dataIndex: "updatedAt"
      },
      {
        title: "Action",
        key: "action",
        render: () => (
          <>
            <Button type="primary">Sửa</Button>
            <Divider type="vertical" />
            <Button type="danger">Xóa</Button>
          </>
        )
      }
    ];

    let data = !this.props.productStore.productList.length
      ? []
      : this.props.productStore.productList.map(item => {
          return {
            key: item._id,
            productId: item._id,
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
            description: item.decsription,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt
          };
        });
    console.log(data);
    // const data = [
    //   {
    //     key: "1",
    //     name: "John Brown",
    //     age: 32,
    //     address: "New York No. 1 Lake Park",
    //     tags: "nice"
    //   },
    //   {
    //     key: "2",
    //     name: "Jim Green",
    //     age: 42,
    //     address: "London No. 1 Lake Park",
    //     tags: "loser"
    //   },
    //   {
    //     key: "3",
    //     name: "Joe Black",
    //     age: 32,
    //     address: "Sidney No. 1 Lake Park",
    //     tags: "cool"
    //   }
    // ];
    return (
      <>
        <div style={{ marginBottom: "20px" }}>
          <Button type="primary" onClick={this.state.createModal.showModal}>
            Tạo Mới
          </Button>
        </div>
        <div>
          <Table
            columns={columns}
            dataSource={data}
            bordered
            scroll={{ x: true }}
          />
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

const mapStateToProps = state => {
  return {
    productStore: state.productList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListProduct: () =>
      dispatch(Actions.productActions.getProductListFromSV())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductManagement);

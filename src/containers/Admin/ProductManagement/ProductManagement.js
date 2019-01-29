import React from "react";
import { Button, Table, Divider, Popconfirm } from "antd";
import Modal from "../../../components/UI/Modal/Modal";
import Actions from "../../../redux/rootActions";
import { connect } from "react-redux";
import {
  getDataForm,
  convertToDataForm,
  cloneData
} from "../../../utilities/fnUtil";
import { ProductFormModel } from "../../../models/formModel";
import { createDataProductListColumns } from "../../../models/tableModel";

class ProductManagement extends React.Component {
  state = {
    searchText: "",
    createModal: {
      show: false,
      showModal: () =>
        this.setState({
          createModal: { ...this.state.createModal, ...{ show: true } }
        }),
      handleCancel: () =>
        this.setState({
          createModal: { ...this.state.createModal, ...{ show: false } }
        })
    },
    editModal: {
      show: false,
      handleCancel: () =>
        this.setState({
          editModal: { ...this.state.editModal, ...{ show: false } }
        })
    },
    createProductForm: cloneData(ProductFormModel),
    editProductForm: cloneData(ProductFormModel)
  };

  constructor(props) {
    super(props);
    console.log(props);
    props.getListProduct();
  }

  setStateForm = (object, submit = false) => {
    this.setState(object, () => {
      if (this.state.formIsValid && submit) {
        const product = getDataForm(this.state.createProductForm);
        this.props.createNewProduct(product);
        this.setState(
          {
            createModal: { ...this.state.createModal, ...{ show: false } },
            createProductForm: cloneData(ProductFormModel)
          },
          () => document.getElementById("createProductForm").reset()
        );
      }
    });
  };

  // Create new product
  setStateEditForm = (object, submit = false) => {
    this.setState(object, () => {
      if (this.state.formIsValid && submit) {
        const product = getDataForm(this.state.editProductForm);
        this.props.updateProductById(product._id, product);
        this.setState({
          editModal: { ...this.state.editModal, ...{ show: false } }
        });
      }
    });
  };

  // Update product
  setDataEditForm = data => {
    const newDataForm = convertToDataForm(
      data,
      cloneData(this.state.editProductForm)
    );
    this.setState({
      editModal: { ...this.state.editModal, ...{ show: true } },
      editProductForm: newDataForm
    });
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
    dataColumns.push({
      title: "Action",
      key: "action",
      render: record => (
        <>
          <Button type="primary" onClick={() => this.setDataEditForm(record)}>
            Sửa
          </Button>
          <Divider type="vertical" />
          <Popconfirm
            title="Bạn có chắc chắn muốn xóa?"
            onConfirm={() => this.props.deleteProductById(record._id)}
            okText="Đồng Ý"
            cancelText="Hủy"
          >
            <Button type="danger">Xóa</Button>
          </Popconfirm>
        </>
      )
    });
    const columns = dataColumns;

    let data = !this.props.productStore.productList.length
      ? []
      : this.props.productStore.productList.map(item => {
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
        {/* Create Modal */}
        <Modal
          id="createModal"
          modal={this.state.createModal}
          title="Tạo Sản Phẩm Mới"
          idForm="createProductForm"
          nameForm="createProductForm"
          btnName="Tạo"
          setStateForm={this.setStateForm}
          originalForm={this.state.createProductForm}
          cancelText="Hủy"
          visible={this.state.createModal.show}
          onCancel={this.state.createModal.handleCancel}
          maskClosable={false}
          footer={[
            <Button key="back" onClick={this.state.createModal.handleCancel}>
              Hủy
            </Button>
          ]}
        />

        {/* Edit Modal */}
        <Modal
          id="editModal"
          modal={this.state.editModal}
          title="Chỉnh Sửa Sản Phẩm"
          idForm="editProductForm"
          nameForm="editProductForm"
          btnName="Lưu"
          setStateForm={this.setStateEditForm}
          originalForm={this.state.editProductForm}
          cancelText="Hủy"
          visible={this.state.editModal.show}
          onCancel={this.state.editModal.handleCancel}
          notUpdate={true}
          maskClosable={false}
          footer={[
            <Button key="back" onClick={this.state.editModal.handleCancel}>
              Hủy
            </Button>
          ]}
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
      dispatch(Actions.productActions.getProductListFromSV()),
    createNewProduct: data =>
      dispatch(Actions.productActions.createNewProduct(data)),
    updateProductById: (id, data) =>
      dispatch(Actions.productActions.updateProductToSV(id, data)),
    deleteProductById: id =>
      dispatch(Actions.productActions.deleteProductToSV(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductManagement);

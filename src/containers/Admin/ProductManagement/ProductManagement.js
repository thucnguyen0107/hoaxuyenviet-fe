import React from "react";
import { Button, Table, Divider, Tag, Switch } from "antd";
import Modal from "../../../components/UI/Modal/Modal";
import Actions from "../../../redux/rootActions";
import { connect } from "react-redux";
import { formatDate, formatCurrency, initGalleryZoom, getDataForm, convertToDataForm, cloneData } from '../../../utilities/fnUtil';
import { createNewProductFormModel } from '../../../models/formModel';
import { productTable } from '../../../models/tableModel';

class ProductManagement extends React.Component {
  state = {
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
    createProductForm: cloneData(createNewProductFormModel),
    editProductForm: cloneData(createNewProductFormModel)
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
        this.setState({
          createModal: {...this.state.createModal, ...{show: false}},
          createProductForm: cloneData(createNewProductFormModel)
        },() => document.getElementById('createProductForm').reset() )
      }
    });
  };

  setStateEditForm = (object, submit = false) => {
    this.setState(object, () => {
      if (this.state.formIsValid && submit) {
        console.log('EDITED');
        // const product = getDataForm(this.state.createProductForm);
        // this.props.createNewProduct(product);
        // this.setState({
        //   createModal: {...this.state.createModal, ...{show: false}},
        //   createProductForm: this.state.originCreateProductForm
        // },() => document.getElementById('createProductForm').reset() )
      }
    });
  };

  setDataEditForm = (data) => {
    const newDataForm = convertToDataForm(data, cloneData(this.state.editProductForm));
    this.setState({
      editModal: { ...this.state.editModal, ...{ show: true } },
      editProductForm: newDataForm
    })
  }
  render() {
    const columns = [
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
          <div className={"gallery_zoom_admin" + record._id} onLoad={initGalleryZoom(".gallery_zoom_admin" + record._id)}>
            {
              images.map((img, index) => (
              <a href={img} key={index} style={{width: "50px", height: "50px", display: "inline-block", marginRight: "5px"}}>
              <img src={img} alt="Error" width="50" height="50" style={{pointerEvents: "none"}}/>
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
            {items.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
        </span>
        )
      },
      {
        title: "Hình Thức",
        key: "form",
        dataIndex: "form",
        render: items => (
          <span>
            {items.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
        </span>
        )
      },
      {
        title: "Màu Sắc",
        key: "color",
        dataIndex: "color",
        render: items => (
          <span>
            {items.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
        </span>
        )
      },
      {
        title: "Sự Kiện",
        key: "event",
        dataIndex: "event",
        render: items => (
          <span>
            {items.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
        </span>
        )
      },
      {
        title: "Ngày Lễ",
        key: "holiday",
        dataIndex: "holiday",
        render: items => (
          <span>
            {items.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
        </span>
        )
      },
      {
        title: "Hàng Sale",
        key: "sale",
        dataIndex: "sale",
        render: item => (
          <Switch size="small" checked={item} disabled/>
        )
      },
      {
        title: "Hàng Mới",
        key: "new",
        dataIndex: "new",
        render: item => (
          <Switch size="small" checked={item} disabled/>
        )
      },
      {
        title: "Hàng Hot",
        key: "hot",
        dataIndex: "hot",
        render: item => (
          <Switch size="small" checked={item} disabled/>
        )
      },
      {
        title: "Mô Tả",
        key: "description",
        dataIndex: "description",
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
      },
      {
        title: "Action",
        key: "action",
        render: (record) => (
          <>
            <Button type="primary" onClick={() => this.setDataEditForm(record)}>Sửa</Button>
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
            description: item.description.join(','),
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
            <Button key="back" onClick={this.state.createModal.handleCancel}>Hủy</Button>
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
          // setStateForm={this.setStateEditForm}
          originalForm={this.state.editProductForm}
          cancelText="Hủy"
          visible={this.state.editModal.show}
          onCancel={this.state.editModal.handleCancel}
          maskClosable={false}
          footer={[
            <Button key="back" onClick={this.state.editModal.handleCancel}>Hủy</Button>
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
    createNewProduct: (data) =>
      dispatch(Actions.productActions.createNewProduct(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductManagement);

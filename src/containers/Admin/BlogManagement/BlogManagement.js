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
import { BlogFormModel } from "../../../models/formModel";
import { createDataBlogListColumns } from "../../../models/tableModel";

class BlogManagement extends React.Component {
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
    createBlogForm: cloneData(BlogFormModel),
    editBlogForm: cloneData(BlogFormModel)
  };

  constructor(props) {
    super(props);
    props.getListBlog();
  }

  setStateForm = (object, submit = false) => {
    this.setState(object, () => {
      if (this.state.formIsValid && submit) {
        const blog = getDataForm(this.state.createBlogForm);
        this.props.createNewBlog(blog);
        this.setState(
          {
            createModal: { ...this.state.createModal, ...{ show: false } },
            createBlogForm: cloneData(BlogFormModel)
          },
          () => document.getElementById("createBlogForm").reset()
        );
      }
    });
  };

  // Create new blog
  setStateEditForm = (object, submit = false) => {
    this.setState(object, () => {
      if (this.state.formIsValid && submit) {
        const blog = getDataForm(this.state.editBlogForm);
        this.props.updateBlogById(blog._id, blog);
        this.setState({
          editModal: { ...this.state.editModal, ...{ show: false } }
        });
      }
    });
  };

  // Update blog
  setDataEditForm = data => {
    const newDataForm = convertToDataForm(
      data,
      cloneData(this.state.editBlogForm)
    );
    this.setState({
      editModal: { ...this.state.editModal, ...{ show: true } },
      editBlogForm: newDataForm
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
    const dataColumns = createDataBlogListColumns(
      this.handleSearch,
      this.handleReset,
      this.state.searchText,
      this.searchInput
    ).slice();
    dataColumns.push({
      title: "Hành Động",
      key: "action",
      render: record => (
        <>
          <Button type="primary" onClick={() => this.setDataEditForm(record)}>
            Sửa
          </Button>
          <Divider type="vertical" />
          <Popconfirm
            title="Bạn có chắc chắn muốn xóa?"
            onConfirm={() => this.props.deleteBlogById(record._id)}
            okText="Đồng Ý"
            cancelText="Hủy"
          >
            <Button type="danger">Xóa</Button>
          </Popconfirm>
        </>
      )
    });
    const columns = dataColumns;

    let data = !this.props.blogStore.blogList.length
      ? []
      : this.props.blogStore.blogList.map(item => {
          return {
            key: item._id,
            _id: item._id,
            title: item.title,
            image: item.image,
            content: item.content,
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
           style={{textTransform:'capitalize'}}
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
          idForm="createBlogForm"
          nameForm="createBlogForm"
          btnName="Tạo"
          setStateForm={this.setStateForm}
          originalForm={this.state.createBlogForm}
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
          idForm="editBlogForm"
          nameForm="editBlogForm"
          btnName="Lưu"
          setStateForm={this.setStateEditForm}
          originalForm={this.state.editBlogForm}
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
    blogStore: state.blogList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListBlog: () =>
      dispatch(Actions.blogActions.getBlogListFromSV()),
    createNewBlog: data =>
      dispatch(Actions.blogActions.createNewBlog(data)),
    updateBlogById: (id, data) =>
      dispatch(Actions.blogActions.updateBlogToSV(id, data)),
    deleteBlogById: id =>
      dispatch(Actions.blogActions.deleteBlogToSV(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogManagement);

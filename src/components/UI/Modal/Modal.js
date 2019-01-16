import React from "react";
import { Modal } from "antd";

const CustomModal = props => {
  return (
    <Modal
      visible={props.modal.show}
      onOk={props.modal.handleOk}
      onCancel={props.modal.handleCancel}
      {...props}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default CustomModal;

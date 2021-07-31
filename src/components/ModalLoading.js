import React from "react";
import { Modal, Spinner } from "react-bootstrap";

const ModalLoading = ({ show, handleClose }) => {
  return (
    <Modal
      backdrop="static"
      centered
      show={show}
      onHide={handleClose}
      className="loading-modal"
    >
      <Spinner animation="border" style={{ color: "#0c135f" }} />
    </Modal>
  );
};

export default ModalLoading;

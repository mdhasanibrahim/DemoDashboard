import React from "react";
import Modal from "react-bootstrap/Modal";

function PackageNameEdit(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-dark">
          Edit Package Name :
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Package Name :</p>
        <input
          className="form-control mb-3"
          style={{ height: "auto", width: "100%" }}
          type="text"
          placeholder="Enter package name here....."
        />
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-outline-success" onClick={props.onHide}>
          Save Changes
        </button>
        <button className="btn btn-outline-info" onClick={props.onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default PackageNameEdit;

import React from "react";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

function ScriptEdit(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        style={{ backgroundColor: "#6B649C", color: "white" }}
      >
        <Modal.Title style={{ width: "100%" }}>
          <h3>Edit Script :</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea class="form-control" rows="8">
          {props.data.itemConfig}
        </textarea>
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

export default ScriptEdit;

import React from "react";
import Modal from "react-bootstrap/Modal";

function SubCategoryNameEdit(props) {
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
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Sub-Category Name :
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Select a Sub-Category Name :</p>
        <select className="form-select mb-3" style={{ width: "50%" }}>
          {props.data.subCategory &&
            props.data.subCategory.map((subCategoryL) => (
              <option value={subCategoryL.id}>{subCategoryL.subCatName}</option>
            ))}
        </select>
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

export default SubCategoryNameEdit;

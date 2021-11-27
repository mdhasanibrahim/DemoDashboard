import React from "react";
import Modal from "react-bootstrap/Modal";

function CategoryNameEdit(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-dark">
          Edit Category Name :
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Select a Category Name :</p>
        <select className="form-select mb-3" style={{ width: "50%" }}>
          {props.data.category &&
            props.data.category.map((categoryL) => (
              <option value={categoryL.id}>{categoryL.categoryName}</option>
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

export default CategoryNameEdit;

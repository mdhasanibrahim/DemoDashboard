import React from "react";
import Modal from "react-bootstrap/Modal";

function AppSelect(props) {
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
          Add App :
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Select App :</p>
        <select className="form-select mb-3" style={{ width: "50%" }}>
          {props.data.applications &&
            props.data.applications.map((appL) => (
              <option value={appL.appId}>{appL.appName}</option>
            ))}
        </select>
        <p>Content Type :</p>
        <select className="form-select mb-3" style={{ width: "100%" }}>
          {props.data.contnetTypeList &&
            props.data.contnetTypeList.map((contentTypeL) => (
              <option value={contentTypeL.id}>{contentTypeL.type}</option>
            ))}
        </select>
        <p>Advertise Type :</p>
        <select className="form-select mb-3" style={{ width: "100%" }}>
          {props.data.addList &&
            props.data.addList.map((addL) => (
              <option value={addL.id}>{addL.name}</option>
            ))}
        </select>
        <p>Content Value :</p>
        <input
          className="form-control mb-3"
          style={{ height: "auto", width: "100%" }}
          type="text"
          placeholder="Enter content value here....."
        />
        <p>Social Type :</p>
        <select className="form-select mb-3" style={{ width: "100%" }}>
          <option value="Red">facebook</option>
          <option value="Green">instagram</option>
          <option selected value="Blue">
            youtube
          </option>
        </select>
        <p>Price Code :</p>
        <input
          className="form-control mb-3"
          style={{ height: "auto", width: "100%" }}
          type="text"
          placeholder="Enter price code here....."
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

export default AppSelect;

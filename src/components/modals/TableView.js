import React from "react";
import Modal from "react-bootstrap/Modal";

function TableView(props) {
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
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ textAlign: "center", width: "100%" }}
        >
          <h2 style={{ fontWeight: "800" }}>App Name: {props.data.appName}</h2>
          <p style={{ fontSize: "20px" }}>
            App ID: {props.data.appId}
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          className="text-secondary"
          style={{
            display: "flex",
            marginLeft: "50px",
            marginRight: "50px",
            paddingLeft: "70px",
            paddingTop: "20px",
            borderRadius: "10px",
            boxShadow: "1px 1px 10px #dbdbdb",
          }}
        >
          <div style={{ width: "50%" }}>
            <p>Content Type</p>
            <p>Advertise Type</p>
            <p>Content Value</p>
            <p>Social Type</p>
            <p>Price Code</p>
          </div>
          <div>
            <p>: {props.data.contentT}</p>
            <p>: {props.data.adT}</p>
            <p>: {props.data.contentV}</p>
            <p>: {props.data.socialT}</p>
            <p>: {props.data.price}</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-outline-info" onClick={props.onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default TableView;

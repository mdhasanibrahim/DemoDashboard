import React from "react";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

function ItemView(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ backgroundColor: "#6B649C" ,color:"white"}}>
        <Modal.Title style={{ width: "100%"}}>
          <h3>
            <span style={{ fontWeight: "800" }}>Item Name: </span>
            <span>{props.data.itemName}</span>
          </h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={props.data.itemUrl} thumbnail />
      </Modal.Body>
    </Modal>
  );
}

export default ItemView;

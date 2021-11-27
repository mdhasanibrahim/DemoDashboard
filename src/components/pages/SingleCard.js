import React from 'react';
import "../css/SingleCard.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function SingleCard(props) {

  let text1 ="/category/";

    return (
      <div className="view-point">
        <img className="cardImage"/>
        <Card style={{ borderRadius: "20px" }} className="text-white" id="auto-card">
          <Card.Img

            style={{ borderRadius: "20px",width: "auto",height:"170px" }}
            src={props.categoryImage}
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Title className="title">{props.categoryName}</Card.Title>
            <Link to={text1.concat(props.id)} className="stretched-link" />
          </Card.ImgOverlay>
        </Card>
      </div>
    );
}

export default SingleCard

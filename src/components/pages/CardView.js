import React, { useState, useEffect } from "react";
import "../css/CardView.css";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import axios from "axios";
import PackageNameEdit from "../modals/PackageNameEdit";
import CategoryNameEdit from "../modals/CategoryNameEdit";
import SubCategoryNameEdit from "../modals/SubCetagoryNameEdit";
import ColorEdit from "../modals/ColorEdit";
import AppEdit from "../modals/AppEdit";
import AppSelect from "../modals/AppSelect";

function CardView() {
  let bucketLink = "https://photozenspaceone.sgp1.digitaloceanspaces.com/";
  let packageLink = "http://139.59.0.197/api/getPackagesById/";
  const params = useParams();

  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [modalShow4, setModalShow4] = useState(false);
  const [modalShow5, setModalShow5] = useState(false);
  const [modalShow6, setModalShow6] = useState(false);

  const [packageList, setPackageList] = useState([]);
  const [tagsList, setTagsList] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [contentTypeList, setContentTypeList] = useState([]);

  const [editList, seteditList] = useState([]);

  const getPackage = async () => {
    let response = await axios.get(packageLink.concat(params.cardId));
    let editResponse = await axios.get(
      "http://139.59.0.197/api/addContentRequiredData"
    );
    setPackageList(response.data.data);
    setTagsList(response.data.data.tags);
    setCountryList(response.data.data.countries);
    setContentTypeList(response.data.data.content_types);

    seteditList(editResponse.data.data);
  };

  useEffect(() => {
    getPackage();
  }, []);

  return (
    <div className="container" id="container-id">
      <div className="row gy-3 m-3">
        <div className="col-sm-12 col-md-12 col-lg-7" id="left-column">
          <div className=" text-success">
            {/* <h1>This is Title for Card {packageList.id}.</h1> */}
          </div>
          <div className="mt-5">
            <Card
              style={{ borderRadius: "5px", width: "330px", height: "350px" }}
              className="col-7 text-white"
            >
              <Card.Img
                style={{
                  borderRadius: "5px",
                  width: "100%",
                  height: "100%",
                }}
                src={bucketLink.concat(packageList.large_thumbnail)}
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title>
                  <button className="card-edit-btn"></button>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </div>
          <div className="inside-cards col-8">
            <div className="inside-name">
              <p>Package Name</p>
              <p>Category Name</p>
              <p>Sub-Category Name</p>
              <p>Color</p>
            </div>
            <div>
              <p>: {packageList.packageName}</p>
              <p>
                : {packageList.category && packageList.category.categoryName}
              </p>
              <p>
                :{" "}
                {packageList.sub_categories &&
                  packageList.sub_categories.subCatName}
              </p>
              <p>: {packageList.colors && packageList.colors.colorName}</p>
            </div>
            <div className="btn-div-2">
              <p>
                <button
                  className="edit-btn-2"
                  onClick={() => setModalShow(true)}
                ></button>
              </p>
              <p>
                <button
                  className="edit-btn-2"
                  onClick={() => setModalShow2(true)}
                ></button>
              </p>
              <p>
                <button
                  className="edit-btn-2"
                  onClick={() => setModalShow3(true)}
                ></button>
              </p>
              <p>
                <button
                  className="edit-btn-2"
                  onClick={() => setModalShow4(true)}
                ></button>
              </p>
            </div>
          </div>
          <div className="tags-outer-div">
            <div className="inside-cards-2 col-8">
              <h3>Tags</h3>
              <div className="tags-div">
                {tagsList.map((tags) => (
                  <div>
                    <Badge bg="info">{tags.text}</Badge>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <button className="add-btn"></button>
              <button className="remove-btn"></button>
            </div>
          </div>
          <div className="tags-outer-div">
            <div className="inside-cards-2 col-8">
              <h3>Country</h3>
              <div className="tags-div">
                {countryList.map((country) => (
                  <div>{country.countryName}</div>
                ))}
              </div>
            </div>
            <div>
              <button className="add-btn"></button>
              <button className="remove-btn"></button>
            </div>
          </div>
          <div className="add-app-div">
            <button className="add-app-btn" onClick={() => setModalShow5(true)}>
              Add App
            </button>
          </div>
          <div className="package-card-outer col-10">
            {contentTypeList.map((contentType) => (
              <div className="package-card col-12">
                <div className="app-title-div">
                  <div className="col-8">
                    <h3>
                      App{" "}
                      {contentType.application &&
                        contentType.application.appName}
                    </h3>
                  </div>
                  <div className="col-2">
                    <button
                      className="app-edit-btn"
                      onClick={() => setModalShow6(true)}
                    ></button>
                  </div>
                  <div className="col-2">
                    <button className="app-delete-btn"></button>
                  </div>
                </div>
                <div className="app-div">
                  <div className="app-title">
                    <p>Content Type</p>
                    <p>Add type</p>
                    <p>Content Value</p>
                    <p>Social Type</p>
                    <p>Price Code</p>
                  </div>
                  <div className="app-content">
                    <p>: {contentType.contentType}</p>
                    <p>: {contentType.addType}</p>
                    <p>: {contentType.contentValue}</p>
                    <p>: {contentType.socialType}</p>
                    <p>: {contentType.priceCode}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-2" id="right-column">
          <div className="row gy-3 my-4 mt-5 pb-3 pl-3">
            {packageList.items &&
              packageList.items.map((packageItem) => (
                <div className="outer-div">
                  <div className="col-6 col-sm-6 col-md-12 col-lg-12">
                    {packageItem.itemUrl == "" ? (
                      <taxtarea readonly="false" className="form-control">
                        {packageItem.itemConfig}
                      </taxtarea>
                    ) : (
                      <Card
                        style={{ borderRadius: "5px" }}
                        className="col-12 text-dark"
                      >
                        <Card.Img
                          style={{ borderRadius: "5px" }}
                          src={bucketLink.concat(packageItem.itemUrl)}
                          alt="Card image"
                        />
                        <Card.ImgOverlay />
                      </Card>
                    )}

                    <h4 className=" item-text ">{packageItem.itemName}</h4>
                  </div>
                  <div>
                    <button className="edit-btn"></button>
                    <button className="delete-btn"></button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <PackageNameEdit show={modalShow} onHide={() => setModalShow(false)} />
      <CategoryNameEdit
        data={editList}
        show={modalShow2}
        onHide={() => setModalShow2(false)}
      />
      <SubCategoryNameEdit
        data={editList}
        show={modalShow3}
        onHide={() => setModalShow3(false)}
      />
      <ColorEdit
        data={editList}
        show={modalShow4}
        onHide={() => setModalShow4(false)}
      />
      <AppSelect
        data={editList}
        show={modalShow5}
        onHide={() => setModalShow5(false)}
      />
      <AppEdit
        data={editList}
        show={modalShow6}
        onHide={() => setModalShow6(false)}
      />
    </div>
  );
}

export default CardView;

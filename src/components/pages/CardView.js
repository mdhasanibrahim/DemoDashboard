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
import TableView from "../modals/TableView";
import ItemView from "../modals/ItemView";
import ScriptEdit from "../modals/ScriptEdit";
import { Table } from "@material-ui/core";

function CardView() {
  let bucketLink = "https://photozenspaceone.sgp1.digitaloceanspaces.com/";
  let packageLink = "http://139.59.0.197/api/getPackagesById/";
  const params = useParams();

  const [value, setValue] = useState({
    appId: "",
    appName: "",
    contentT: "",
    adT: "",
    contentV: "",
    socialT: "",
    price: "",
  });

  const handleButton = (data) => {
    setValue({
      appId: data.appId,
      appName: data.appName,
      contentT: data.contentT,
      adT: data.adT,
      contentV: data.contentV,
      socialT: data.socialT,
      price: data.price,
    });
    setModalShowTableView(true);
  };

  const [itemValue, setItemValue] = useState({
    itemUrl: "",
    itemName: "",
  });

  const handleButton2 = (data) => {
    setItemValue({
      itemUrl: data.itemUrl,
      itemName: data.itemName,
    });
    setModalShowItemView(true);
  };

 const [scriptValue, setScriptValue] = useState({
   itemConfig: "",
 });

 const handleButton3 = (data) => {
   setScriptValue({
     itemConfig: data.itemConfig,
   });
   setModalShowScriptView(true);
 };

  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [modalShow4, setModalShow4] = useState(false);
  const [modalShow5, setModalShow5] = useState(false);
  const [modalShow6, setModalShow6] = useState(false);
  const [modalShowTableView, setModalShowTableView] = useState(false);
  const [modalShowItemView, setModalShowItemView] = useState(false);
  const [modalShowScriptView, setModalShowScriptView] = useState(false);

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
      <div className="m-4 mt-5 outer-div">
        <div className="left-div">
          <div className="title-div">
            <h1>
              Name: <tab />
              {packageList.packageName}
            </h1>
          </div>
          <div>
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
        </div>
        <div className="right-div">
          <div className="col-3 m-auto">
            <Card className="stat-card">
              <Card.Title className="stat-card-title">Download</Card.Title>
              <Card.Body>2500</Card.Body>
            </Card>
            <Card className="stat-card">
              <Card.Title className="stat-card-title">Rating</Card.Title>
              <Card.Body>3.5</Card.Body>
            </Card>
          </div>
          <div className="col-3 m-auto">
            <Card className="stat-card">
              <Card.Title className="stat-card-title">Total VIEW</Card.Title>
              <Card.Body>2500</Card.Body>
            </Card>
            <Card className="stat-card">
              <Card.Title className="stat-card-title">Featured</Card.Title>
              <Card.Body>YES</Card.Body>
            </Card>
          </div>
          <div className="col-3 m-auto">
            <Card className="stat-card">
              <Card.Title className="stat-card-title">SIZE</Card.Title>
              <Card.Body>2500</Card.Body>
            </Card>
            <Card className="stat-card">
              <Card.Title className="stat-card-title">Active</Card.Title>
              <Card.Body>YES</Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", marginTop: "100px" }}>
        <div className="package-info" style={{ width: "45%" }}>
          <Card style={{ borderRadius: "10px", height: "300px" }}>
            <Card.Title
              style={{
                textAlign: "center",
                backgroundColor: "rgb(215, 215, 216)",
                padding: "15px",
                fontSize: "25px",
                fontWeight: "600",
                borderRadius: "10px",
                backgroundColor: "#6B649C",
                color: "white",
              }}
            >
              Package Info
            </Card.Title>
            <Card.Body>
              <Table>
                <tr>
                  <td style={{ width: "50%" }}>Package Name</td>
                  <td>: {packageList.packageName}</td>
                  <td>
                    <button
                      className="edit-btn-2"
                      onClick={() => setModalShow(true)}
                    ></button>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>Category Name</td>
                  <td>
                    :{" "}
                    {packageList.category && packageList.category.categoryName}
                  </td>
                  <td>
                    <button
                      className="edit-btn-2"
                      onClick={() => setModalShow2(true)}
                    ></button>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>Sub-Category Name</td>
                  <td>
                    :{" "}
                    {packageList.sub_categories &&
                      packageList.sub_categories.subCatName}
                  </td>
                  <td>
                    <button
                      className="edit-btn-2"
                      onClick={() => setModalShow3(true)}
                    ></button>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>Color</td>
                  <td>
                    : {packageList.colors && packageList.colors.colorName}
                  </td>
                  <td>
                    <button
                      className="edit-btn-2"
                      onClick={() => setModalShow4(true)}
                    ></button>
                  </td>
                </tr>
              </Table>
            </Card.Body>
          </Card>
        </div>
        <div
          className="package-info"
          style={{ width: "45%", marginLeft: "10%" }}
        >
          <Card style={{ borderRadius: "10px", height: "300px" }}>
            <Card.Title
              style={{
                textAlign: "center",
                backgroundColor: "rgb(215, 215, 216)",
                padding: "15px",
                fontSize: "25px",
                fontWeight: "600",
                borderRadius: "10px",
                backgroundColor: "#6B649C",
                color: "white",
              }}
            >
              Country List
            </Card.Title>
            <Card.Body style={{ paddingLeft: "3%", paddingRight: "3%" }}>
              {countryList.map((country) => (
                <Badge
                  bg="info"
                  style={{
                    fontSize: "15px",
                    marginRight: "10px",
                    marginBottom: "10px",
                    marginLeft: "10px",
                  }}
                >
                  {country.countryName}
                </Badge>
              ))}
            </Card.Body>
          </Card>
        </div>
      </div>
      <Card
        className="app-list-card"
        style={{
          marginTop: "100px",
          marginBottom: "100px",
          alignItems: "center",
          textAlign: "center",
          borderRadius: "10px",
        }}
      >
        <Card.Title className="stat-card-title">
          <h2>
            TAG List
            <span>
              <button className="tag-edit-btn"></button>
            </span>
          </h2>
        </Card.Title>
        <Card.Body>
          {tagsList.map((tags) => (
            <Badge
              bg="primary"
              style={{
                fontSize: "15px",
                marginRight: "10px",
                marginLeft: "10px",
              }}
            >
              {tags.text}
            </Badge>
          ))}
        </Card.Body>
      </Card>
      <Card
        className="app-list-card"
        style={{ borderRadius: "10px", marginBottom: "100px" }}
      >
        <Card.Title className="stat-card-title">
          <h2>
            App List
            <span>
              <button
                className="add-app-btn"
                onClick={() => setModalShow5(true)}
              ></button>
            </span>
          </h2>
        </Card.Title>
        <Card.Body>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">App Name</th>
                <th scope="col">Content Type</th>
                <th scope="col">Ads Type</th>
                <th scope="col">Content Value</th>
                <th scope="col">Social Type</th>
                <th scope="col">Price</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contentTypeList.map((contentType) => (
                <tr>
                  <td scope="row" style={{ paddingTop: "20px" }}>
                    {contentType.application && contentType.application.appId}
                  </td>
                  <td style={{ paddingTop: "20px" }}>
                    {contentType.application && contentType.application.appName}
                  </td>
                  <td style={{ paddingTop: "20px" }}>
                    {contentType.contentType == ""
                      ? "NULL"
                      : contentType.contentType}
                  </td>
                  <td style={{ paddingTop: "20px" }}>
                    {contentType.addType == "" ? "NULL" : contentType.addType}
                  </td>
                  <td style={{ paddingTop: "20px" }}>
                    {contentType.contentValue == ""
                      ? "NULL"
                      : contentType.contentValue}
                  </td>
                  <td style={{ paddingTop: "20px" }}>
                    {contentType.socialType == ""
                      ? "NULL"
                      : contentType.socialType}
                  </td>
                  <td style={{ paddingTop: "20px" }}>
                    {contentType.priceCode == ""
                      ? "NULL"
                      : contentType.priceCode}
                  </td>
                  <td>
                    <button
                      className="table-view-btn"
                      onClick={() =>
                        handleButton({
                          appId:
                            contentType.application &&
                            contentType.application.appId,
                          appName:
                            contentType.application &&
                            contentType.application.appName,
                          contentT:
                            contentType.contentType == ""
                              ? "NULL"
                              : contentType.contentType,
                          adT:
                            contentType.addType == ""
                              ? "NULL"
                              : contentType.addType,
                          contentV:
                            contentType.contentValue == ""
                              ? "NULL"
                              : contentType.contentValue,
                          socialT:
                            contentType.socialType == ""
                              ? "NULL"
                              : contentType.socialType,
                          price:
                            contentType.priceCode == ""
                              ? "NULL"
                              : contentType.priceCode,
                        })
                      }
                    ></button>
                    <button
                      className="table-edit-btn"
                      onClick={() => setModalShow6(true)}
                    ></button>
                    <button className="table-delete-btn"></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card.Body>
      </Card>
      <Card
        className="app-list-card"
        style={{ borderRadius: "10px", marginBottom: "100px" }}
      >
        <Card.Title className="stat-card-title">
          {(packageList.items &&
            packageList.items[0] &&
            packageList.items[0].itemConfig) == "" ? (
            <h2>
              Item List
              <span>
                <button className="add-app-btn"></button>
              </span>
            </h2>
          ) : (
            <h2>
              Script
              <span>
                <button
                  className="script-edit-btn"
                  onClick={() =>
                    handleButton3({
                      itemConfig:(packageList.items &&
                        packageList.items[0] &&
                        packageList.items[0].itemConfig)
                        ,
                    })
                  }
                ></button>
              </span>
            </h2>
          )}
        </Card.Title>
        <Card.Body>
          <div style={{ display: "flex" }}>
            {packageList.items &&
              packageList.items.map((packageItem) => (
                <div style={{ margin: "20px", display: "flex" }}>
                  <div>
                    {packageItem.itemUrl == "" ? (
                      <taxtarea
                        readonly="false"
                        className="form-control"
                        style={{ padding: "20px" }}
                      >
                        {packageItem.itemConfig}
                      </taxtarea>
                    ) : (
                      <Card
                        style={{
                          borderRadius: "5px",
                          height: "200px",
                          width: "200px",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          handleButton2({
                            itemUrl: bucketLink.concat(packageItem.itemUrl),
                            itemName: packageItem.itemName,
                          })
                        }
                      >
                        <Card.Img
                          style={{ borderRadius: "5px" }}
                          src={bucketLink.concat(packageItem.itemUrl)}
                          alt="Card image"
                        />
                        <Card.ImgOverlay>
                          <Card.Title>
                            <button className="item-delete-btn"></button>
                          </Card.Title>
                        </Card.ImgOverlay>
                      </Card>
                    )}
                    <h4 className=" item-text ">{packageItem.itemName}</h4>
                  </div>
                </div>
              ))}
          </div>
        </Card.Body>
      </Card>

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
      <TableView
        data={value}
        show={modalShowTableView}
        onHide={() => setModalShowTableView(false)}
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
      <ItemView
        data={itemValue}
        show={modalShowItemView}
        onHide={() => setModalShowItemView(false)}
      />
      <ScriptEdit
        data={scriptValue}
        show={modalShowScriptView}
        onHide={() => setModalShowScriptView(false)}
      />
    </div>
  );
}

export default CardView;

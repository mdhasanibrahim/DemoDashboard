import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Table() {
  let bucketLink = "https://photozenspaceone.sgp1.digitaloceanspaces.com/";
  let getPackagebyCategory = "http://139.59.0.197/api/getPackageByCategroy/";
  let cardLink = "/package/";
  const params = useParams();

  const navigate = useNavigate();

  const columns = [
    {
      title: "Package ID",
      field: "id",
    },
    {
      title: "Package Name",
      field: "packageName",
    },
    {
      title: "Thumbnail",
      field: "medium_thumbnail",
      render: (rowData) => (
        <img
          style={{ height: "80px", width: "80px" }}
          src={bucketLink.concat(rowData.medium_thumbnail)}
        />
      ),
    },
    {
      title: "Items",
      field: "items",
      render: (rowData) => (
        <div style={{ display: "flex" }}>
          {rowData.items &&
            rowData.items.map((item) => (
              <div>
                <img
                  style={{ height: "80px", width: "80px", marginRight: "10px" }}
                  src={bucketLink.concat(item.itemUrl)}
                />
              </div>
            ))}
        </div>
      ),
    },
    {
      title: "Details",
      field: "",
      render: (rowData) => (
        <div>
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={() => navigate(cardLink.concat(rowData.id))}
          >
            View
          </button>
        </div>
      ),
    },
  ];
  const [categoryList, setCategoryList] = useState([]);

  const getCategory = async () => {
    let response = await axios.get(getPackagebyCategory.concat(params.cardId));
    setCategoryList(response.data.data);
    console.log(categoryList);
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="container mt-5">
      <MaterialTable
        title="Package List"
        data={categoryList}
        columns={columns}
        options={{
          search: true,
          paging: true,
          filtering: false,
          exportButton: true,
        }}
      />
    </div>
  );
}

export default Table;

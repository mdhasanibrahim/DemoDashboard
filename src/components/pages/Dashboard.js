import React, { useState, useEffect } from "react";
import "../css/Dashboard.css";
import SingleCard from "./SingleCard";
import axios from "axios";


function Dashboard() {

  let bucketLink = "https://photozenspaceone.sgp1.digitaloceanspaces.com/";

  const [categoyList, setCategoryList] = useState([]);

  const getCatagory = async () => {
    let response = await axios.get(`http://139.59.0.197/api/getCategories`);
    setCategoryList(response.data.data);
  };
  useEffect(() => {
    getCatagory();
  }, []);

  return (
    <div className="container">
      <div className="row gy-3 my-3">
        {categoyList.map((cardProp) => (
          <div className="col-sm-6 col-md-4 col-lg-3">
            <SingleCard
              id={cardProp.id}
              categoryName={cardProp.categoryName}
              categoryImage={bucketLink.concat(cardProp.categoryImage)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

import React from "react";
import "./VendorDetail.css";
import Button from "../Button/Button";
import TableCard from "../TableCard/TableCard";

const VendorDetail = () => {
  return (
    <>
      <div className="vendor-detail-main--container">
        <div className="vendor-img-main--container">
          <div className="vendor-img--container">
            <img
              src="https://pnggrid.com/wp-content/uploads/2021/05/Zoom-Logo-Square-Blue-1024x1024.png"
              alt="vendor-profile"
            />
          </div>
        </div>
        <div className="vendor-text--container">
          <h1>Zoom</h1>
          <div className="vendor-detail-container">
            <p>
              <span>Vendor ID :</span> sf0001
            </p>
            <p>
              <span>Created Date :</span> 2022-06-24, 08:39:40
            </p>
            <p>
              <span>Updated Date :</span> 2022-06-24, 08:39:40
            </p>
            <p>
              <span>URL :</span> www.zoom.us
            </p>
            <p>
              <span>Support :</span> support@zoom.us
            </p>
            <p>
              <span>Category :</span> Communication
            </p>
            <p>
              <span>Sub-category :</span> UCaaS
            </p>
          </div>
        </div>
      </div>
      <div className="market-title button-con">
        <div style={{ display: "flex" }}>
          <div className="button-container">
            <Button title="import Bills" />
          </div>
        </div>
        <div className="search-bar">
          <div className="searchbar-input">Search Query</div>
          <button className="searchbar-button">Search</button>
        </div>
      </div>

      <div className="table">
        <TableCard title="Subscription ID" />
        <TableCard title="Latest Bill" />
        <TableCard title="Subcription Name" />
        <TableCard title="Subcription Type" />
        <TableCard title="Payment Method" />
        <TableCard title="Owner" />
        <TableCard title="Dept" />
        <TableCard title="Status" />
        <TableCard title="Next Renewal Date" />
        <TableCard title="Budget Dept" />
      </div>
    </>
  );
};

export default VendorDetail;

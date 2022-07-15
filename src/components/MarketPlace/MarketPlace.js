import React from "react";
import "./MarketPlace.css";
import Button from "../Button/Button";
import { vendors } from "./VendorData";

const MarketPlace = ({ setActive, active }) => {
  return (
    <div>
      <div className="market-title">Vendors</div>
      <div className="market-title button-con">
        <div style={{ display: "flex" }}>
          <div className="button-container">
            <Button title="import vendors" />
          </div>
          <div className="button-container">
            <Button title="actions" />
          </div>
          <div className="button-container">
            <Button title="category" />
          </div>
        </div>
        <div className="search-bar">
          <div className="searchbar-input">Search Query</div>
          <button className="searchbar-button">Search</button>
        </div>
      </div>
      <div className="vendors--con">
        {vendors?.map((ele, ind) => {
          return (
            <img
              key={ind}
              className="vendor-card"
              src={ele.img}
              alt="vendor"
              onClick={() => setActive(`${ind === 0 ? "zoom" : ""}`)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MarketPlace;

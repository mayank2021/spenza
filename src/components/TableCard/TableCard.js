import React from "react";
import "./TableCard.css";

const TableCard = ({ title }) => {
  return (
    <div className="table-card--container">
      <p>{title}</p>
      <ul>
        <li>Entry one</li>
        <hr />
        <li>Entry two</li>
      </ul>
    </div>
  );
};

export default TableCard;

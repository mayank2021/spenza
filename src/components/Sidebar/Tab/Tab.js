import React from "react";
import "./Tab.css";
const Tab = ({ Icon, title, value, setActive, active }) => {
  return (
    <div
      className={`tab--container ${active ? "active-tab" : ""}`}
      onClick={() => setActive(value)}
    >
      <img src={Icon} alt={title} />
      <p
        // style={{ color: "#6D5A8E" }}
        className={`text-heading ${active ? "active--text" : ""}`}
      >
        {title}
      </p>
    </div>
  );
};

export default Tab;

import React from "react";
import "./Navbar.css";
import Profile from "../../Assests/profile-icon.svg";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <div className="nav-main--container">
      <div className="profile-container">
        <img src={Profile} alt="profile" />
        <div className="text-container">
          <h3>topSquare</h3>
          <p>topSquare@isimplexity.com</p>
        </div>
      </div>
      <Button title="logout" />
    </div>
  );
};

export default Navbar;

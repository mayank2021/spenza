import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../Assests/logo.png";
import Tab from "./Tab/Tab";
import DashIcon from "../../Assests/dash-icon.svg";
import ReportIcon from "../../Assests/report-icon.svg";
import ExpenseIcon from "../../Assests/expense-icon.png";
import SpenzaIcon from "../../Assests/spenza-icon.png";
import ManageIcon from "../../Assests/management-icon.svg";
import ServiceIcn from "../../Assests/service-icon.png";
import EnterpriseIcon from "../../Assests/expense-icon.png";
import SettingIcon from "../../Assests/setting-icon.svg";

const Sidebar = ({ setActive, active }) => {
  return (
    <div className="sidebar-main--container">
      <img src={Logo} alt="spenza" />
      <p
        style={{
          color: "#7F768A",
          fontWeight: 600,
          fontSize: 14,
          margin: "10px 0 10px 20px",
        }}
      >
        Main Navigation
      </p>

      <Tab
        Icon={DashIcon}
        title="dashboard"
        value="0"
        setActive={setActive}
        active={active === "0" ? true : false}
      />

      <Tab
        Icon={ReportIcon}
        title="reports"
        value="1"
        setActive={setActive}
        active={active === "1" ? true : false}
      />
      <Tab
        Icon={ExpenseIcon}
        title="Expense Mobility"
        value="2"
        setActive={setActive}
        active={active === "2" ? true : false}
      />
      <Tab
        Icon={SpenzaIcon}
        title="Spenza Marketplace"
        value="3"
        setActive={setActive}
        active={active === "3" ? true : false}
      />
      <Tab
        Icon={ManageIcon}
        title="Expense Management"
        value="4"
        setActive={setActive}
        active={active === "4" ? true : false}
      />
      <Tab
        Icon={ServiceIcn}
        title="Service Management"
        value="5"
        setActive={setActive}
        active={active === "5" ? true : false}
      />
      <Tab
        Icon={EnterpriseIcon}
        title="Enterprise Integrations"
        value="6"
        setActive={setActive}
        active={active === "6" ? true : false}
      />
      <Tab
        Icon={SettingIcon}
        title="Settings"
        value="7"
        setActive={setActive}
        active={active === "7" ? true : false}
      />
    </div>
  );
};

export default Sidebar;

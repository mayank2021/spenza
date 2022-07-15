import React from "react";
import "./MainCompo.css";
import Invoice from "../../Assests/invoice1.svg";
import App from "../../Assests/app1.svg";
import Budget from "../../Assests/budget1.svg";
import MonthInvoice from "../../Assests/month1.svg";
import Spt from "../../Assests/spt1.svg";
import BarChart from "../../Assests/bar-chart.svg";

const MainCompo = () => {
  return (
    <div>
      <div className="section-top">
        <img src={Invoice} alt="Invoice" />
        <img src={App} alt="App" />
        <img src={Budget} alt="Budget" />
        <img src={MonthInvoice} alt="MonthInvoice" />
      </div>
      <div className="spend-trend">
        <img src={Spt} alt="SpendTrend" />
      </div>
      <div className="bar-chart">
        <img src={BarChart} alt="BarChart" />
      </div>
    </div>
  );
};

export default MainCompo;

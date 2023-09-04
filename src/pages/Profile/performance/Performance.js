import React from "react";
import {
  PerformanceContainer,
  PerformanceDetailsBox,
} from "./performance.styled";

export default function Performance() {
  const performanceDetails = [
    {
      id: 1,
      title: "Impressions",
      months: [
        "August 2023",
        "September 2023",
        "October 2023",
        "November 2023",
        "December 2023",
      ],
      numOfView: 5000,
      percentage: "+50%",
    },
    {
      id: 2,
      title: "Visitors",
      months: [
        "August 2023",
        "September 2023",
        "October 2023",
        "November 2023",
        "December 2023",
      ],
      numOfView: 5000,
      percentage: "+50%",
    },
    {
      id: 3,
      title: "Phone View",
      months: [
        "August 2023",
        "September 2023",
        "October 2023",
        "November 2023",
        "December 2023",
      ],
      numOfView: 5000,
      percentage: "+50%",
    },
    {
      id: 4,
      title: "Chat Requests",
      months: [
        "August 2023",
        "September 2023",
        "October 2023",
        "November 2023",
        "December 2023",
      ],
      numOfView: 5000,
      percentage: "+50%",
    },
  ];
  return (
    <PerformanceContainer>
      <h3 className="performanceMainHeading">Performance</h3>
      <div className="filterGroup">
        <select name="Select Duration" id="durationSelect">
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
        <input className="dateInput" type="date" />
      </div>

      <div className="performanceOverviewHeading">
        <h4 className="title">Overview</h4>
      </div>

      <div className="performanceDetailsContainer">
        {performanceDetails.map((perfDetail) => (
          <PerformanceDetailsBox key={perfDetail.id}>
            <div className="headingContainer">
              <h4 className="titleText">{perfDetail.title}</h4>
              <select name="Select Duration" id="monthSelect">
                {perfDetail.months.map((month, i) => (
                  <option value={month}>{month}</option>
                ))}
              </select>
            </div>

            <div className="analyticsContainer">
              <h4 className="viewsText">{perfDetail.numOfView}</h4>
              <p className="percentageText">{perfDetail.percentage}</p>
            </div>
          </PerformanceDetailsBox>
        ))}
      </div>
    </PerformanceContainer>
  );
}

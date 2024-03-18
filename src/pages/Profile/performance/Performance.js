import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  CustomDateInput,
  PerformanceContainer,
  PerformanceDetailsBox,
} from "./performance.styled";

export default function Performance() {
  const [selectedDate, setSelectedDate] = useState("");
  const { userProfile } = useSelector((state) => state.user);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };
  const performanceDetails = [
    {
      id: 1,
      title: "Impressions",
      months: [
        "Select month",
        
      ],
      numOfView: 0,
      percentage: "0%",
    },
    {
      id: 2,
      title: "Visitors",
      months: [
        "Select month",
       
      ],
      numOfView: 0,
      percentage: "0%",
    },
    {
      id: 3,
      title: "Phone View",
      months: [
        "Select month",
        
      ],
      numOfView: 0,
      percentage: "0%",
    },
    {
      id: 4,
      title: "Chat Requests",
      months: [
        "Select month",
        
      ],
      numOfView: 0,
      percentage: "0%",
    },
  ];
  return (
    <PerformanceContainer>
      <h3 className="performanceMainHeading">Performance</h3>
      <div className="contentContainer">
        <div className="userProfile">
          <div className="imageWrapper">
            <img
              src={
                userProfile?.profile_image_url
                  ? userProfile?.profile_image_url
                  : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
              }
              alt="profile photo"
            />
          </div>
          <h3>{`${userProfile?.first_name} ${userProfile?.last_name}`}</h3>
        </div>
        <div className="filterGroup">
          <select name="Select Duration" id="durationSelect">
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
          <CustomDateInput
            value={selectedDate}
            placeholder=""
            className="dateInput"
            type="date"
            onChange={handleDateChange}
          />
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
                    <option key={month} value={month}>
                      {month}
                    </option>
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
      </div>
    </PerformanceContainer>
  );
}

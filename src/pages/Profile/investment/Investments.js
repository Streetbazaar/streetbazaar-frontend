import { InlineIcon } from "@iconify/react";
import React from "react";
import { AdvertSelect, ButtonFilter } from "../advert/advert.styled";
import { InvestmentContainer } from "./investment.styled";
import InvestmentItem from "./InvestmentItem";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Investments() {
  const { userProfile } = useSelector((state) => state.user);
  const [activeIndex, setActiveIndex] = useState(0); // Defaulting to the first button

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };
  const buttonData = [
    { icon: "octicon:clock-24", label: "Active Investments" },
    { icon: "prime:check-circle", label: "Completed Investments" },
  ];
  return (
    <InvestmentContainer>
    
      <h3 className="advertMainHeading">My Investments</h3>
      <div className="deskFilters">
        <div className="searchBar">
          <div className="searchIcon">
            <InlineIcon icon="ion:search-outline" />
          </div>
          <input type="text" placeholder="Search for product" />
        </div>

        <div className="selectBar">
          <p>Sort by:</p>
          <AdvertSelect>
            <option value="Recommended">Latest</option>
            <option value="Popularity">Oldest</option>
          </AdvertSelect>
        </div>
      </div>

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

        <div className="buttonFilterList">
          {buttonData.map((button, index) => (
            <ButtonFilter
              key={index}
              isActive={index === activeIndex}
              onClick={() => handleButtonClick(index)}
            >
              <InlineIcon icon={button.icon} />
              {button.label}
            </ButtonFilter>
          ))}
        </div>

        <div className="mobileFilters">
          <div className="searchBar">
            <div className="searchIcon">
              <InlineIcon icon="ion:search-outline" />
            </div>
            <input type="text" placeholder="Search for product" />
          </div>

          <div className="selectBar">
            <AdvertSelect>
              <option value="Recommended">Latest</option>
              <option value="Popularity">Oldest</option>
            </AdvertSelect>
          </div>
        </div>

        <div className="advertsList">
          {Array(5)
            .fill()
            .map((_, index) => {
              return <InvestmentItem key={index} />;
            })}
        </div>
      </div>
    </InvestmentContainer>
  );
}

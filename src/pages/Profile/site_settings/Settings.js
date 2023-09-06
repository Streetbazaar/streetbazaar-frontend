import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SettingButton, SettingsContainer } from "./sitesettings.styled";
import PersonalDetails from "./PersonalDetails";
import BusinessInfo from "./BusinessInfo";
import Security from "./Security";

export default function Settings() {
  const { userProfile } = useSelector((state) => state.user);
  const [activeIndex, setActiveIndex] = useState(0); // Defaulting to the first button

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  const settingsList = ["Personal Details", "Business Information", "Security"];
  return (
    <SettingsContainer>
      <h3 className="settingsMainHeading">Saved Ads</h3>
      <div className="contentContainer">
        <div className="userProfile">
          <div className="imageWrapper">
            <img
              src={
                userProfile?.profile_image_url
                  ? userProfile?.profile_image_url
                  : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
              }
              alt="profile"
            />
          </div>
          <h3>{`${userProfile?.first_name} ${userProfile?.last_name}`}</h3>
        </div>
        <p className="settingDescription">
          You can make changes to your information here.
        </p>

        <div className="settingsListContainer">
          {settingsList.map((setting, index) => (
            <SettingButton
              key={index}
              isActive={index === activeIndex}
              onClick={() => handleButtonClick(index)}
            >
              {setting}
            </SettingButton>
          ))}
        </div>

        {activeIndex === 0 && (
          <PersonalDetails />
        )}
        {activeIndex === 1 && (
          <BusinessInfo />
        )}
        {activeIndex === 2 && (
          <Security />
        )}
      </div>
    </SettingsContainer>
  );
}

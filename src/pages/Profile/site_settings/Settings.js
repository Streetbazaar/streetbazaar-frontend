import React, { useState } from "react";
import { SettingsContainer } from "./sitesettings.styled";
import { useSelector } from "react-redux";

export default function Settings() {
  const { userProfile } = useSelector((state) => state.user);
  const [activeIndex, setActiveIndex] = useState(0); // Defaulting to the first button


  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };
  return <SettingsContainer>Settings</SettingsContainer>;
}

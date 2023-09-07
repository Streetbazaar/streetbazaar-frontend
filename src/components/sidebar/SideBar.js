import { InlineIcon } from "@iconify/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../features/userSlice";
import { SideBarContainer, SideBarListItem } from "./sidebar.styled";

export default function SideBar() {
  const dispatch = useDispatch();
  const { userProfile } = useSelector((state) => state.user);
  const [activeIndex, setActiveIndex] = useState(0); // Defaulting to the first item
  const navigate = useNavigate();

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const listItemData = [
    { icon: "ic:list", label: "My Adverts", href: "/profile/adverts" },
    { icon: "ic:list", label: "My Investments", href: "/profile/investments" },
    {
      icon: "ic:credit-card",
      label: "Account Balance",
      href: "/profile/account-balance",
    },
    { icon: "bi:activity", label: "Performance", href: "/profile/performance" },
    {
      icon: "lucide:message-circle",
      label: "Feedback",
      href: "/profile/feedback",
    },
    { icon: "lucide:save", label: "Saved", href: "/profile/saved" },
    { icon: "mi:settings", label: "Settings", href: "/profile/settings" },
  ];
  return (
    <SideBarContainer>
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
      <div className="listItems">
        {listItemData.map((item, index) => (
          <SideBarListItem
            key={index}
            isActive={index === activeIndex}
            onClick={() => {
              handleItemClick(index);
              navigate(item.href);
            }}
          >
            <InlineIcon icon={item.icon} />
            <p>{item.label}</p>
          </SideBarListItem>
        ))}
        <button onClick={() => dispatch(logoutUser())}>
          <InlineIcon icon="mdi:log-out" />
          <p>Log Out</p>
        </button>
      </div>
    </SideBarContainer>
  );
}

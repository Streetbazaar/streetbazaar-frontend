import React from "react";
import { SideBarContainer } from "./sidebar.styled";
import { Link } from "react-router-dom";
import { InlineIcon } from "@iconify/react";
import { logoutUser } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SideBar() {
  const dispatch = useDispatch();
  const { userProfile } = useSelector((state) => state.user);
  console.log(userProfile)
  return (
    <SideBarContainer>
      <div className="userProfile">
        <img
          src={
            userProfile?.profile_image_url
              ? userProfile?.profile_image_url
              : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          }
          alt="profile photo"
        />
        <h3>{`${userProfile?.first_name} ${userProfile?.last_name}`}</h3>
      </div>
      <div className="listItems">
       
        <a href="/profile/adverts">
          <InlineIcon icon="ic:list" />
          <p>My Adverts</p>
        </a>
        <a href="/profile/account-balance">
          <InlineIcon icon="ic:credit-card" />
          <p>Account Balance</p>
        </a>
        <a href="/profile/performance">
          <InlineIcon icon="bi:activity" />
          <p>Performance</p>
        </a>
        <a href="/profile/feedback">
          <InlineIcon icon="lucide:message-circle" />
          <p>Feedback</p>
        </a>
        <a href="/profile/saved">
          <InlineIcon icon="lucide:save" />
          <p>Saved</p>
        </a>
        <a href="/profile/settings">
          <InlineIcon icon="mi:settings" />
          <p>Settings</p>
        </a>
        <button onClick={() => dispatch(logoutUser())}>
          <InlineIcon icon="mdi:log-out" />
          <p>Log Out</p>
        </button>
      </div>
    </SideBarContainer>
  );
}

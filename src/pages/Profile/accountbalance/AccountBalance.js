import { InlineIcon } from "@iconify/react";
import React from "react";
import { useSelector } from "react-redux";
import { AccountBalanceContainer } from "./accountbalance.styled";

export default function AccountBalance() {
  const { userProfile } = useSelector((state) => state.user);
  return (
    <AccountBalanceContainer>
      <h3 className="accountBalanceHeading">My Account Balance</h3>
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
          <div className="accountActionsContainer">
            <div className="actionBox">
              <div className="iconContainer balance">
                <InlineIcon icon="icon-park:trending-up" />
              </div>
              <h4 className="actionTitle">Available Balance</h4>
              <h3 className="balanceField">₦ {userProfile?.wallet?.balance}</h3>
              <a href="">View transaction history</a>
            </div>
            <div className="actionBox">
              <div className="iconContainer topup">
                <InlineIcon icon="ph:plus-circle-bold" />
              </div>
              <h4 className="actionTitle">Top Up</h4>
              <button className="actionButton">Fund your account</button>
              <a href="">View transaction history</a>
            </div>
            <div className="actionBox">
              <div className="iconContainer withdraw">
                <InlineIcon icon="pajamas:external-link" />
              </div>
              <h4 className="actionTitle">Withdraw Money</h4>
              <button className="actionButton">Widthdraw Money</button>
              <a href="">View transaction history</a>
            </div>
          </div>
      </div>
    </AccountBalanceContainer>
  );
}

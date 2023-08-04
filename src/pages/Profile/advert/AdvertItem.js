import { InlineIcon } from "@iconify/react";
import React from "react";
import {  AdvertItemWrapper } from "./advert.styled";

export default function AdvertItem() {
  return (
    <AdvertItemWrapper>
      <img
        src="https://res.cloudinary.com/dyhcmaqzz/image/upload/v1691074620/Rectangle_43_dxxpay.png"
        alt="advert"
      />

      <div className="adCaptions">
        <h4>Title of the Ad</h4>
        <div className="statusIndicator">
          <p>Active</p>
        </div>
      </div>

      <div className="adStatistics">
        <div className="statContainer">
            <p>
            5 impressions
            </p>
           </div>
        <div className="statContainer">
            <p>2 visitors</p>
        </div>
      </div>

      <h3 className="adPrice">₦ 500,000</h3>

      <div className="adActions">
        <button>
          <InlineIcon icon="basil:edit-outline" />
          Edit Ad
        </button>
        <button>
          <InlineIcon icon="ph:x-bold" />
          Close Ad
        </button>
        <button>
          <InlineIcon icon="lucide:rotate-cw" />
          Renew
        </button>
      </div>
    </AdvertItemWrapper>
  );
}

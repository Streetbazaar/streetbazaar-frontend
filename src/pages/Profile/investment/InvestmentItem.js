import { InlineIcon } from "@iconify/react";
import React from "react";
import { InvestmentItemWrapper } from "./investment.styled";

export default function InvestmentItem() {
  return (
    <InvestmentItemWrapper>
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

      <div className="investmentPrices">
        <div className="priceContainer">
          <h4 className="priceCaption">Current price</h4>
          <h3 className="currentPrice">₦ 500,000</h3>
        </div>
        <div className="priceContainer">
          <h4 className="priceCaption">Gain</h4>
          <h3 className="gainPrice">₦ 750,000 {`(25%)`}</h3>
        </div>
      </div>

      <div className="adActions">
        <button>
          <InlineIcon icon="basil:edit-outline" />
          View details
        </button>
        <button>
          <InlineIcon icon="ph:x-bold" />
          Stop investment
        </button>
      </div>
    </InvestmentItemWrapper>
  );
}

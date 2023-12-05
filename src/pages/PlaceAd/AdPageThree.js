import { InlineIcon } from "@iconify/react";
import React, { useState } from "react";
import { addCommas } from "../../functions";
import {
  AdItem,
  AdItemCustomPriceButton,
  AdPricesContainer,
} from "./PlaceAd.styled";

const prices = [
  {
    id: 1,
    title: "Basic Plan",
    weekly_amount: "2000.00",
    monthly_amount: "10000.00",
    description: "Ads are pushed to the top",
    show: true,
  },
  {
    id: 2,
    title: "Standard Plan",
    weekly_amount: "4000.00",
    monthly_amount: "20000.00",
    description:
      "Ads are pushed to the top \r\nAds are advertised on our social media platforms",
    show: true,
  },
  {
    id: 3,
    title: "Premium Plan",
    weekly_amount: "75000.00",
    monthly_amount: "40000.00",
    description:
      "Ads are pushed to the top \r\nAds are pushed on our social media platforms \r\nAds are advertised on our blog section \r\nAds are pushed on google",
    show: true,
  },
];

export default function AdPageThree() {
  const [priceType, setPriceType] = useState({});

  const togglePriceType = (itemId, type) => {
    setPriceType((prevState) => ({
      ...prevState,
      [itemId]: type,
    }));
  };
  return (
    <AdPricesContainer>
      {prices.map((item, i) => {
        const isActive = item.title === "Standard Plan";
        const currentPriceType = priceType[item.id] || "weekly"; // Default to weekly if not set
        const price =
          currentPriceType === "weekly"
            ? item.weekly_amount
            : item.monthly_amount;
        const descriptionArray = item.description.split("\n");

        return (
          <AdItem isActive={isActive} key={item.id}>
            {isActive && <p className="recommendedItem">Recommended</p>}
            <h3 className="adTitle">{item.title}</h3>
            <div className="priceContainer">
              <h2 className="priceTitle">₦ {addCommas(price)}</h2>
              <div className="priceSelectors">
                <AdItemCustomPriceButton
                  isActive={isActive}
                  isSelected={currentPriceType === "weekly"}
                  onClick={() => togglePriceType(item.id, "weekly")}
                  className="priceSelector"
                >
                  Weekly
                </AdItemCustomPriceButton>
                <AdItemCustomPriceButton
                  isActive={isActive}
                  isSelected={currentPriceType === "monthly"}
                  onClick={() => togglePriceType(item.id, "monthly")}
                  className="priceSelector"
                >
                  Monthly
                </AdItemCustomPriceButton>
              </div>
            </div>
            <div className="featuresContainer">
              <h3 className="featuresHeading">Features</h3>
              <p className="featuresSubCaption">Everything in our basic our basic plan plus</p>
              {descriptionArray.map((description, i) => (
                <div key={i} className="descriptionText">
                  <InlineIcon icon="lucide:check-circle" />
                  <p>{description}</p>
                </div>
              ))}
            </div>
            <button className="paymentButton" onClick={() => console.log(currentPriceType)}>
              Proceed to payment
            </button>
          </AdItem>
        );
      })}
    </AdPricesContainer>
  );
}

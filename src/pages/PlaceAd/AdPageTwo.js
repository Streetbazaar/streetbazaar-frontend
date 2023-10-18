import React from "react";
import { AdContainer } from "./PlaceAd.styled";

export default function AdPageTwo({ onNextPage }) {
  return (
    <AdContainer>
      <div className="radioWrapper">
        <label htmlFor="Title">Price Type</label>
        <div className="radioGroup">
          <span className="radioContainer">
            <input value="fixed" name="priceType" type="radio" />
            <label htmlFor="fixed">Fixed</label>
          </span>
          <span className="radioContainer">
            <input value="negotiable" name="priceType" type="radio" />
            <label htmlFor="negotiable">Negotiable</label>
          </span>
          <span className="radioContainer">
            <input value="on-call" name="priceType" type="radio" />
            <label htmlFor="on-call">On-call</label>
          </span>
        </div>
      </div>
      <div className="inputContainer">
        <label htmlFor="Price">
          Price <span className="subText">(Naira)</span>{" "}
        </label>
        <input placeholder="Enter your price" type="text" />
      </div>

      <div className="radioWrapper">
        <label htmlFor="condition">Condition</label>
        <div className="radioGroup">
          <span className="radioContainer">
            <input value="new" name="condition" type="radio" />
            <label htmlFor="new">New</label>
          </span>
          <span className="radioContainer">
            <input value="old" name="condition" type="radio" />
            <label htmlFor="old">Old</label>
          </span>
          <span className="radioContainer">
            <input value="foreign-used" name="condition" type="radio" />
            <label htmlFor="foreign-used">Foreign Used</label>
          </span>
        </div>
      </div>

      <div className="inputContainer">
        <label htmlFor="description">
          Description
        </label>
        <input className="descriptionInput" placeholder="Detailed description of your product or service" type="text" />
      </div>
    </AdContainer>
  );
}

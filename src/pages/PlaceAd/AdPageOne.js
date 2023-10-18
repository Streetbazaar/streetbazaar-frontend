import React from "react";
import { AdContainer } from "./PlaceAd.styled";

export default function AdPageOne({ onNextPage }) {
  return (
    <AdContainer>
      <div className="inputContainer">
        <label htmlFor="Title">Title</label>
        <input
          placeholder="Enter the title of the product or service"
          type="text"
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="Category">Category</label>
        <select name="Category" id="Category">
          <option value="">Select Category</option>
        </select>
      </div>

      <div className="inputContainer">
        <label htmlFor="Sub-Category">Sub-Category</label>
        <select name="Sub-Category" id="Sub-Category">
          <option value="">Select Sub-Category</option>
        </select>
      </div>

      <div className="locationWrapper">
        <div className="inputContainer">
          <label htmlFor="State">State</label>
          <select name="State" id="State">
            <option value="">Select State</option>
          </select>
        </div>
        <div className="inputContainer">
          <label htmlFor="City">City</label>
          <select name="City" id="City">
            <option value="">Select City</option>
          </select>
        </div>
      </div>
      <div className="inputContainer">
        <label htmlFor="Address">Address</label>
        <input
            className="addressInput"
          placeholder="Enter your store address"
          type="text"
        />
      </div>
    </AdContainer>
  );
}

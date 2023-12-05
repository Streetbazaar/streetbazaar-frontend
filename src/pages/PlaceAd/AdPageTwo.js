import React from "react";
import { AdContainer } from "./PlaceAd.styled";
import { useDispatch, useSelector } from "react-redux";
import { updateInput } from "../../features/inputSlice";

export default function AdPageTwo({ onNextPage }) {
  const { imageURLs, title, address, state, city, category, subCategory, priceType, price, description, condition } = useSelector((state) => state.input);
  const dispatch = useDispatch()
  const handleInputChange = (e) => {
    dispatch(updateInput({ [e.target.name]: e.target.value }));
  };
  return (
    <AdContainer>
      <div className="radioWrapper">
        <label htmlFor="Title">Price Type</label>
        <div className="radioGroup">
          <span className="radioContainer">
            <input onChange={handleInputChange} value="fixed" name="priceType" type="radio" checked={priceType === "fixed"} />
            <label htmlFor="fixed">Fixed</label>
          </span>
          <span className="radioContainer">
            <input onChange={handleInputChange} value="negotiable" name="priceType" type="radio" checked={priceType === "negotiable"} />
            <label htmlFor="negotiable">Negotiable</label>
          </span>
          <span className="radioContainer">
            <input onChange={handleInputChange} value="on-call" name="priceType" type="radio" checked={priceType === "on-call"} />
            <label htmlFor="on-call">On-call</label>
          </span>
        </div>
      </div>
      <div className="inputContainer">
        <label htmlFor="Price">
          Price <span className="subText">(Naira)</span>{" "}
        </label>
        <input onChange={handleInputChange} name="price" placeholder="Enter your price" type="number"  value={price} />
      </div>

      <div className="radioWrapper">
        <label htmlFor="condition">Condition</label>
        <div className="radioGroup">
          <span className="radioContainer">
            <input onChange={handleInputChange} value="new" name="condition" type="radio" checked={condition === "new"} />
            <label htmlFor="new">New</label>
          </span>
          <span className="radioContainer">
            <input onChange={handleInputChange} value="old" name="condition" type="radio" checked={condition === "old"} />
            <label htmlFor="old">Old</label>
          </span>
          <span className="radioContainer">
            <input onChange={handleInputChange} value="foreign-used" name="condition" type="radio" checked={condition === "foreign-used"} />
            <label htmlFor="foreign-used">Foreign Used</label>
          </span>
        </div>
      </div>

      <div className="inputContainer">
        <label htmlFor="description">
          Description
        </label>
        <textarea onChange={handleInputChange} value={description} name="description" className="descriptionInput" placeholder="Detailed description of your product or service" type="text" />
      </div>
      <button className="nextButton" onClick={onNextPage}>Next Step</button>
    </AdContainer>
  );
}

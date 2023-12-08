import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { POST_ADVERT } from "../../components/api";
import { updateAdId, updateInput } from "../../features/inputSlice";
import { AdContainer } from "./PlaceAd.styled";

export default function AdPageTwo({ onNextPage }) {
  const {
    imageURLs,
    title,
    address,
    state,
    city,
    category,
    subCategory,
    priceType,
    price,
    description,
    condition,
    adId,
    categoryId,
    subCategoryId,
    quantity
  } = useSelector((state) => state.input);
  const { userProfile, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    dispatch(updateInput({ [e.target.name]: e.target.value }));
  };
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (
    title,
    categoryId,
    subCategoryId,
    state,
    city,
    address,
    priceType,
    price,
    condition,
    description,
    imageURLs,
    quantity,
    token
  ) => {
    try {
      setLoading(true)
      const response = await POST_ADVERT(
        title,
        categoryId,
        subCategoryId,
        state,
        city,
        address,
        priceType,
        price,
        condition,
        description,
        imageURLs,
        quantity,
        token
      );
      if (response) {
        setLoading(false)
        console.log(response);
        dispatch(updateAdId(response?.id));
        if (userProfile?.is_staff) {
          toast.success("Advert submitted for review");
          navigate("/");
        } else {
          toast.success("Advert submitted for review");
          onNextPage();
        }
      }
    } catch (err) {
      setLoading(false)
      toast.error(err.message);
    }
  };
  return (
    <AdContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(
            title,
            categoryId,
            subCategoryId,
            state,
            city,
            address,
            priceType,
            price,
            condition,
            description,
            imageURLs,
            quantity,
            token
          );
        }}
      >
        <div className="radioWrapper">
          <label htmlFor="Title">Price Type</label>
          <div className="radioGroup">
            <span className="radioContainer">
              <input
                onChange={handleInputChange}
                value="fixed"
                name="priceType"
                type="radio"
                checked={priceType === "fixed"}
                required
              />
              <label htmlFor="fixed">Fixed</label>
            </span>
            <span className="radioContainer">
              <input
                onChange={handleInputChange}
                value="negotiable"
                name="priceType"
                type="radio"
                checked={priceType === "negotiable"}
                required
              />
              <label htmlFor="negotiable">Negotiable</label>
            </span>
            <span className="radioContainer">
              <input
                onChange={handleInputChange}
                value="on-call"
                name="priceType"
                type="radio"
                checked={priceType === "on-call"}
                required
              />
              <label htmlFor="on-call">On-call</label>
            </span>
          </div>
        </div>
        <div className="inputContainer">
          <label htmlFor="Price">
            Price <span className="subText">(Naira)</span>{" "}
          </label>
          <input
            onChange={handleInputChange}
            name="price"
            placeholder="Enter your price"
            type="number"
            value={price}
            required
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="Price">
            Quantity <span className="subText">(pcs)</span>{" "}
          </label>
          <input
            onChange={handleInputChange}
            name="quantity"
            placeholder="Enter the quantity of your product"
            type="number"
            value={quantity}
            required
          />
        </div>

        <div className="radioWrapper">
          <label htmlFor="condition">Condition</label>
          <div className="radioGroup">
            <span className="radioContainer">
              <input
                onChange={handleInputChange}
                value="new"
                name="condition"
                type="radio"
                checked={condition === "new"}
                required
              />
              <label htmlFor="new">New</label>
            </span>
            <span className="radioContainer">
              <input
                onChange={handleInputChange}
                value="old"
                name="condition"
                type="radio"
                checked={condition === "old"}
                required
              />
              <label htmlFor="old">Old</label>
            </span>
            <span className="radioContainer">
              <input
                onChange={handleInputChange}
                value="foreign-used"
                name="condition"
                type="radio"
                checked={condition === "foreign-used"}
                required
              />
              <label htmlFor="foreign-used">Foreign Used</label>
            </span>
          </div>
        </div>

        <div className="inputContainer">
          <label htmlFor="description">Description</label>
          <textarea
            required
            onChange={handleInputChange}
            value={description}
            name="description"
            className="descriptionInput"
            placeholder="Detailed description of your product or service"
            type="text"
          />
        </div>
        <button disabled={loading} className="nextButton" type="submit">
          {loading ? "Loading..." : "Next Step"}
        </button>
      </form>
    </AdContainer>
  );
}

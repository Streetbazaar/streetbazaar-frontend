import { InlineIcon } from "@iconify/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addCommas,
  formatDateString,
  formatRelativeTime,
} from "../../../functions";
import {
  ImageSliderContainer,
  MainImage,
  SingleImage,
} from "./InvestmentAdDetails.styled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function InvestmentAdImageSlider({ product }) {
  const { token } = useSelector((state) => state.user);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [translateSign, setTranslateSign] = useState(1); // Default to positive sign
  const [isSwiping, setIsSwiping] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const SWIPE_THRESHOLD = 10; // Adjust as needed
  let touchStartX = null;
  const navigate = useNavigate();

  const nextImage = () => {
    setActiveImageIndex(
      (prevIndex) => (prevIndex + 1) % product?.pictures?.length
    );
  };

  const prevImage = () => {
    setActiveImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + product?.pictures?.length) % product?.pictures?.length
    );
  };

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!touchStartX) return;

    const touchEndX = e.touches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > SWIPE_THRESHOLD) {
      nextImage();
      setTranslateSign(1);
      setIsSwiping(true);
    } else if (deltaX < -SWIPE_THRESHOLD) {
      prevImage();
      setTranslateSign(-1);
      setIsSwiping(true);
    }

    touchStartX = null;
  };

  const handleTouchEnd = () => {
    touchStartX = null;
    setIsSwiping(false);
  };

  return (
    <ImageSliderContainer>
      <div className="imagesWrapper">
        <div className="mainImage">
          <MainImage
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            src={product.pictures[activeImageIndex].image_url}
            alt="product"
            // translateSign={translateSign}
            // activeIndex={activeImageIndex}
            // isSwiping={isSwiping}
          />
        </div>

        <div className="imagesList">
          {product.pictures.map((image, i) => (
            <SingleImage
              key={i}
              onClick={() => setActiveImageIndex(i)}
              src={image?.image_url}
            />
          ))}
        </div>
      </div>

      <div className="productDetails">
        <h1 className="mainHeading">{product?.title}</h1>
        <div className="dateLocationContainer">
          <div className="detailsWrapper">
            <span>Posted on: </span>
            <span>{formatDateString(product.created_at)}</span>
          </div>
          <InlineIcon icon="ph:dot" />
          <div className="detailsWrapper">
            <span>Location: </span>
            <span>
              {product.city}, {product.state}
            </span>
          </div>
        </div>

        <div className="ownerDetails">
          <div className="ownerGroup">
            <h5>Current Price</h5>
            <div className="priceWrapper">
              <h2>₦ {addCommas(product.price)}</h2>
            </div>
          </div>
          <div className="ownerGroup">
            <h5>Return on Investement on this product will be</h5>
            <div className="priceWrapper">
              <h2>₦ {addCommas(product.price)}</h2>
            </div>
          </div>
          <div className="ownerGroup">
            <h5>Investment Duration</h5>
            <p>{formatRelativeTime(product.owner_data.created_at)}</p>
          </div>
        </div>

        <div className="buttonsGroup">
          <button
            onClick={() => setShowContact(!showContact)}
            disabled={token ? false : true}
            className="showContactBtn"
          >
            {showContact ? (
              <a href={`tel:${product?.owner_data?.phone_number}`}>
                {product?.owner_data?.phone_number}
              </a>
            ) : (
              <p>Buy to Resell</p>
            )}
          </button>
        </div>
      </div>
    </ImageSliderContainer>
  );
}

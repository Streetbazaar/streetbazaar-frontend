import { InlineIcon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { addCommas, formatDateString } from "../../functions";
import {
  ImageSliderContainer,
  MainImage,
  SingleImage,
} from "./ProductDetails.styled";
import { useSelector } from "react-redux";

export default function ImageSlider({product}) {
  const {token} = useSelector(state=>state.user)
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [translateSign, setTranslateSign] = useState(1); // Default to positive sign
  const [isSwiping, setIsSwiping] = useState(false);
  const SWIPE_THRESHOLD = 10; // Adjust as needed
  let touchStartX = null;
  

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
        <div className="priceWrapper">
          <h2>₦ {addCommas(product.price)}</h2>
          <span>{product.price_type}</span>
        </div>

        <div className="ownerDetails">
          <div className="ownerGroup">
            <h5>Store Name</h5>
            <p>Happiness Computers</p>
          </div>
          <div className="ownerGroup">
            <h5>Store Address</h5>
            <p>Mayfair garden, Awoyaya Ikeja, Lagos</p>
          </div>
          <div className="ownerGroup">
            <h5>Time on Street Bazaar</h5>
            <p>3years</p>
          </div>
        </div>

        <div className="buttonsGroup">
          <button disabled={token? false : true} className="showContactBtn">Show contact</button>
          <button disabled={token? false : true}  className="startChatBtn">Start Chat</button>
        </div>
      </div>
    </ImageSliderContainer>
  );
}

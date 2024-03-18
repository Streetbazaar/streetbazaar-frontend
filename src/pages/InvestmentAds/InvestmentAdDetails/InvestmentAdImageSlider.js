import { InlineIcon } from "@iconify/react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { INVEST_AD_PAY } from "../../../components/api";
import { addCommas, formatDateString } from "../../../functions";
import {
  ImageSliderContainer,
  MainImage,
  SingleImage,
} from "./InvestmentAdDetails.styled";

export default function InvestmentAdImageSlider({ product }) {
  const { token } = useSelector((state) => state.user);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [translateSign, setTranslateSign] = useState(1); // Default to positive sign
  const [loading, setLoading] = useState(false);
  const [isSwiping, setIsSwiping] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const SWIPE_THRESHOLD = 10; // Adjust as needed
  let touchStartX = null;
  const navigate = useNavigate();

  const investAdPayment = async () => {
    try {
      setLoading(true);
      const res = await INVEST_AD_PAY(product.id, token);

      if (res) {
        setLoading(false);
        console.log(res);
      }
    } catch (err) {
      setLoading(false);
      if(err?.response?.data?.detail) {

        toast.error(err?.response?.data?.detail);
      } else {

        toast.error(err.message);
      }
    }
  };

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
            src={product?.advert_image_url}
            // src={product?.pictures[activeImageIndex]?.advert_image_url}
            alt="product"
            // translateSign={translateSign}
            // activeIndex={activeImageIndex}
            // isSwiping={isSwiping}
          />
        </div>

        <div className="imagesList">
          <SingleImage
            onClick={() => setActiveImageIndex(0)}
            src={product.advert_image_url}
            // src={image?.advert_image_url}
          />
          {/* {product.pictures.map((image, i) => (
            <SingleImage
              key={i}
              onClick={() => setActiveImageIndex(i)}
              src={product.advert_image_url}
              // src={image?.advert_image_url}
            />
          ))} */}
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
            <span>{product.address}</span>
          </div>
        </div>

        <div className="ownerDetails">
          <div className="ownerGroup">
            <h5>Current Price</h5>
            <div className="priceWrapper">
              <h2>₦ {addCommas(product.current_price)}</h2>
            </div>
          </div>
          <div className="ownerGroup">
            <h5>Return on Investement on this product will be</h5>
            <div className="priceWrapper">
              <h2>₦ {addCommas(product.return_price)}</h2>
            </div>
          </div>
          <div className="ownerGroup">
            <h5>Investment Duration</h5>
            <p>{product.investment_duration}</p>
          </div>
        </div>

        <div className="buttonsGroup">
          <button
            onClick={investAdPayment}
            disabled={token && !loading ? false : true}
            className="showContactBtn"
          >
            <p>{loading ? "Buying...." : "Buy to Resell"}</p>
          </button>
        </div>
      </div>
    </ImageSliderContainer>
  );
}

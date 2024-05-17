import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderInnerContainer, ArrowButton,BottomSliderInner, SliderInner, SliderInnerImage, SliderInnerParagraph, SliderInnerTopLine } from "../styles/customerreview-carousel.styled";



export default function CustomerReview() {
  
  const NextArrow = ({ onClick }) => (
    <ArrowButton onClick={onClick} className="nextArrow">
      &gt;
    </ArrowButton>
  );
  
  const PrevArrow = ({ onClick }) => (
    <ArrowButton onClick={onClick} className="prevArrow">
      &lt;
    </ArrowButton>
  );
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />
  };



  return (
    <Slider {...settings}>
     
      <SliderInnerContainer>
        <SliderInner>
          <SliderInnerTopLine></SliderInnerTopLine>
          <SliderInnerImage src="https://www.hubspot.com/hs-fs/hubfs/Florencia%20Santovio%20Duronea%20copy.jpg?width=120&height=120&name=Florencia%20Santovio%20Duronea%20copy.jpg" alt=""/>
          <SliderInnerParagraph>HubSpot is a company that listens and invests in its customers. They know that our success is their success.</SliderInnerParagraph>
          <BottomSliderInner>
           <h5>AARON GOH</h5>
           <span>Head of MarketingSpenmo</span>
          </BottomSliderInner>
          </SliderInner>
      </SliderInnerContainer>



      <SliderInnerContainer>
        <SliderInner>
          <SliderInnerTopLine></SliderInnerTopLine>
          <SliderInnerImage src="https://www.hubspot.com/hs-fs/hubfs/AARON%20GOH.jpeg?width=120&height=120&name=AARON%20GOH.jpeg" alt=""/>
          <SliderInnerParagraph>HubSpot is a company that listens and invests in its customers. They know that our success is their success.</SliderInnerParagraph>
          <BottomSliderInner>
           <h5>AARON GOH</h5>
           <span>Head of MarketingSpenmo</span>
          </BottomSliderInner>
          </SliderInner>
      </SliderInnerContainer>



      <SliderInnerContainer>
        <SliderInner>
          <SliderInnerTopLine></SliderInnerTopLine>
          <SliderInnerImage src="https://www.hubspot.com/hs-fs/hubfs/Headshot%20-%20Frank%20Loughan%20(1)-1.jpeg?width=120&height=120&name=Headshot%20-%20Frank%20Loughan%20(1)-1.jpeg" alt=""/>
          <SliderInnerParagraph>HubSpot is a company that listens and invests in its customers. They know that our success is their success.</SliderInnerParagraph>
          <BottomSliderInner>
           <h5>FRANK LOUGHAN</h5>
           <span>VP Revenue Operations</span>
          </BottomSliderInner>
          </SliderInner>
      </SliderInnerContainer>


    </Slider>
  );
}
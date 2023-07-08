import React, {useEffect} from "react";
import jumbotron from "../assets/images/jumbtron.png";
import {
  PrimaryBtn,
  StyledInput,
  SearchInput,
  MainText,
  SearchIconDiv,
  MainContainer,
} from "../components/styles/styledComponents";
import { SearchIconSvg } from "../components/SvgComponents";
import Category from "../components/Category/Category";
import TrendingProducts from "../components/TrendingAds/TrendingAds";
import Testimonies from "../components/Testimonies/Testimonies";
import InvestmentAds from "./InvestmentAds/InvestmentAds";

const Home = () => {

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    
    if (code) {
    
      console.log(code);

    }
  }, []);
  return (
    <MainContainer>
      <MainText>BUY, SELL, RENT AND EXCHANGE IN ONE CLICK</MainText>
      <SearchInput>
        <SearchIconDiv>
          <SearchIconSvg />
        </SearchIconDiv>
        <StyledInput
          style={{ paddingLeft: 50, height: 50 }}
          placeholder="Search for product"
        />
        <PrimaryBtn width={10}>Search</PrimaryBtn>
      </SearchInput>
      <img
        src={jumbotron}
        alt="ShowcaseImage"
        style={{ width: "100%", aspectRatio: 2 / 1, marginBottom: 20 }}
      />
      <Category />
      <InvestmentAds />
      <TrendingProducts />
      <Testimonies />
    </MainContainer>
  );
};

export default Home;

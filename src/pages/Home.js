import React from "react";
import Header from "../components/Header";
import jumbotron from "../assets/images/jumbtron.png";
import { Colors } from "../utils/colors";
import {
  PrimaryBtn,
  StyledInput,
  SearchInput,
  MainText,
  SearchIconDiv,
} from "../components/styles/styledComponents";
import { SearchIconSvg } from "../components/SvgComponents";
import Footer from "../components/Footer";
import Category from "../components/Category/Category";
import InvestmentProducts from "../components/InvestmentAds/InvestmentAds";
import TrendingProducts from "../components/TrendingAds/TrendingAds";
import Testimonies from "../components/Testimonies/Testimonies";
// import Notification from "../components/Notification";
import { useSelector } from "react-redux";

const Home = () => {
  return (
    <main
      style={{
        padding: "15px",
        maxWidth: "1440px",
        margin: "0 auto",
        
      }}
    >
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
      <InvestmentProducts />
      <TrendingProducts />
      <Testimonies />
    </main>
  );
};

export default Home;

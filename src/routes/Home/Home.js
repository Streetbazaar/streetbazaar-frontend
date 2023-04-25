import React from "react";
import Header from "../../components/Header";
import jumbotron from "../../assets/images/jumbtron.png";
import { Colors } from "../../utils/colors";
import {
  PrimaryBtn,
  StyledInput,
  SearchInput
} from "../../components/styles/styledComponents";
import { SearchIconSvg } from "../../components/SvgComponents";
import Footer from "../../components/Footer";
import Category from "../../components/Category/Category";
import InvestmentProducts from "../../components/investmentAds/InvestmentAds";
import TrendingProducts from "../../components/TrendingAds/TrendingAds";
import Testimonies from "../../components/Testimonies/Testimonies";

const Home = () => {
  return (
    <div>
      <Header />
      <main
        style={{
          padding: "15px",
          maxWidth: "1440px",
          margin: "0 auto",
          marginTop: 150,
        }}
      >
        <h1
          style={{
            color: Colors.neutral_color.color900,
            width: "50%",
            fontSize: 35,
          }}
        >
          BUY, SELL, RENT AND EXCHANGE IN ONE CLICK
        </h1>
        <SearchInput>
          <div style={{ position: "absolute", bottom: 8, left: 20 }}>
            <SearchIconSvg />
          </div>
          <StyledInput
            style={{ paddingLeft: 50, height: 50 }}
            placeholder="Search for product"
          />
          <PrimaryBtn style={{ width: "10%" }}>Search</PrimaryBtn>
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
      <Footer />
    </div>
  );
};

export default Home;

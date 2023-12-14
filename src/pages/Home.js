import { motion } from "framer-motion";
import React from "react";
import jumbotron from "../assets/images/jumbtron.png";
import Category from "../components/Category/Category";
import { SearchIconSvg } from "../components/SvgComponents";
import Testimonies from "../components/Testimonies/Testimonies";
import TrendingProducts from "../components/TrendingAds/TrendingAds";
import {
  MainContainer,
  MainText,
  PrimaryBtn,
  SearchIconDiv,
  SearchInput,
  StyledInput,
} from "../components/styles/styledComponents";
import InvestmentAds from "./InvestmentAds/InvestmentAds";

const Home = () => {
  return (
    <motion.main
      className="main__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 10, type: "spring", stiffness: 100 }}
    >
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
    </motion.main>
  );
};

export default Home;

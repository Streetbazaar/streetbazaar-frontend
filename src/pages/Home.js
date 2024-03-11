import { motion } from "framer-motion";
import React, { useEffect } from "react";
import jumbotron from "../assets/images/jumbtron.png";
import pjumbotron from "../assets/images/pjumbtron.jpg";
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
import { useDispatch } from "react-redux";
import { fetchCategories } from "../features/advertSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Home = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchCategories())
  }, [])
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
        <LazyLoadImage
          src={jumbotron}
          alt="ShowcaseImage"
          placeholdersrc={pjumbotron}
          effect="blur"
          width="100%"
          style={{ width: "100%", aspectRatio: 2 / 1, marginBottom: 20 }}
        />
        <Category />
        <InvestmentAds />
        <TrendingProducts />
        {/* <Testimonies /> */}
      </MainContainer>
    </motion.main>
  );
};

export default Home;

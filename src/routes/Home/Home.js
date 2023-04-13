import React from "react";
import Header from "../../components/header/Header";
import jumbotron from "../../assets/images/jumbtron.png";
import { Colors } from "../../utils/colors";
import { GridItem, PrimaryBtn, StyledInput } from "../../components/styledComponents";
import { SearchIconSvg } from "../../components/SvgComponents";

const Home = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: "15px", maxWidth: "1440px", margin: "0 auto",  marginTop: 150,  }}>
        <h1
          style={{
            color: Colors.neutral_color.color900,
            width: "50%",
            fontSize: 35,
          }}
        >
          BUY, SELL, RENT AND EXCHANGE IN ONE CLICK
        </h1>
        <div
          style={{
            marginBottom: 20,
            position: "relative",
            display: "flex",
            gap: 10,
            marginTop: 40,
          }}
        >
          <div style={{ position: "absolute", bottom: 8, left: 20 }}>
            <SearchIconSvg />
          </div>
          <StyledInput
            style={{ paddingLeft: 50, height: 50 }}
            placeholder="Search for product"
          />
          <PrimaryBtn style={{ width: "10%" }}>Search</PrimaryBtn>
        </div>
        <img
          src={jumbotron}
          alt="Showcase Image"
          style={{ width: "100%", aspectRatio: 2 / 1, marginBottom: 20 }}
        />
        <section>
          <h2
            style={{
              color: Colors.neutral_color.color900,
              fontSize: 25,
              marginBottom: 20
            }}
          >
            Categories
          </h2>
          <div className="categoriesGridContainer">
            <GridItem bgColor={Colors.success_color.color100}>1</GridItem>
            <GridItem bgColor={Colors.primary_color.color100}>2</GridItem>
            <GridItem bgColor={Colors.lightPeach}>3</GridItem>
            <GridItem bgColor={Colors.darkPeach}>4</GridItem>
            <GridItem bgColor={Colors.warning_color.color100}>5</GridItem>
            <GridItem bgColor={Colors.skyBlue}>6</GridItem>
            <GridItem bgColor={Colors.warning_color.color90}>7</GridItem>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

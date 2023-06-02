import React from "react";
import {
  GridItem1,
  GridItem2,
  GridItem3,
  GridItem4,
  GridItem5,
  GridItem6,
  GridItem7,
  CategoryItem,
  CategoryContainer,
  Flex1,
  Flex2,
  Flex1Item1,
  Flex2Item,
  Flex2Item2,
} from "./Category.styled";
import { Colors } from "../../utils/colors";
import image1 from "./Category-images/phone mockup.png";
import image2 from "./Category-images/Beep Beep Limo.png";
import image3 from "./Category-images/Beep Beep Luggage.png";
import image4 from "./Category-images/Shopaholics Medium Shot.png";
import image5 from "./Category-images/Beep Beep Boxes.png";
import image6 from "./Category-images/Beep Beep Papers.png";
import image7 from "./Category-images/The Little Things Business Planning.png";
import "../../App.css";
import { Link } from "react-router-dom";


export default function Category() {
  return (
    <CategoryContainer>
      <h2
        style={{
          color: Colors.neutral_color.color900,
          fontSize: "13px",
          marginBottom: "12px",
          fontWeight: "600",
        }}
      >
        Categories
      </h2>
  
      <CategoryItem>
        <GridItem1 bgColor={Colors.success_color.color100}>
          <Flex1>
            <Flex1Item1>
              <h4>Phones, Tablets, and Smart Watches</h4>
              <p>203 Products</p>
            </Flex1Item1>
          </Flex1>
          <Flex2>
            <div>
              <Link to="category-detail/Phones, Tablets, and Smart Watches 📲/1">
                <Flex2Item>Buy Now</Flex2Item>
              </Link>
            </div>
            <div>
              <img src={image1} alt="" />
            </div>
          </Flex2>
        </GridItem1>

        <GridItem2 bgColor={Colors.primary_color.color100}>
          <Flex1>
            <Flex1Item1>
              <h4>Automobile</h4>
              <p>203 Products</p>
            </Flex1Item1>
          </Flex1>
          <Flex2>
            <div>
              <Link to="category-detail/Automobile 🚗/2">
                <Flex2Item2>Buy Now</Flex2Item2>
              </Link>
            </div>
            <div>
              <img src={image2} alt="" />
            </div>
          </Flex2>
        </GridItem2>

        <GridItem3 bgColor={Colors.lightPeach}>
          <Flex1>
            <Flex1Item1>
              <h4>Property</h4>
              <p>203 Products</p>
            </Flex1Item1>
          </Flex1>
          <Flex2>
            <div>
              <Link to="category-detail/Property 🏔/3">
                <Flex2Item2>Buy Now</Flex2Item2>
              </Link>
            </div>
            <div>
              <img src={image3} alt="" />
            </div>
          </Flex2>
        </GridItem3>
        <GridItem4 bgColor={Colors.darkPeach}>
          <Flex1>
            <Flex1Item1>
              <h4>Health and Beauty</h4>
              <p>203 Products</p>
            </Flex1Item1>
          </Flex1>
          <Flex2>
            <div>
              <Link to="category-detail/Health and Beauty 🩺💋/4">
                <Flex2Item2>Buy Now</Flex2Item2>
              </Link>
            </div>
            <div>
              <img src={image4} alt="" />
            </div>
          </Flex2>
        </GridItem4>
        <GridItem5 bgColor={Colors.warning_color.color100}>
          <Flex1>
            <Flex1Item1>
              <h4>Services</h4>
              <p>203 Products</p>
            </Flex1Item1>
          </Flex1>
          <Flex2>
            <div>
              <Link to="category-detail/Services 👨‍🔧/6">
                <Flex2Item2>Buy Now</Flex2Item2>
              </Link>
            </div>
            <div>
              <img src={image5} alt="" />
            </div>
          </Flex2>
        </GridItem5>

        <GridItem6 bgColor={Colors.skyBlue}>
          <Flex1>
            <Flex1Item1>
              <h4>Others</h4>
              <p>203 Products</p>
            </Flex1Item1>
          </Flex1>
          <Flex2>
            <div>
              <Link to="category-detail/Others 🌄/7">
                <Flex2Item>Buy Now</Flex2Item>
              </Link>
            </div>
            <div>
              <img src={image6} alt="" />
            </div>
          </Flex2>
        </GridItem6>
        <GridItem7 bgColor={Colors.warning_color.color90}>
          <Flex1>
            <Flex1Item1>
              <h4>Business and Industry</h4>
              <p>203 Products</p>
            </Flex1Item1>
          </Flex1>
          <Flex2>
            <div>
              <Link to="category-detail/Business and Industry 🗄/8">
                <Flex2Item>Buy Now</Flex2Item>
              </Link>
            </div>
            <div>
              <img src={image7} alt="" />
            </div>
          </Flex2>
        </GridItem7>
      </CategoryItem>
    </CategoryContainer>
  );
}
